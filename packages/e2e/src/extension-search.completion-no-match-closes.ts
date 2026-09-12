import type { Test } from '@lvce-editor/test-with-playwright'

export const test: Test = async ({ expect, ExtensionSearch, Locator }) => {
  // arrange
  await ExtensionSearch.open()
  await ExtensionSearch.clearSearchResults()

  // act
  await ExtensionSearch.handleInput('@', 1, 1)
  await ExtensionSearch.handleInput('@xyz', 1, 4)

  // assert
  const widget = Locator('.ExtensionSearchCompletionWidget')
  await expect(widget).toHaveCount(0)
}
