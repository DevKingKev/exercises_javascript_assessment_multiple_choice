const fs = require('fs');
const path = require('path');
const os = require('os');

const REBALANCER = path.resolve(__dirname, '..', 'rebalance_assessments.js');
const reb = require(REBALANCER)._test;

describe('Rebalancer protection behavior', () => {
    const fixturesDir = path.resolve(__dirname, 'fixtures');
    const tmpFile = path.join(fixturesDir, 'protect_assessment.js');

    beforeAll(() => {
        if (!fs.existsSync(fixturesDir)) fs.mkdirSync(fixturesDir, { recursive: true });

        const mod = {
            metadata: { title: 'protect test', domain: 'html' },
            questions: [
                // question 0 mentions 'both' in option B -> should be protected
                {
                    id: 0,
                    question: 'Q both',
                    options: { A: 'one', B: 'contains both options', C: 'three', D: 'four' },
                    correct: 'A'
                },
                // question 1 has 'All of the above' in option B -> should be protected and recorded
                {
                    id: 1,
                    question: 'Q all',
                    options: { A: 'x', B: 'All of the above', C: 'y', D: 'z' },
                    correct: 'A'
                },
                // question 2 is a normal question that could be swapped
                {
                    id: 2,
                    question: 'Q normal',
                    options: { A: 'optA', B: 'optB', C: 'optC', D: 'optD' },
                    correct: 'A'
                }
            ]
        };

        const content = 'module.exports = ' + JSON.stringify(mod, null, 2) + '\n';
        fs.writeFileSync(tmpFile, content, 'utf8');
    });

    afterAll(() => {
        try { fs.unlinkSync(tmpFile); } catch (e) { }
        try { fs.rmdirSync(path.dirname(tmpFile)); } catch (e) { }
    });

    test('regex constants match expected phrases', () => {
        expect(reb.PROTECT_BOTH_RE.test('both')).toBe(true);
        expect(reb.ALL_NONE_RE.test('All of the above')).toBe(true);
        expect(reb.ALL_NONE_RE.test('none of the above')).toBe(true);
    });

    test('rebalanceFile marks protected questions (dry-run)', () => {
        const res = reb.rebalanceFile(tmpFile, false);
        // Should not be an error
        expect(res.error).toBeUndefined();
        // There should be actions array (protection marker for q1 at least)
        expect(Array.isArray(res.actions)).toBe(true);

        // Find protection marker for question index 1 (All of the above)
        const protAll = res.actions.find(a => a && a.reason === 'protectedAllOrNone' && a.index === 1);
        expect(protAll).toBeDefined();

        // There should be no action for question 0 because 'both' protection results in skip
        const protBoth = res.actions.find(a => a && a.index === 0);
        // protBoth may be undefined because 'both' protection is represented by skipping the question entirely
        // Ensure the rebalance result did not include any swap action for index 0
        const swapFor0 = (res.actions || []).find(a => a && a.from && a.index === 0);
        expect(swapFor0).toBeUndefined();
    });
});
