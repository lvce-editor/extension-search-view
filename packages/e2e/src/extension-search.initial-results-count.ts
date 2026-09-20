import type { Test } from '@lvce-editor/test-with-playwright'

export const test: Test = async ({ expect, ExtensionSearch, Locator }) => {
  // arrange
  await ExtensionSearch.open()

  // act
  await ExtensionSearch.clearSearchResults()

  // assert
  const items = Locator('.ExtensionListItem')
  await expect(items).toHaveCount(10)
}
