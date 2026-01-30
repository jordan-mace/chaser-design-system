# Fix All Failing Unit Tests

## TL;DR

> **Quick Summary**: Fix 25 failing test suites in React component library by correcting test imports, extending Sprinkles configuration to support component needs, and ensuring proper event handling patterns.
>
> **Deliverables**:
> - All 25 test suites passing with 0 failures
> - Updated sprinkles.css.ts with extended values
> - Fixed test imports and patterns across all test files
> - Complete test suite verification
>
> **Estimated Effort**: Large
> **Parallel Execution**: YES - 4 waves
> **Critical Path**: Fix sprinkles.css.ts → Fix component tests → Run full verification

---

## Context

### Original Request
Fix all failing unit tests in React component library with Vitest 4.0.10 + Playwright browser testing. User has 25 test files with failures across 3 categories: import errors, Sprinkles configuration mismatches, and event handler issues.

### Interview Summary
**Key Discussions**:
- User chose **Option A**: Extend sprinkles.css.ts to support all values components use (rather than modifying component code)
- Test infrastructure exists: Vitest 4.0.10 with Playwright browser testing
- Tests use `vitest-browser-react` for browser rendering, not `@testing-library/react`

**Research Findings**:
- sprinkles.css.ts has strict type definitions for display, width, height, spacing, and colors
- Components currently use values not defined in sprinkles config (inline-flex, pixel values, semantic color names)
- Box.tsx uses sprinkleKeys Set to filter props between sprinkles() and otherProps
- fireEvent is not exported from vitest-browser-react; tests should use `.click()` directly

### Metis Review
**Metis Not Available**: Skipped due to agent unavailability. Performed self-gap analysis instead.

---

## Work Objectives

### Core Objective
Fix all 25 failing test suites by: (1) correcting test imports and patterns, (2) extending Sprinkles configuration to support all values used by components, (3) ensuring event handlers properly trigger.

### Concrete Deliverables
- All 25 test suites passing with 0 failures
- Updated `packages/chaser-design-system/src/styles/sprinkles.css.ts` with extended values
- Fixed test imports in Box.test.tsx, Modal.test.tsx, Toggle.test.tsx
- Replaced all `jest.fn()` with `vi.fn()` occurrences
- Removed `fireEvent` usage from tests

### Definition of Done
```bash
cd packages/chaser-design-system
npm test
# Expected: All 25 test suites pass, 0 failures
```

### Must Have
- ✅ All test files use correct vitest-browser-react imports
- ✅ All test files use `vi.fn()` from vitest (not jest.fn())
- ✅ Sprinkles supports all values currently used by components
- ✅ All event handler tests properly trigger clicks
- ✅ 0 test failures after fixes

### Must NOT Have (Guardrails)
- ❌ Do NOT modify component code (extend sprinkles, not change components)
- ❌ Do NOT install @testing-library/react (use vitest-browser-react)
- ❌ Do NOT use fireEvent from vitest-browser-react (use .click() directly)
- ❌ Do NOT break passing tests (Badge, Card, Divider, Input, List, Navbar, Radio, Spinner, Table, Tabs, Text, Tooltip)
- ❌ Do NOT remove type safety from Sprinkles (add valid values, not make it too permissive)

---

## Verification Strategy

### Test Decision
- **Infrastructure exists**: YES (Vitest 4.0.10 + Playwright)
- **User wants tests**: YES (Automated verification with existing infra)
- **Framework**: vitest-browser-react (already configured)
- **QA approach**: Automated verification - run `npm test` after all fixes

### Automated Verification Procedure

Each task includes verification commands that the agent can run directly:

**After All Fixes (Final Verification):**
```bash
cd packages/chaser-design-system
npm test
# Expected: All 25 test suites pass, 0 failures
# Command: vitest --config=vitest.browser.config.ts
```

**Evidence to Capture:**
- [ ] Terminal output showing test results
- [ ] Pass/fail count for each test suite
- [ ] Final summary showing 0 failures

---

## Execution Strategy

### Parallel Execution Waves

