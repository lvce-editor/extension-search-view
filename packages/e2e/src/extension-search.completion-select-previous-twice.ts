import type { Test } from '@lvce-editor/test-with-playwright'

export const test: Test = async ({ expect, ExtensionSearch, Locator }) => {
  await ExtensionSearch.open()
  await ExtensionSearch.handleInput('@', 1, 1)
  await ExtensionSearch.selectPreviousCompletion()
  await ExtensionSearch.selectPreviousCompletion()
  const input = Locator('.Extensions .MultilineInputBox')
  const selectedItem = Locator('.ExtensionSearchCompletionItem').nth(12)
  await expect(input).toHaveAttribute('aria-activedescendant', 'ExtensionSearchCompletion-12')
  await expect(selectedItem).toHaveText('@sort:installs')
}
