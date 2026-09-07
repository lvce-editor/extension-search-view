import type { Test } from '@lvce-editor/test-with-playwright'

export const test: Test = async ({ expect, ExtensionSearch, Locator }) => {
  await ExtensionSearch.open()
  await ExtensionSearch.handleInput('@category:', 1, 10)
  await expect(Locator('.ExtensionSearchCompletionItemFocused')).toHaveText('@category:"ai"')
  await ExtensionSearch.selectPreviousCompletion()
  await expect(Locator('.ExtensionSearchCompletionItemFocused')).toHaveText('@category:"visualization"')
  await expect(Locator('.Extensions .MultilineInputBox')).toHaveAttribute('aria-activedescendant', 'ExtensionSearchCompletion-19')
  await ExtensionSearch.selectNextCompletion()
  await expect(Locator('.ExtensionSearchCompletionItemFocused')).toHaveText('@category:"ai"')
  await expect(Locator('.Extensions .MultilineInputBox')).toHaveAttribute('aria-activedescendant', 'ExtensionSearchCompletion-0')
}
