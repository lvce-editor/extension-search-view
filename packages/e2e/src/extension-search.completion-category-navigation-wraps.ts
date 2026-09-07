import type { Test } from '@lvce-editor/test-with-playwright'

export const test: Test = async ({ expect, ExtensionSearch, Locator }) => {
  await ExtensionSearch.open()
  await ExtensionSearch.handleInput('@category:', 1, 10)
  const focusedCompletion = Locator('.ExtensionSearchCompletionItemFocused')
  await expect(focusedCompletion).toHaveText('@category:"ai"')
  await ExtensionSearch.selectPreviousCompletion()
  await expect(focusedCompletion).toHaveText('@category:"visualization"')
  const input = Locator('.Extensions .MultilineInputBox')
  await expect(input).toHaveAttribute('aria-activedescendant', 'ExtensionSearchCompletion-19')
  await ExtensionSearch.selectNextCompletion()
  await expect(focusedCompletion).toHaveText('@category:"ai"')
  await expect(input).toHaveAttribute('aria-activedescendant', 'ExtensionSearchCompletion-0')
}
