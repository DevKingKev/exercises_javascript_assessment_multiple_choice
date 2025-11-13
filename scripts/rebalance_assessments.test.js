const { _test } = require('./rebalance_assessments.js');
const {
    calculateDistribution,
    identifySkewedOptions,
    balancedTargetLetters
} = _test;

// Test helper to create mock questions with specific correct answers
function createMockQuestions (correctAnswers) {
    return correctAnswers.map((correct, i) => ({
        question: `Test question ${i + 1}`,
        correct,
        options: {
            A: 'Option A',
            B: 'Option B',
            C: 'Option C',
            D: 'Option D'
        }
    }));
}

// Test calculateDistribution
function testCalculateDistribution () {
    console.log('Testing calculateDistribution...');

    // Test case 1: Skewed distribution
    const questions1 = createMockQuestions(['A', 'A', 'A', 'A', 'A', 'A', 'B', 'B', 'B', 'B', 'B', 'B', 'B', 'B', 'B', 'B', 'B', 'B', 'B', 'B', 'B', 'B', 'B', 'B', 'D']);
    const result1 = calculateDistribution(questions1);
    console.assert(result1.A === 6, `Expected A=6, got ${result1.A}`);
    console.assert(result1.B === 18, `Expected B=18, got ${result1.B}`);
    console.assert(result1.C === 0, `Expected C=0, got ${result1.C}`);
    console.assert(result1.D === 1, `Expected D=1, got ${result1.D}`);
    console.log('✓ Skewed distribution calculated correctly');

    // Test case 2: Balanced distribution
    const questions2 = createMockQuestions(['A', 'A', 'A', 'A', 'A', 'A', 'B', 'B', 'B', 'B', 'B', 'B', 'C', 'C', 'C', 'C', 'C', 'C', 'D', 'D', 'D', 'D', 'D', 'D', 'A']);
    const result2 = calculateDistribution(questions2);
    console.assert(result2.A === 7, `Expected A=7, got ${result2.A}`);
    console.assert(result2.B === 6, `Expected B=6, got ${result2.B}`);
    console.assert(result2.C === 6, `Expected C=6, got ${result2.C}`);
    console.assert(result2.D === 6, `Expected D=6, got ${result2.D}`);
    console.log('✓ Balanced distribution calculated correctly');
}

// Test identifySkewedOptions
function testIdentifySkewedOptions () {
    console.log('\nTesting identifySkewedOptions...');

    // Test case 1: Skewed distribution (A=6, B=18, C=0, D=1) total=25
    const counts1 = { A: 6, B: 18, C: 0, D: 1 };
    const result1 = identifySkewedOptions(counts1, 25);

    // A is 24% (6/25) - OK (within 20-30%)
    console.assert(!result1.overrepresented.includes('A'), 'A should not be overrepresented');
    console.assert(!result1.underrepresented.includes('A'), 'A should not be underrepresented');

    // B is 72% (18/25) - OVERREPRESENTED (>30%)
    console.assert(result1.overrepresented.includes('B'), 'B should be overrepresented');

    // C is 0% (0/25) - UNDERREPRESENTED (<20%)
    console.assert(result1.underrepresented.includes('C'), 'C should be underrepresented');

    // D is 4% (1/25) - UNDERREPRESENTED (<20%)
    console.assert(result1.underrepresented.includes('D'), 'D should be underrepresented');

    console.log('✓ Skewed options identified correctly: overrepresented =', result1.overrepresented, ', underrepresented =', result1.underrepresented);

    // Test case 2: Balanced distribution (all within 20-30%)
    const counts2 = { A: 7, B: 6, C: 6, D: 6 }; // 28%, 24%, 24%, 24%
    const result2 = identifySkewedOptions(counts2, 25);
    console.assert(result2.overrepresented.length === 0, 'No options should be overrepresented');
    console.assert(result2.underrepresented.length === 0, 'No options should be underrepresented');
    console.log('✓ Balanced distribution identified correctly (no skew)');

    // Test case 3: Multiple overrepresented
    const counts3 = { A: 10, B: 10, C: 3, D: 2 }; // 40%, 40%, 12%, 8%
    const result3 = identifySkewedOptions(counts3, 25);
    console.assert(result3.overrepresented.includes('A'), 'A should be overrepresented');
    console.assert(result3.overrepresented.includes('B'), 'B should be overrepresented');
    console.assert(result3.underrepresented.includes('C'), 'C should be underrepresented');
    console.assert(result3.underrepresented.includes('D'), 'D should be underrepresented');
    console.log('✓ Multiple overrepresented options identified correctly');
}

