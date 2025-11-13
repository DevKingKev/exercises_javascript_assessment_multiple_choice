#!/usr/bin/env node
const fs = require('fs');
const path = require('path');

const ASSESSMENTS_DIR = path.resolve(__dirname, '..', 'multiple_choice', 'assessments');

// Patterns for semantic-preservation rules
const PROTECT_BOTH_RE = /\bboth\b/i; // questions that mention "both" should be left alone
const ALL_NONE_RE = /\b(all of the above|none of the above)\b/i; // ensure these live in D

function findAssessmentFiles (dir) {
    const out = [];
    const items = fs.readdirSync(dir, { withFileTypes: true });
    for (const it of items) {
        const full = path.join(dir, it.name);
        if (it.isDirectory()) out.push(...findAssessmentFiles(full));
        else if (it.isFile() && it.name.endsWith('.js')) out.push(full);
    }
    return out;
}

function requireAssessment (file) {
    delete require.cache[require.resolve(file)];
    const mod = require(file);
    // Support both module.exports = { ... } and export default
    return mod && (mod.questions ? mod : (mod.default ? mod.default : null));
}

function balancedTargetLetters (n) {
    const letters = ['A', 'B', 'C', 'D'];
    const base = Math.floor(n / 4);
    const rem = n % 4;
    const counts = { A: base, B: base, C: base, D: base };
    for (let i = 0; i < rem; i++) counts[letters[i]]++;
    const arr = [];
    Object.keys(counts).forEach(l => {
        for (let i = 0; i < counts[l]; i++) arr.push(l);
    });
    // Shuffle array to avoid patterns
    for (let i = arr.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [arr[i], arr[j]] = [arr[j], arr[i]];
    }
    return arr;
}

function swapOptions (optionsObj, fromLetter, toLetter) {
    // swap values of two keys A-D
    const tmp = optionsObj[toLetter];
    optionsObj[toLetter] = optionsObj[fromLetter];
    optionsObj[fromLetter] = tmp;
}

function writeBackup (file) {
    const bak = file + '.bak.' + Date.now();
    fs.copyFileSync(file, bak);
    return bak;
}

function saveAssessmentFile (file, obj) {
    // Write as CommonJS module.exports = <object literal>
    const content = 'module.exports = ' + JSON.stringify(obj, null, 2) + '\n';
    fs.writeFileSync(file, content, 'utf8');
}

