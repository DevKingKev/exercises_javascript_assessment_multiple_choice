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

function loadAssessment (file) {
    try {
        // require from absolute path; clear cache to ensure fresh load
        delete require.cache[require.resolve(file)];
        const mod = require(file);
        return mod && (mod.questions || mod.default && mod.default.questions) ? (mod.questions || mod.default.questions) : null;
    } catch (e) {
        return { error: String(e) };
    }
}

function countCorrectLetters (questions) {
    const counts = { A: 0, B: 0, C: 0, D: 0 };
    for (const q of questions) {
        const c = q && q.correct ? String(q.correct).toUpperCase() : 'UNKNOWN';
        if (counts[c] !== undefined) counts[c]++;
    }
    return counts;
}

function analyze () {
    const files = findAssessmentFiles(ASSESSMENTS_DIR);
    const report = [];
    for (const f of files) {
        const relative = path.relative(process.cwd(), f);
        const loaded = loadAssessment(f);
        if (!loaded) {
            report.push({ file: relative, error: 'No questions found or invalid export' });
            continue;
        }
        if (loaded && loaded.error) {
            report.push({ file: relative, error: loaded.error });
            continue;
        }
        const counts = countCorrectLetters(loaded);
        const total = Object.values(counts).reduce((a, b) => a + b, 0);
        const max = Math.max(...Object.values(counts));
        const skew = (max / Math.max(total, 1));
        report.push({ file: relative, total, counts, skew });
    }

    const outPath = path.resolve(process.cwd(), 'assessment-report.json');
    fs.writeFileSync(outPath, JSON.stringify(report, null, 2), 'utf8');
    console.log('Wrote report to', outPath);

    // Print highlights
    console.log('\nSkewed assessments (skew > 0.45 or total < 4):');
    for (const r of report) {
        if (r.error) continue;
        if (r.total < 4 || r.skew > 0.45) {
            console.log(`- ${r.file}: total=${r.total}, counts=${JSON.stringify(r.counts)}, skew=${(r.skew * 100).toFixed(1)}%`);
        }
    }
}

analyze();