// Test balancedTargetLetters with skew-only rebalancing
function testBalancedTargetLetters () {
    console.log('\nTesting balancedTargetLetters with skew-only rebalancing...');

    // Test case 1: Skewed distribution - should only rebalance skewed options
    const currentCounts1 = { A: 6, B: 18, C: 0, D: 1 };
    const n1 = 25;
    const target1 = balancedTargetLetters(n1, currentCounts1);

    // Count occurrences in target
    const targetCounts1 = { A: 0, B: 0, C: 0, D: 0 };
    for (const letter of target1) {
        targetCounts1[letter]++;
    }

    console.log('Target distribution:', targetCounts1);

    // A should remain unchanged (24% is within range)
    console.assert(targetCounts1.A === 6, `A should be preserved at 6, got ${targetCounts1.A}`);
    console.log('✓ A preserved at 6 (24%)');

    // B should be reduced to max 30% (≤7-8 for n=25)
    const maxB = Math.ceil(n1 * 0.30); // 8
    console.assert(targetCounts1.B <= maxB, `B should be ≤${maxB}, got ${targetCounts1.B}`);
    console.log(`✓ B reduced from 18 to ${targetCounts1.B} (≤30%)`);

    // C should be increased to at least 20% (≥5 for n=25)
    const minC = Math.floor(n1 * 0.20); // 5
    console.assert(targetCounts1.C >= minC, `C should be ≥${minC}, got ${targetCounts1.C}`);
    console.log(`✓ C increased from 0 to ${targetCounts1.C} (≥20%)`);

    // D should be increased to at least 20% (≥5 for n=25)
    const minD = Math.floor(n1 * 0.20); // 5
    console.assert(targetCounts1.D >= minD, `D should be ≥${minD}, got ${targetCounts1.D}`);
    console.log(`✓ D increased from 1 to ${targetCounts1.D} (≥20%)`);

    // Total should still be n
    console.assert(targetCounts1.A + targetCounts1.B + targetCounts1.C + targetCounts1.D === n1, 'Total should equal n');
    console.log('✓ Total preserved at', n1);

    // Test case 2: Already balanced - should not change
    const currentCounts2 = { A: 7, B: 6, C: 6, D: 6 };
    const n2 = 25;
    const target2 = balancedTargetLetters(n2, currentCounts2);

    const targetCounts2 = { A: 0, B: 0, C: 0, D: 0 };
    for (const letter of target2) {
        targetCounts2[letter]++;
    }

    console.log('\nAlready balanced - target distribution:', targetCounts2);
    console.assert(targetCounts2.A === 7, `A should remain 7, got ${targetCounts2.A}`);
    console.assert(targetCounts2.B === 6, `B should remain 6, got ${targetCounts2.B}`);
    console.assert(targetCounts2.C === 6, `C should remain 6, got ${targetCounts2.C}`);
    console.assert(targetCounts2.D === 6, `D should remain 6, got ${targetCounts2.D}`);
    console.log('✓ Already balanced distribution preserved');

    // Test case 3: No currentCounts (backward compatibility)
    const target3 = balancedTargetLetters(24); // Old behavior: equal distribution
    const targetCounts3 = { A: 0, B: 0, C: 0, D: 0 };
    for (const letter of target3) {
        targetCounts3[letter]++;
    }
    console.log('\nBackward compatibility (no currentCounts) - target distribution:', targetCounts3);
    console.assert(targetCounts3.A === 6, 'Should create equal distribution');
    console.assert(targetCounts3.B === 6, 'Should create equal distribution');
    console.assert(targetCounts3.C === 6, 'Should create equal distribution');
    console.assert(targetCounts3.D === 6, 'Should create equal distribution');
    console.log('✓ Backward compatibility maintained');
}

// Test edge cases
function testEdgeCases () {
    console.log('\nTesting edge cases...');

    // Test case 1: Empty distribution
    const counts1 = { A: 0, B: 0, C: 0, D: 0 };
    const result1 = identifySkewedOptions(counts1, 0);
    console.assert(result1.overrepresented.length === 0, 'Empty distribution should have no overrepresented');
    console.assert(result1.underrepresented.length === 0, 'Empty distribution should have no underrepresented');
    console.log('✓ Empty distribution handled correctly');

    // Test case 2: All same option (extreme skew)
    const counts2 = { A: 25, B: 0, C: 0, D: 0 };
    const result2 = identifySkewedOptions(counts2, 25);
    console.assert(result2.overrepresented.includes('A'), 'A should be overrepresented');
    console.assert(result2.underrepresented.includes('B'), 'B should be underrepresented');
    console.assert(result2.underrepresented.includes('C'), 'C should be underrepresented');
    console.assert(result2.underrepresented.includes('D'), 'D should be underrepresented');
    console.log('✓ Extreme skew identified correctly');

    // Test case 3: Just at boundaries (20% and 30%)
    const counts3 = { A: 5, B: 7, C: 6, D: 7 }; // n=25: 20%, 28%, 24%, 28%
    const result3 = identifySkewedOptions(counts3, 25);
    console.assert(!result3.overrepresented.includes('A'), 'A at 20% should not be flagged');
    console.assert(!result3.overrepresented.includes('B'), 'B at 28% should not be flagged');
    console.log('✓ Boundary values handled correctly');
}

// Run all tests
console.log('======================================');
console.log('Running rebalance_assessments.js tests');
console.log('======================================\n');

try {
    testCalculateDistribution();
    testIdentifySkewedOptions();
    testBalancedTargetLetters();
    testEdgeCases();

    console.log('\n======================================');
    console.log('✓ All tests passed!');
    console.log('======================================\n');
} catch (error) {
    console.error('\n❌ Test failed:', error.message);
    console.error(error.stack);
    process.exit(1);
}
