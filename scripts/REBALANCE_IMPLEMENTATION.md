# Rebalance Assessments - Skew-Only Implementation

## Overview

The `rebalance_assessments.js` script has been updated to only rebalance answer options that fall outside the acceptable 20-30% range, rather than creating a perfectly equal distribution for all assessments.

## Key Changes

### 1. New Helper Functions

#### `calculateDistribution(questions)`
Analyzes the current distribution of correct answers in an assessment.

```javascript
// Returns: { A: 6, B: 18, C: 0, D: 1 }
const currentCounts = calculateDistribution(questions);
```

#### `identifySkewedOptions(counts, total)`
Identifies which answer options are outside the acceptable range:
- **Overrepresented**: > 30% of answers
- **Underrepresented**: < 20% of answers

```javascript
// For counts = { A: 6, B: 18, C: 0, D: 1 } with total = 25:
const skewed = identifySkewedOptions(counts, 25);
// Returns: {
//   overrepresented: ['B'],  // 72% > 30%
//   underrepresented: ['C', 'D']  // 0% and 4% < 20%
// }
```

### 2. Updated Core Function

#### `balancedTargetLetters(n, currentCounts)`
Now accepts an optional `currentCounts` parameter. When provided:

1. **Preserves balanced options** (20-30% range) - they stay exactly as they are
2. **Reduces overrepresented options** to the maximum 30% threshold
3. **Increases underrepresented options** to the minimum 20% threshold
4. **Redistributes intelligently** based on actual need

When `currentCounts` is not provided (backward compatibility), creates equal distribution as before.

### 3. Integration in `rebalanceFile()`

The rebalance logic now:

```javascript
// Calculate current distribution
const currentCounts = calculateDistribution(questions);

// Generate target that only rebalances skewed options
const target = balancedTargetLetters(n, currentCounts);
```

## Example Scenarios

### Scenario 1: Heavily Skewed Distribution

**Before**: `{ A: 6, B: 18, C: 0, D: 1 }` (n=25)
- A: 24% - **OK** (within 20-30%)
- B: 72% - **OVERREPRESENTED** (>30%)
- C: 0% - **UNDERREPRESENTED** (<20%)
- D: 4% - **UNDERREPRESENTED** (<20%)

**After**: `{ A: 6, B: 7, C: 6, D: 6 }`
- A: **Preserved** at 6 (24% - was already acceptable)
- B: **Reduced** from 18 to 7 (28% - within range)
- C: **Increased** from 0 to 6 (24% - within range)
- D: **Increased** from 1 to 6 (24% - within range)

**Actions**: Only 18 swaps needed (instead of 24-25 with equal distribution)

### Scenario 2: Already Balanced

**Before**: `{ A: 7, B: 6, C: 6, D: 6 }` (n=25)
- A: 28% - **OK**
- B: 24% - **OK**
- C: 24% - **OK**
- D: 24% - **OK**

**After**: `{ A: 7, B: 6, C: 6, D: 6 }`
- **No changes** - all options already within acceptable range

**Actions**: 0 swaps needed

### Scenario 3: Multiple Overrepresented

**Before**: `{ A: 10, B: 10, C: 3, D: 2 }` (n=25)
- A: 40% - **OVERREPRESENTED**
- B: 40% - **OVERREPRESENTED**
- C: 12% - **UNDERREPRESENTED**
- D: 8% - **UNDERREPRESENTED**

**After**: Balanced within 20-30% range for all options

## Testing

A comprehensive test suite has been created at `scripts/rebalance_assessments.test.js`.

### Running Tests

```bash
cd /home/kevin/vhosts/buildwithhtml5_assessment_platform
node scripts/rebalance_assessments.test.js
```

### Test Coverage

- ✅ Calculate distribution correctly
- ✅ Identify skewed options (overrepresented and underrepresented)
- ✅ Preserve options already within 20-30% range
- ✅ Reduce overrepresented options to ≤30%
- ✅ Increase underrepresented options to ≥20%
- ✅ Handle already balanced distributions (no changes)
- ✅ Handle extreme skew (e.g., 100% single option)
- ✅ Handle boundary values (exactly 20% and 30%)
- ✅ Backward compatibility (no currentCounts parameter)

## Benefits

1. **Preserves Good Distributions**: Doesn't over-correct assessments that are already acceptable
2. **Minimal Changes**: Only swaps what's necessary to fix actual problems
3. **Intelligent Balancing**: Focuses redistribution where it's needed most
4. **Protection Maintained**: Still respects "both", "all of the above", "none of the above" patterns
5. **Backward Compatible**: Works with existing scripts that don't pass currentCounts

## Usage

The script works exactly as before for end users:

```bash
# Dry-run (shows what would change)
node scripts/rebalance_assessments.js

# Apply changes
node scripts/rebalance_assessments.js --apply
```

The difference is now it only modifies files with actual distribution problems (options outside 20-30% range).
