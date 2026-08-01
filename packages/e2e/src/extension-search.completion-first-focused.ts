import type { Test } from '@lvce-editor/test-with-playwright'

export const skip = 0

export const test: Test = async ({ expect, ExtensionSearch, Locator }) => {
  await ExtensionSearch.open()
  await ExtensionSearch.clearSearchResults()
  await ExtensionSearch.handleInput('@', 1, 1)
  const focusedItem = Locator('.ExtensionSearchCompletionItemFocused')
  await expect(focusedItem).toHaveCount(1)
  await expect(focusedItem).toHaveText('@builtin')
}
