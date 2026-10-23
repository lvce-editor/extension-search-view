import type { Test } from '@lvce-editor/test-with-playwright'

export const test: Test = async ({ expect, ExtensionSearch, Locator }) => {
  // arrange
  await ExtensionSearch.open()
  await ExtensionSearch.clearSearchResults()

  // act
  await ExtensionSearch.handleInput('@', 1, 1)

  // assert
  const focusedItem = Locator('.ExtensionSearchCompletionItemFocused')
  await expect(focusedItem).toHaveCount(1)
  await expect(focusedItem).toHaveText('@builtin')
}