```
Wave 1 (Start Immediately):
├── Task 1: Fix Box.test.tsx imports (independent)
├── Task 2: Fix Modal.test.tsx imports (independent)
└── Task 3: Fix Toggle.test.tsx imports (independent)

Wave 2 (After Wave 1):
├── Task 4: Search for all jest.fn() usage (independent)
├── Task 5: Search for all fireEvent usage (independent)
└── Task 6: Extend sprinkles.css.ts with missing values (independent)

Wave 3 (After Wave 2):
├── Task 7: Update Box.tsx sprinkleKeys (if needed, depends on Task 6)
└── Task 8: Verify all tests pass (depends on all previous tasks)

Critical Path: Task 6 (extend sprinkles) → Task 8 (verify tests)
Parallel Speedup: ~50% faster than sequential
```

### Dependency Matrix

| Task | Depends On | Blocks | Can Parallelize With |
|------|------------|--------|---------------------|
| 1 | None | 8 | 2, 3 |
| 2 | None | 8 | 1, 3 |
| 3 | None | 8 | 1, 2 |
| 4 | None | 5 | 5, 6 |
| 5 | None | 8 | 4, 6 |
| 6 | None | 7, 8 | 4, 5 |
| 7 | 6 | 8 | None (after Wave 2) |
| 8 | 1, 2, 3, 5, 7 | None | None (final verification) |

### Agent Dispatch Summary

| Wave | Tasks | Recommended Agents |
|------|-------|-------------------|
| 1 | 1, 2, 3 | delegate_task(category="quick", run_in_background=true) × 3 |
| 2 | 4, 5, 6 | delegate_task(category="unspecified-low", run_in_background=true) × 3 |
| 3 | 7, 8 | Task 7: background, Task 8: sequential (verification) |

---

## TODOs

- [ ] 1. Fix Box.test.tsx imports and jest.fn()

  **What to do**:
  - Remove `@testing-library/react` imports (not installed)
  - Change imports to use `vitest-browser-react` and `vitest`
  - Replace `jest.fn()` with `vi.fn()` imported from `vitest`

  **Must NOT do**:
  - Do NOT import `@testing-library/react` or `@testing-library/jest-dom`
  - Do NOT use `jest` anywhere in the file

  **Recommended Agent Profile**:
  > Select category + skills based on task domain. Justify each choice.
  - **Category**: `quick`
    - Reason: Small, focused file edits with clear pattern. Fast turnaround needed.
  - **Skills**: None required
    - Simple text replacement task, no special domain expertise needed.
  - **Skills Evaluated but Omitted**:
    - `git-master`: Not needed for file edits
    - `frontend-ui-ux`: Not needed, no design decisions
    - `playwright`: Not needed, only test file edits

  **Parallelization**:
  - **Can Run In Parallel**: YES
  - **Parallel Group**: Wave 1 (with Tasks 2, 3)
  - **Blocks**: Task 8 (final verification)
  - **Blocked By**: None (can start immediately)

  **References** (CRITICAL - Be Exhaustive):

  **Pattern References** (existing code to follow):
  - `packages/chaser-design-system/src/components/Badge/Badge.test.tsx:1-2` - Correct import pattern for vitest-browser-react tests
  - `packages/chaser-design-system/src/components/Spinner/Spinner.test.tsx:1-2` - Correct import pattern for vitest-browser-react tests
  - `packages/chaser-design-system/src/components/Button/Button.test.tsx:1-2` - Example of proper vitest-browser-react usage without jest.fn()

  **Test References** (testing patterns to follow):
  - `packages/chaser-design-system/src/components/Button/Button.test.tsx:14-25` - Event handler testing pattern using `await element.click()` (not fireEvent)

  **Documentation References** (specs and requirements):
  - `packages/chaser-design-system/vitest.browser.config.ts` - Test runner configuration (uses @vitest/browser-playwright)

  **External References** (libraries and frameworks):
  - vitest-browser-react docs: `https://vitest.dev/guide/browser.html` - API reference for render and assertions
  - vitest docs: `https://vitest.dev/api/vi.html#vi-fn` - vi.fn() usage

  **WHY Each Reference Matters** (explain the relevance):
  - Badge.test.tsx and Spinner.test.tsx show the correct import pattern that's already working in the project
  - Button.test.tsx demonstrates the proper event testing pattern without jest.fn()
  - vitest config confirms we're using browser testing with playwright, not node testing

  **Acceptance Criteria**:

  > **CRITICAL: AGENT-EXECUTABLE VERIFICATION ONLY**

  **Automated Verification (file checks):**
  ```bash
  # Agent runs:
  grep -n "@testing-library/react" packages/chaser-design-system/src/components/Box/Box.test.tsx
  # Assert: No results (0 lines found)

  grep -n "import.*render.*from.*vitest-browser-react" packages/chaser-design-system/src/components/Box/Box.test.tsx
  # Assert: Line 1 contains: `import { render } from 'vitest-browser-react';`

  grep -n "import.*expect.*from.*vitest" packages/chaser-design-system/src/components/Box/Box.test.tsx
  # Assert: Line 1 or 2 contains: `import { expect, it, describe } from 'vitest';`

  grep -n "jest.fn()" packages/chaser-design-system/src/components/Box/Box.test.tsx
  # Assert: No results (0 lines found)

  grep -n "vi.fn()" packages/chaser-design-system/src/components/Box/Box.test.tsx
  # Assert: Line 37 (or nearby) contains: `const handleClick = vi.fn();`
  ```

  **Evidence to Capture:**
  - [ ] Output of grep commands showing correct imports and no jest.fn()
  - [ ] File content showing corrected imports at top of file

  **Commit**: NO (groups with Task 2, 3)

