import type { Test } from '@lvce-editor/test-with-playwright'

export const skip = 0

export const test: Test = async ({ expect, ExtensionSearch, Locator }) => {
  await ExtensionSearch.open()
  await ExtensionSearch.handleInput('@', 1, 1)
  await ExtensionSearch.selectNextCompletion()
  await ExtensionSearch.selectNextCompletion()
  await ExtensionSearch.selectNextCompletion()
  await ExtensionSearch.selectNextCompletion()
  const input = Locator('.Extensions .MultilineInputBox')
  const item = Locator('.ExtensionSearchCompletionItem').nth(4)
  await expect(input).toHaveAttribute('aria-activedescendant', 'ExtensionSearchCompletion-4')
  await expect(item).toHaveAttribute('aria-selected', 'true')
}
