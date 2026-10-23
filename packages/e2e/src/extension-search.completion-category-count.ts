import type { Test } from '@lvce-editor/test-with-playwright'

export const test: Test = async ({ expect, ExtensionSearch, Locator }) => {
  // arrange
  await ExtensionSearch.open()
  await ExtensionSearch.clearSearchResults()

  // act
  await ExtensionSearch.handleInput('@category:', 1, 10)

  // assert
  const items = Locator('.ExtensionSearchCompletionItem')
  await expect(items).toHaveCount(20)
}