- [ ] 2. Fix Modal.test.tsx imports and remove fireEvent

  **What to do**:
  - Remove `fireEvent` import from `vitest-browser-react`
  - Change line 108: replace `fireEvent.click(dialog)` with `await dialog.click()`
  - No other changes needed to test logic

  **Must NOT do**:
  - Do NOT import `fireEvent` from any other library
  - Do NOT change test assertions or expected behavior

  **Recommended Agent Profile**:
  - **Category**: `quick`
    - Reason: Simple import removal and single function call change.
  - **Skills**: None required
  - **Skills Evaluated but Omitted**:
    - `playwright`: Not needed, using browser testing API directly

  **Parallelization**:
  - **Can Run In Parallel**: YES
  - **Parallel Group**: Wave 1 (with Tasks 1, 3)
  - **Blocks**: Task 8 (final verification)
  - **Blocked By**: None (can start immediately)

  **References**:

  **Pattern References**:
  - `packages/chaser-design-system/src/components/Button/Button.test.tsx:23` - Correct pattern: `await button.click()` (not fireEvent.click())

  **Test References**:
  - `packages/chaser-design-system/src/components/Modal/Modal.test.tsx:97-110` - Current fireEvent usage that needs replacement

  **External References**:
  - vitest-browser-react docs: Event triggering via `.click()` method on DOM elements

  **WHY Each Reference Matters**:
  - Button.test.tsx shows the correct pattern already working in the codebase
  - Modal.test.tsx lines 97-110 show exactly where fireEvent needs to be removed

  **Acceptance Criteria**:

  **Automated Verification:**
  ```bash
  # Agent runs:
  grep -n "fireEvent" packages/chaser-design-system/src/components/Modal/Modal.test.tsx
  # Assert: No results (0 lines found)

  grep -n "await dialog.click()" packages/chaser-design-system/src/components/Modal/Modal.test.tsx
  # Assert: Line 108 (or nearby) contains: `await dialog.click();`
  ```

  **Evidence to Capture:**
  - [ ] Grep output showing no fireEvent usage
  - [ ] File content showing `await dialog.click()`

  **Commit**: NO (groups with Task 1, 3)

