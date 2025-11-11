#!/usr/bin/env node
const fs = require('fs');
const path = require('path');

const ASSESSMENTS_DIR = path.resolve(__dirname, '..', 'multiple_choice', 'assessments');

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
        for (let i = 0; i < n; i++) {
            const q = questions[i];
            const current = String(q.correct || '').toUpperCase();
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
            // Swap the option texts and update correct
            swapOptions(opts, current, want);
            q.correct = want;
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
    let files;
    if (dirArg) {
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

main();