function rebalanceFile (file, apply = false) {
    try {
        const mod = requireAssessment(file);
        if (!mod || !Array.isArray(mod.questions)) return { file, skipped: true };
        const questions = mod.questions;
        const n = questions.length;
        if (n === 0) return { file, skipped: true };

        const target = balancedTargetLetters(n);

        const actions = [];
        // First: mark protected questions (contain "both") and ensure any option
        // containing "all of the above" or "none of the above" lives in slot D.
        const protectedQuestions = new Set();
        for (let i = 0; i < n; i++) {
            const q = questions[i];
            const opts = q.options || {};
            try {
                // If any option contains the word 'both', protect this question from any rebalancing
                for (const letter of ['A', 'B', 'C', 'D']) {
                    const txt = opts[letter];
                    if (typeof txt === 'string' && PROTECT_BOTH_RE.test(txt)) {
                        protectedQuestions.add(i);
                        break;
                    }
                }
                // If any option contains 'all of the above' or 'none of the above',
                // protect this question from any rebalancing swaps. We must never move
                // those options because doing so can break semantics even when they
                // are not the correct answer.
                for (const letter of ['A', 'B', 'C', 'D']) {
                    const text = opts[letter];
                    if (typeof text === 'string' && ALL_NONE_RE.test(text)) {
                        protectedQuestions.add(i);
                        // record a no-op action so dry-run output shows this protection
                        actions.push({ index: i, reason: 'protectedAllOrNone', letter });
                        break;
                    }
                }
            } catch (e) {
                // ignore per-question failure and continue
            }
        }

        // Now perform the normal balancing swaps for non-protected questions
        for (let i = 0; i < n; i++) {
            if (protectedQuestions.has(i)) continue; // skip questions that mention 'both'
            const q = questions[i];
            // Support different persisted field names for the correct answer
            const rawCurrent = q && (q.correct || q.correctAnswer || q.correct_choice || q.correctOption || '');
            const current = String(rawCurrent).toUpperCase();
            const want = target[i];
            if (!current || !['A', 'B', 'C', 'D'].includes(current)) continue;
            if (current === want) continue;
            const opts = q.options || {};
            // ensure both keys exist; if missing, skip
            if (!(opts[current] && (opts[want] || opts[want] === ''))) {
                // if target key missing, try to set target to some existing key
                const existing = Object.keys(opts).find(k => ['A', 'B', 'C', 'D'].includes(k));
                if (!existing) continue;
            }
            // Swap the option texts and update correct (persist to known fields)
            swapOptions(opts, current, want);
            // Update canonical field
            q.correct = want;
            // Keep backward-compatible field if present
            if (q.correctAnswer !== undefined) q.correctAnswer = want;
            if (q.correct_choice !== undefined) q.correct_choice = want;
            if (q.correctOption !== undefined) q.correctOption = want;
            actions.push({ index: i, from: current, to: want });
        }

        if (actions.length === 0) return { file, applied: false, actions: [] };

        if (apply) {
            const bak = writeBackup(file);
            // Rebuild module object
            const modObj = Object.assign({}, mod);
            modObj.questions = questions;
            saveAssessmentFile(file, modObj);
            return { file, applied: true, backup: bak, actions };
        }
        return { file, applied: false, actions };
    } catch (e) {
        return { file, error: String(e) };
    }
}

function main () {
    const args = process.argv.slice(2);
    const apply = args.includes('--apply');
    // optional directory filter: --dir=relative/path
    const dirArg = args.find(a => a.startsWith('--dir='));
    const fileArg = args.find(a => a.startsWith('--file='));
    const help = args.includes('--help') || args.includes('-h');
    if (help) {
        console.log('Usage: node rebalance_assessments.js [--dir=path/to/assessments] [--file=path/to/assessment.js] [--apply]');
        console.log('Options:');
        console.log('  --dir=path    Run on all assessment files under the given dir (defaults to multiple_choice/assessments)');
        console.log('  --file=path   Run only on a single assessment file');
        console.log('  --apply       Apply changes (create backups). Without --apply the script performs a dry-run');
        console.log('  --scan-backups-combinational   Scan .bak.* backups for combinational options (dry-run)');
        console.log('  --restore-combinational [--apply] Restore questions that contained combinational options from backups');
        process.exit(0);
    }
    let files;
    if (fileArg) {
        const p = fileArg.split('=')[1];
        const resolved = path.resolve(process.cwd(), p);
        if (!fs.existsSync(resolved)) {
            console.error('Specified file does not exist:', resolved);
            process.exit(1);
        }
        files = [resolved];
    } else if (dirArg) {
        const sub = dirArg.split('=')[1];
        const resolved = path.resolve(process.cwd(), sub);
        if (!fs.existsSync(resolved)) {
            console.error('Specified dir for rebalancer does not exist:', resolved);
            process.exit(1);
        }
        files = findAssessmentFiles(resolved);
    } else {
        files = findAssessmentFiles(ASSESSMENTS_DIR);
    }
    const results = [];
    for (const f of files) {
        const res = rebalanceFile(f, apply);
        results.push(res);
    }
    const out = path.resolve(process.cwd(), 'rebalance-report.json');
    fs.writeFileSync(out, JSON.stringify(results, null, 2), 'utf8');
    console.log('Wrote rebalance report to', out);
    // Print summary
    for (const r of results) {
        if (r.error) console.log('ERROR', r.file, r.error);
        else if (r.skipped) console.log('SKIP', r.file);
        else if (r.applied) console.log('APPLIED', r.file, `actions=${r.actions.length}`, `backup=${r.backup}`);
        else if (r.actions && r.actions.length) console.log('DRY-RUN', r.file, `actions=${r.actions.length}`);
    }
}