- [ ] 3. Fix Toggle.test.tsx imports and remove fireEvent

  **What to do**:
  - Remove `fireEvent` import from `vitest-browser-react`
  - Change line 49: replace `await fireEvent.click(input)` with `await input.click()`
  - Change line 58: replace `await fireEvent.click(input)` with `await input.click()`

  **Must NOT do**:
  - Do NOT import `fireEvent` from any other library
  - Do NOT change test assertions

  **Recommended Agent Profile**:
  - **Category**: `quick`
    - Reason: Simple import removal and two function call changes.

  **Parallelization**:
  - **Can Run In Parallel**: YES
  - **Parallel Group**: Wave 1 (with Tasks 1, 2)
  - **Blocks**: Task 8 (final verification)
  - **Blocked By**: None (can start immediately)

  **References**:

  **Pattern References**:
  - `packages/chaser-design-system/src/components/Button/Button.test.tsx:23` - Correct pattern: `await button.click()`

  **Test References**:
  - `packages/chaser-design-system/src/components/Toggle/Toggle.test.tsx:42-51` - First fireEvent usage (line 49)
  - `packages/chaser-design-system/src/components/Toggle/Toggle.test.tsx:53-60` - Second fireEvent usage (line 58)

  **Acceptance Criteria**:

  **Automated Verification:**
  ```bash
  # Agent runs:
  grep -n "fireEvent" packages/chaser-design-system/src/components/Toggle/Toggle.test.tsx
  # Assert: No results (0 lines found)

  grep -n "await input.click()" packages/chaser-design-system/src/components/Toggle/Toggle.test.tsx
  # Assert: 2 occurrences found (lines 49 and 58)
  ```

  **Evidence to Capture:**
  - [ ] Grep output showing no fireEvent usage
  - [ ] Grep output showing 2 instances of `await input.click()`

  **Commit**: YES (with Tasks 1, 2)
  - Message: `test: fix test imports and patterns (Box, Modal, Toggle)`
  - Files: `Box/Box.test.tsx`, `Modal/Modal.test.tsx`, `Toggle/Toggle.test.tsx`
  - Pre-commit: `npm test -- --run Box.test.tsx Modal.test.tsx Toggle.test.tsx`

- [ ] 4. Search for and document all jest.fn() usage

  **What to do**:
  - Search across all test files for any remaining `jest.fn()` usage
  - Document findings: if any found beyond Box.test.tsx, list them
  - If none found, report that Box.test.tsx was the only occurrence

  **Must NOT do**:
  - Do NOT modify any files (this is a search-only task)
  - Do NOT miss any test files (search *.test.tsx recursively)

  **Recommended Agent Profile**:
  - **Category**: `unspecified-low`
    - Reason: Simple grep search task, low complexity.

  **Skills Evaluated but Omitted**:
    - `grep`: Not a skill, can use Bash grep command directly

  **Parallelization**:
  - **Can Run In Parallel**: YES
  - **Parallel Group**: Wave 2 (with Tasks 5, 6)
  - **Blocks**: None (informational task)
  - **Blocked By**: None (can start immediately)

  **References**:

  **Test References**:
  - `packages/chaser-design-system/src/components/Box/Box.test.tsx:37` - Known jest.fn() usage

  **Acceptance Criteria**:

  **Automated Verification:**
  ```bash
  # Agent runs:
  grep -r "jest\.fn()" packages/chaser-design-system/src/components --include="*.test.tsx"
  # Assert: Either 0 results (if Box.test.tsx was fixed) or 1 result (Box.test.tsx line 37)
  ```

  **Evidence to Capture**:
  - [ ] Grep output results
  - [ ] Confirmation of total count (0 or 1)

  **Commit**: NO (informational task, no changes)

