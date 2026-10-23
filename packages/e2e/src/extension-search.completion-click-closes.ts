import type { Test } from '@lvce-editor/test-with-playwright'

export const test: Test = async ({ expect, ExtensionSearch, Locator }) => {
  // arrange
  await ExtensionSearch.open()
  await ExtensionSearch.clearSearchResults()
  await ExtensionSearch.handleInput('@en', 1, 3)

  // act
  await ExtensionSearch.handleClickAt(0, 0, 0, '@enabled')

  // assert
  const widget = Locator('.ExtensionSearchCompletionWidget')
  await expect(widget).toBeHidden()
}
