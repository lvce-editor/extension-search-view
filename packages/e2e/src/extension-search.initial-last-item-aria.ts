import type { Test } from '@lvce-editor/test-with-playwright'

export const test: Test = async ({ expect, ExtensionSearch, Locator }) => {
  // arrange
  await ExtensionSearch.open()

  // act
  await ExtensionSearch.clearSearchResults()

  // assert
  const lastItem = Locator('.ExtensionListItem').nth(9)
  await expect(lastItem).toHaveAttribute('aria-posinset', '10')
  await expect(lastItem).toHaveAttribute('aria-setsize', '67')
}