- [ ] 5. Search for and document all fireEvent usage

  **What to do**:
  - Search across all test files for any remaining `fireEvent` usage
  - Document findings: if any found beyond Modal.test.tsx and Toggle.test.tsx, list them
  - If none found, report that Modal.test.tsx and Toggle.test.tsx were the only occurrences

  **Must NOT do**:
  - Do NOT modify any files (this is a search-only task)

  **Recommended Agent Profile**:
  - **Category**: `unspecified-low`
    - Reason: Simple grep search task, low complexity.

  **Parallelization**:
  - **Can Run In Parallel**: YES
  - **Parallel Group**: Wave 2 (with Tasks 4, 6)
  - **Blocks**: None (informational task)
  - **Blocked By**: None (can start immediately)

  **References**:

  **Test References**:
  - `packages/chaser-design-system/src/components/Modal/Modal.test.tsx:108` - Known fireEvent usage
  - `packages/chaser-design-system/src/components/Toggle/Toggle.test.tsx:49,58` - Known fireEvent usage

  **Acceptance Criteria**:

  **Automated Verification:**
  ```bash
  # Agent runs:
  grep -r "fireEvent" packages/chaser-design-system/src/components --include="*.test.tsx"
  # Assert: Either 0 results (if Modal/Toggle fixed) or 3 results (Modal line 108, Toggle lines 49,58)
  ```

  **Evidence to Capture**:
  - [ ] Grep output results
  - [ ] Confirmation of total count (0 or 3)

  **Commit**: NO (informational task, no changes)