// Helper: restore specific questions from backup when option text contains combinational phrases
function restoreCombinationalQuestionsFromBackups () {
    const reportPath = path.resolve(process.cwd(), 'rebalance-report.json');
    const apply = process.argv.slice(2).includes('--apply');
    if (!fs.existsSync(reportPath)) {
        console.error('No rebalance-report.json found at', reportPath);
        process.exit(1);
    }
    const report = JSON.parse(fs.readFileSync(reportPath, 'utf8'));
    // If the rebalance report doesn't contain applied entries with backups,
    // fall back to using the scan-based restore-report.json if present.
    const hasAppliedWithBackup = report.some(e => e && e.applied && e.backup);
    let useScanReport = false;
    if (!hasAppliedWithBackup) {
        const scanPath = path.resolve(process.cwd(), 'restore-report.json');
        if (fs.existsSync(scanPath)) {
            try {
                const scan = JSON.parse(fs.readFileSync(scanPath, 'utf8'));
                if (Array.isArray(scan) && scan.length > 0) {
                    // convert scan entries into a compatible "report" entry shape
                    const mapped = scan.map(s => ({ file: s.file, applied: true, backup: s.backup, _scanCandidates: s.candidates }));
                    // replace report with mapped entries for processing below
                    report.length = 0; // clear
                    report.push(...mapped);
                    useScanReport = true;
                }
            } catch (e) {
                // ignore parse errors and continue with original report
            }
        }
    }
    const restoreResults = [];
    const pattern = /\bboth\s+[A-D]\s+and\s+[A-D]\b/i;
    for (const entry of report) {
        if (!entry || !entry.applied || !entry.backup) continue;
        const file = entry.file;
        const backup = entry.backup;
        try {
            if (!fs.existsSync(file) || !fs.existsSync(backup)) {
                restoreResults.push({ file, skipped: true, reason: 'missing_file_or_backup' });
                continue;
            }
            const cur = requireAssessment(file);
            const bak = requireAssessment(backup);
            if (!cur || !Array.isArray(cur.questions) || !bak || !Array.isArray(bak.questions)) {
                restoreResults.push({ file, skipped: true, reason: 'invalid_module' });
                continue;
            }
            const questionsCur = cur.questions;
            const questionsBak = bak.questions;
            const restoredIndices = [];
            const minLen = Math.min(questionsCur.length, questionsBak.length);
            for (let i = 0; i < minLen; i++) {
                const q = questionsCur[i];
                const bq = questionsBak[i];
                if (!q || !q.options) continue;
                const opts = q.options;
                let found = false;
                for (const letter of ['A', 'B', 'C', 'D']) {
                    const txt = opts[letter];
                    if (typeof txt === 'string' && pattern.test(txt)) {
                        found = true;
                        break;
                    }
                }
                if (found) {
                    // Replace this question with backup version (preserve other fields)
                    questionsCur[i] = questionsBak[i];
                    restoredIndices.push(i);
                }
            }
            if (restoredIndices.length === 0) {
                restoreResults.push({ file, restored: 0 });
                continue;
            }
            // If apply, write backup then save file
            let newBak = null;
            if (apply) {
                newBak = writeBackup(file);
                const modObj = Object.assign({}, cur);
                modObj.questions = questionsCur;
                saveAssessmentFile(file, modObj);
            }
            restoreResults.push({ file, applied: !!apply, backup: newBak, restored: restoredIndices.length, indices: restoredIndices });
        } catch (e) {
            restoreResults.push({ file, error: String(e) });
        }
    }
    const out = path.resolve(process.cwd(), 'restore-report.json');
    fs.writeFileSync(out, JSON.stringify(restoreResults, null, 2), 'utf8');
    console.log('Wrote restore report to', out);
    for (const r of restoreResults) {
        if (r.error) console.log('ERROR', r.file, r.error);
        else if (r.skipped) console.log('SKIP', r.file, r.reason || '');
        else if (r.applied) console.log('RESTORED', r.file, `indices=${r.restored}`, `backup=${r.backup}`);
        else console.log('DRY-RUN-RESTORE', r.file, `indices=${r.restored || 0}`);
    }
}

