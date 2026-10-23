import type { Test } from '@lvce-editor/test-with-playwright'

export const test: Test = async ({ expect, ExtensionSearch, Locator }) => {
  // arrange
  await ExtensionSearch.open()
  await ExtensionSearch.clearSearchResults()

  // act
  await ExtensionSearch.handleInput('@category:xyz', 1, 13)

  // assert
  const widget = Locator('.ExtensionSearchCompletionWidget')
  await expect(widget).toBeHidden()
}