- [ ] 6. Extend sprinkles.css.ts with missing values

  **What to do**:
  Extend `packages/chaser-design-system/src/styles/sprinkles.css.ts` to support all values currently used by components:

  **1. Add to display property** (line 23):
  - Add `"inline-flex"` to the array
  - Current: `['none', 'flex', 'block', 'inline']`
  - New: `['none', 'flex', 'block', 'inline', 'inline-flex']`

  **2. Add to width property** (line 24):
  - Add pixel values like `"18px"` to allow arbitrary pixel values
  - Current: `['auto', '100%', '50%', '25%']`
  - New: `['auto', '100%', '50%', '25%']` + extend to allow string values for pixels
  - **Alternative**: Keep strict array but add commonly used pixel values: `'18px'`, `'20px'`, `'24px'`, `'32px'`, `'40px'`
  - **Decision**: Add common pixel values to maintain type safety while supporting Checkbox needs

  **3. Add to height property** (line 25):
  - Same as width: add pixel values
  - Current: `['auto', '100%', '50%', '25%']`
  - New: Add `'18px'`, `'20px'`, `'24px'`, `'32px'`, `'40px'`

  **4. Extend space object** (lines 4-11):
  - Allow numeric `0` value by adding it to space object
  - Current: `{none: 0, small: '4px', medium: '8px', large: '16px', auto: 'auto'}`
  - **Note**: `none: 0` already exists, so `padding={0}` should map to `padding="none"`
  - **Solution**: Components use `padding={0}` which should be valid, but sprinkles type may not allow numeric values
  - **Fix**: Ensure type allows both string keys (none, small, etc.) AND numeric 0

  **5. Add semantic color names to colors object** (lines 63-159):
  - Add after existing c5-900 tokens:
    ```typescript
    'textPrimary': '#797486',  // Map to c5-500
    'textSecondary': '#45424C',  // Map to c5-700
    'textDisabled': '#9692A0',  // Map to c5-400
    ```

  **6. Add to border shorthand** (line 54):
  - Add `"border"` as a valid border value
  - Current shorthands map to space values: `['borderTop', 'borderRight', 'borderBottom', 'borderLeft']`
  - Space values: `['none', 'small', 'medium', 'large', 'auto']`
  - **Solution**: Add `"border"` to space object as a new value mapping to `"medium"`:
    ```typescript
    const space = {
      none: 0,
      small: '4px',
      medium: '8px',
      large: '16px',
      auto: 'auto',
      border: '1px solid currentColor',  // NEW: maps to typical border usage
    };
    ```

  **Must NOT do**:
  - Do NOT make sprinkles too permissive (avoid arbitrary string types)
  - Do NOT remove existing values (only add)
  - Do NOT break TypeScript type safety

  **Recommended Agent Profile**:
  - **Category**: `unspecified-high`
    - Reason: Complex configuration changes requiring understanding of Vanilla Extract Sprinkles system and type safety implications.
  - **Skills**: None required
    - Vanilla Extract knowledge needed but can be inferred from existing patterns.
  - **Skills Evaluated but Omitted**:
    - `frontend-ui-ux`: Not needed, this is config not UI design

  **Parallelization**:
  - **Can Run In Parallel**: YES
  - **Parallel Group**: Wave 2 (with Tasks 4, 5)
  - **Blocks**: Task 7 (update Box.tsx sprinkleKeys if needed), Task 8 (verify tests)
  - **Blocked By**: None (can start immediately)

  **References**:

  **Pattern References** (existing code to follow):
  - `packages/chaser-design-system/src/styles/sprinkles.css.ts:4-11` - Space object definition (extend this)
  - `packages/chaser-design-system/src/styles/sprinkles.css.ts:22-26` - Display, width, height properties (extend these)
  - `packages/chaser-design-system/src/styles/sprinkles.css.ts:36-49` - Spacing properties (ensure these support new values)
  - `packages/chaser-design-system/src/styles/sprinkles.css.ts:52-60` - Shorthands including border (extend this)
  - `packages/chaser-design-system/src/styles/sprinkles.css.ts:63-159` - Colors object (add semantic names here)

  **API/Type References** (contracts to implement against):
  - `packages/chaser-design-system/src/components/Tag/Tag.tsx:25` - Uses `display="inline-flex"`
  - `packages/chaser-design-system/src/components/Avatar/Avatar.tsx:27` - Uses `display="inline-flex"`
  - `packages/chaser-design-system/src/components/Breadcrumb/Breadcrumb.tsx:63,75` - Uses `display="inline-flex"`
  - `packages/chaser-design-system/src/components/Checkbox/Checkbox.tsx:31-32` - Uses `width="18px"`, `height="18px"`
  - `packages/chaser-design-system/src/components/Breadcrumb/Breadcrumb.tsx:46-47` - Uses `margin={0}`, `padding={0}`
  - `packages/chaser-design-system/src/components/Accordion/Accordion.tsx:71` - Uses `border="border"`
  - `packages/chaser-design-system/src/components/Breadcrumb/Breadcrumb.tsx:65,77,88` - Uses `color="textSecondary"`, `color="textPrimary"`, `color="textDisabled"`
  - `packages/chaser-design-system/src/components/Progress/Progress.tsx:39` - Uses `color="textSecondary"`

  **External References** (libraries and frameworks):
  - Vanilla Extract Sprinkles docs: `https://vanilla-extract.style/documentation/sprinkles/` - Configuration patterns and type safety
  - Vanilla Extract defineProperties docs: `https://vanilla-extract.style/documentation/sprinkles/define-properties/` - Property value arrays and types

  **WHY Each Reference Matters** (explain the relevance):
  - sprinkles.css.ts is the core file being extended - need to understand its current structure
  - Component files show exactly which values each component needs - these are the requirements we must satisfy
  - Vanilla Extract docs explain how to properly extend property values while maintaining type safety
  - The specific component line numbers show where each invalid value is used in production code

  **Acceptance Criteria**:

  **Automated Verification (type checking):**
  ```bash
  # Agent runs:
  cd packages/chaser-design-system
  npx tsc --noEmit
  # Assert: No TypeScript errors (0 errors)

  # Verify sprinkles has inline-flex:
  grep "inline-flex" src/styles/sprinkles.css.ts
  # Assert: Found in display property array

  # Verify sprinkles has pixel values:
  grep "18px\|20px\|24px\|32px\|40px" src/styles/sprinkles.css.ts
  # Assert: Found in width/height property arrays

  # Verify sprinkles has semantic colors:
  grep -E "textPrimary|textSecondary|textDisabled" src/styles/sprinkles.css.ts
  # Assert: All three found in colors object

  # Verify space object has border:
  grep "border.*:" src/styles/sprinkles.css.ts | head -20
  # Assert: Found border: '1px solid currentColor' (or equivalent) in space object
  ```

  **Evidence to Capture:**
  - [ ] TypeScript compilation output (no errors)
  - [ ] Grep output confirming all new values added

  **Commit**: YES
  - Message: `style: extend sprinkles.css.ts to support component needs`
  - Files: `src/styles/sprinkles.css.ts`
  - Pre-commit: `npx tsc --noEmit`

