const fs = require('fs');
const path = require('path');

const REBALANCE_REPORT = path.resolve(__dirname, '..', '..', 'multiple_choice', 'rebalance-report.json');
const ASSESSMENTS_ROOT = path.resolve(__dirname, '..', '..', 'multiple_choice', 'assessments');

function requireAssessment (file) {
    delete require.cache[require.resolve(file)];
    const mod = require(file);
    return mod && (mod.questions ? mod : (mod.default ? mod.default : null));
}

describe('Rebalance dry-run verification', () => {
    let report;
    beforeAll(() => {
        if (!fs.existsSync(REBALANCE_REPORT)) {
            throw new Error(`Rebalance report not found at ${REBALANCE_REPORT}. Run scripts/rebalance_assessments.js (dry-run) first.`);
        }
        report = JSON.parse(fs.readFileSync(REBALANCE_REPORT, 'utf8'));
    });

    test('each proposed swap preserves correct option content mapping and results in 4 options and valid correct letter', () => {
        for (const entry of report) {
            if (!entry || !entry.actions || entry.actions.length === 0) continue;
            const filePath = entry.file;
            const abs = path.resolve(process.cwd(), filePath);
            const mod = requireAssessment(abs);
            if (!mod || !Array.isArray(mod.questions)) {
                throw new Error(`Assessment ${filePath} could not be loaded or has no questions`);
            }

            const original = JSON.parse(JSON.stringify(mod.questions));
            const clone = JSON.parse(JSON.stringify(mod.questions));

            // apply actions in order to cloned questions
            for (const a of entry.actions) {
                const idx = a.index;
                const from = String(a.from).toUpperCase();
                const to = String(a.to).toUpperCase();
                const qOrig = original[idx];
                const qClone = clone[idx];
                if (!qOrig || !qOrig.options) throw new Error(`Question missing at ${filePath} index ${idx}`);
                const optsOrig = qOrig.options;
                const optsClone = qClone.options;

                if (!(from in optsOrig)) throw new Error(`Original option ${from} missing in ${filePath} q#${idx}`);
                if (!(to in optsOrig)) throw new Error(`Original option ${to} missing in ${filePath} q#${idx}`);

                const beforeFrom = optsOrig[from];
                const beforeTo = optsOrig[to];

                // perform swap in clone (symmetric swap of option contents)
                const tmp = optsClone[to];
                optsClone[to] = optsClone[from];
                optsClone[from] = tmp;
                // update correct to point to where the correct contents now reside
                qClone.correct = to;

                // assert that the new correct option (to) now contains the previous correct content
                if (optsClone[to] !== beforeFrom) {
                    throw new Error(`Swap validation failed for ${filePath} q#${idx}: expected ${to} to equal original ${from}`);
                }
                // assert that the other option now contains the original target content
                if (optsClone[from] !== beforeTo) {
                    throw new Error(`Swap validation failed for ${filePath} q#${idx}: expected ${from} to equal original ${to}`);
                }

                // after swap, ensure options still include A-D
                ['A', 'B', 'C', 'D'].forEach(k => {
                    if (!(k in optsClone)) throw new Error(`Post-swap options missing ${k} in ${filePath} q#${idx}`);
                });

                if (!['A', 'B', 'C', 'D'].includes(String(qClone.correct))) throw new Error(`Invalid correct letter after swap for ${filePath} q#${idx}`);
            }

            // After applying all actions, verify distribution is near-uniform (max-min <= 1)
            const counts = { A: 0, B: 0, C: 0, D: 0 };
            for (const q of clone) {
                const c = String(q.correct || '').toUpperCase();
                if (counts[c] === undefined) throw new Error(`Invalid correct letter ${c} in ${filePath}`);
                counts[c]++;
            }
            const vals = Object.values(counts);
            const mx = Math.max(...vals);
            const mn = Math.min(...vals);
            if ((mx - mn) > 1) {
                throw new Error(`Distribution not balanced for ${filePath}: ${JSON.stringify(counts)}`);
            }
        }
    }, 30000);
});
