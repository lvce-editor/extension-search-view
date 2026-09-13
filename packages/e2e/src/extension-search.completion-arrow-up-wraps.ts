import type { Test } from '@lvce-editor/test-with-playwright'

export const test: Test = async ({ expect, ExtensionSearch, Locator }) => {
  // arrange
  await ExtensionSearch.open()
  await ExtensionSearch.clearSearchResults()
  await ExtensionSearch.handleInput('@', 1, 1)

  // act
  await ExtensionSearch.selectPreviousCompletion()

  // assert
  const lastItem = Locator('.ExtensionSearchCompletionItem').nth(14)
  await expect(lastItem).toHaveClass('ExtensionSearchCompletionItemFocused')
}