- [ ] 7. Update Box.tsx sprinkleKeys if needed

  **What to do**:
  - Review Box.tsx sprinkleKeys Set (lines 19-49)
  - Verify all properties extended in sprinkles.css.ts are included in sprinkleKeys
  - If any new properties were added (unlikely, as we're extending existing ones), add them
  - If no new properties added (most likely), confirm sprinkleKeys already covers everything

  **Must NOT do**:
  - Do NOT remove existing sprinkleKeys (only add if needed)
  - Do NOT modify Box.tsx unless absolutely necessary

  **Recommended Agent Profile**:
  - **Category**: `unspecified-low`
    - Reason: Verification task - likely no changes needed, just confirmation.

  **Parallelization**:
  - **Can Run In Parallel**: NO (depends on Task 6 completion)
  - **Parallel Group**: Sequential (Wave 3)
  - **Blocks**: Task 8 (final verification)
  - **Blocked By**: Task 6 (extend sprinkles.css.ts)

  **References**:

  **Pattern References**:
  - `packages/chaser-design-system/src/components/Box/Box.tsx:19-49` - sprinkleKeys Set definition

  **Documentation References**:
  - `packages/chaser-design-system/src/styles/sprinkles.css.ts` - After Task 6 changes, verify all properties are in sprinkleKeys

  **WHY Each Reference Matters**:
  - Box.tsx sprinkleKeys filters which props go to sprinkles() - must include all properties we're extending
  - If we add new property to sprinkles.css.ts but not to sprinkleKeys, it won't work through Box component

  **Acceptance Criteria**:

  **Automated Verification:**
  ```bash
  # Agent runs:
  # Compare properties in sprinkleKeys vs sprinkles.css.ts
  # (Manual check: ensure display, width, height, padding, margin, border, color are all in sprinkleKeys)
  ```

  **Evidence to Capture**:
  - [ ] Confirmation that all extended properties are in sprinkleKeys (or report if any are missing)

  **Commit**: YES (if changes made) or NO (if no changes)
  - If changes: Message: `fix: update Box.tsx sprinkleKeys for new sprinkles properties`
  - Files: `src/components/Box/Box.tsx`

- [ ] 8. Verify all tests pass

  **What to do**:
  - Run full test suite: `cd packages/chaser-design-system && npm test`
  - Capture complete output showing all test results
  - Verify 0 failures across all 25 test suites
  - Report pass/fail status for each test suite

  **Must NOT do**:
  - Do NOT modify any files (this is verification only)
  - Do NOT stop if some tests fail (report all failures for debugging)

  **Recommended Agent Profile**:
  - **Category**: `unspecified-low`
    - Reason: Simple test execution and output capture.

  **Parallelization**:
  - **Can Run In Parallel**: NO (final verification, depends on all previous tasks)
  - **Parallel Group**: Sequential (Wave 3, final task)
  - **Blocks**: None (final task)
  - **Blocked By**: Tasks 1, 2, 3, 6, 7 (all fixes must be complete)

  **References**:

  **Test References**:
  - `packages/chaser-design-system/package.json:38` - Test script: `vitest --config=vitest.browser.config.ts`

  **Documentation References**:
  - `packages/chaser-design-system/vitest.browser.config.ts` - Test runner configuration

  **Acceptance Criteria**:

  **Automated Verification:**
  ```bash
  # Agent runs:
  cd packages/chaser-design-system
  npm test 2>&1 | tee /tmp/test-output.log
  # Expected: All 25 test suites pass, 0 failures

  # Check for failures:
  grep -i "fail" /tmp/test-output.log
  # Assert: 0 results (or only "0 failed" in summary)

  # Count passing tests:
  grep -E "Test Files.*passed" /tmp/test-output.log
  # Assert: 25 test files passed
  ```

  **Evidence to Capture**:
  - [ ] Complete test output saved to file
  - [ ] Terminal output showing final summary
  - [ ] Screenshot of terminal if tests fail (for debugging)

  **Commit**: NO (verification only, no changes)

---

## Commit Strategy

| After Task | Message | Files | Verification |
|------------|---------|-------|--------------|
| 3 | `test: fix test imports and patterns (Box, Modal, Toggle)` | Box/Box.test.tsx, Modal/Modal.test.tsx, Toggle/Toggle.test.tsx | `npm test -- --run Box.test.tsx Modal.test.tsx Toggle.test.tsx` |
| 6 | `style: extend sprinkles.css.ts to support component needs` | src/styles/sprinkles.css.ts | `npx tsc --noEmit` |
| 7 | `fix: update Box.tsx sprinkleKeys for new sprinkles properties` | src/components/Box/Box.tsx | (if changes made) |

---

## Success Criteria

### Verification Commands
```bash
cd packages/chaser-design-system

# Type check
npx tsc --noEmit
# Expected: 0 errors

# Run all tests
npm test
# Expected: All 25 test suites pass, 0 failures

# Verify no jest or fireEvent remains
grep -r "jest\.fn()" src/components --include="*.test.tsx"
# Expected: 0 results

grep -r "fireEvent" src/components --include="*.test.tsx"
# Expected: 0 results
```

### Final Checklist
- [ ] Box.test.tsx uses vitest-browser-react and vi.fn()
- [ ] Modal.test.tsx uses .click() instead of fireEvent
- [ ] Toggle.test.tsx uses .click() instead of fireEvent
- [ ] No jest.fn() in any test file
- [ ] No fireEvent in any test file
- [ ] sprinkles.css.ts includes "inline-flex" in display
- [ ] sprinkles.css.ts includes pixel values in width/height
- [ ] sprinkles.css.ts includes semantic color names (textPrimary, textSecondary, textDisabled)
- [ ] sprinkles.css.ts includes "border" in space object
- [ ] Box.tsx sprinkleKeys includes all extended properties
- [ ] TypeScript compilation succeeds (0 errors)
- [ ] All 25 test suites pass with 0 failures

---

## Risk Assessment

### High Risk Changes

| Change | Risk | Mitigation |
|---------|-------|------------|
| Extending sprinkles.css.ts | May break type safety if too permissive | Add specific values rather than arbitrary types; verify with TypeScript check |
| Changing imports in test files | May introduce new test failures | Run targeted tests after each fix; verify existing passing tests still pass |

### Medium Risk Changes

| Change | Risk | Mitigation |
|---------|-------|------------|
| Removing fireEvent usage | Different event behavior with .click() | Verify test logic remains correct by checking test still passes after change |
| Adding semantic color names | May conflict with future color system design | Map to existing c1-c5 tokens; document mapping for future reference |

### Low Risk Changes

| Change | Risk | Mitigation |
|---------|-------|------------|
| Replacing jest.fn() with vi.fn() | Direct API equivalent, minimal risk | vi.fn() is standard Vitest mock function, identical API |
| Adding pixel values to width/height | Only extends existing type, not removes | Maintains backward compatibility |

---

## Order of Operations

1. **Phase 1: Quick Wins (Parallel)**
   - Fix Box.test.tsx imports (Task 1)
   - Fix Modal.test.tsx imports (Task 2)
   - Fix Toggle.test.tsx imports (Task 3)
   - Commit these changes together

2. **Phase 2: Foundation (Parallel)**
   - Search for remaining jest.fn() usage (Task 4)
   - Search for remaining fireEvent usage (Task 5)
   - Extend sprinkles.css.ts (Task 6)
   - Commit sprinkles.css.ts changes

3. **Phase 3: Finalize (Sequential)**
   - Update Box.tsx sprinkleKeys if needed (Task 7)
   - Verify all tests pass (Task 8)

4. **Final Verification**
   - Run complete test suite
   - Confirm 0 failures
   - Handoff to user