// Scan all backup files (.bak.*) for combinational phrases and produce candidates
function findBackupFiles (dir) {
    const out = [];
    if (!fs.existsSync(dir)) return out;
    const items = fs.readdirSync(dir, { withFileTypes: true });
    for (const it of items) {
        const full = path.join(dir, it.name);
        if (it.isDirectory()) out.push(...findBackupFiles(full));
        else if (it.isFile() && it.name.includes('.bak.')) out.push(full);
    }
    return out;
}

function scanBackupsForCombinational () {
    const backups = findBackupFiles(ASSESSMENTS_DIR);
    const pattern = /\bboth\s+[A-D]\s*(?:and|&)\s*[A-D]\b/i;
    const results = [];
    for (const bak of backups) {
        try {
            // Load backup module
            const bakMod = requireAssessment(bak);
            if (!bakMod || !Array.isArray(bakMod.questions)) continue;
            const orig = bak.replace(/\.bak\..*$/, '');
            const entry = { file: orig, backup: bak, candidates: [] };
            const curExists = fs.existsSync(orig);
            let curMod = null;
            if (curExists) curMod = requireAssessment(orig);
            const minLen = Math.min(bakMod.questions.length, (curMod && Array.isArray(curMod.questions)) ? curMod.questions.length : bakMod.questions.length);
            for (let i = 0; i < minLen; i++) {
                const bq = bakMod.questions[i];
                if (!bq || !bq.options) continue;
                let found = false;
                const matches = [];
                for (const letter of ['A', 'B', 'C', 'D']) {
                    const txt = bq.options[letter];
                    if (typeof txt === 'string' && pattern.test(txt)) {
                        found = true;
                        matches.push({ letter, text: txt });
                    }
                }
                if (!found) continue;
                // If current file missing or current question differs from backup for these option texts, candidate for restore
                let differing = true;
                if (curMod && Array.isArray(curMod.questions)) {
                    const cq = curMod.questions[i];
                    if (cq && cq.options) {
                        // If any of the matching texts remain identical in current, consider not differing
                        differing = matches.some(m => typeof cq.options[m.letter] !== 'string' || cq.options[m.letter].trim() !== m.text.trim());
                    }
                }
                if (differing) {
                    entry.candidates.push({ index: i, matches });
                }
            }
            if (entry.candidates.length > 0) results.push(entry);
        } catch (e) {
            // ignore individual backup load failures
        }
    }
    const out = path.resolve(process.cwd(), 'restore-report.json');
    fs.writeFileSync(out, JSON.stringify(results, null, 2), 'utf8');
    console.log('Wrote restore report to', out);
    for (const r of results) {
        console.log('DRY-RUN-RESTORE', r.file, `candidates=${r.candidates.length}`);
    }
}

// Export internals for unit testing
module.exports = module.exports || {};
module.exports._test = {
    PROTECT_BOTH_RE,
    ALL_NONE_RE,
    findAssessmentFiles,
    requireAssessment,
    balancedTargetLetters,
    swapOptions,
    rebalanceFile,
    scanBackupsForCombinational,
    restoreCombinationalQuestionsFromBackups,
};

if (require.main === module) {
    const args = process.argv.slice(2);
    if (args.includes('--scan-backups-combinational')) {
        scanBackupsForCombinational();
    } else if (args.includes('--restore-combinational')) {
        restoreCombinationalQuestionsFromBackups();
    } else {
        main();
    }
}
