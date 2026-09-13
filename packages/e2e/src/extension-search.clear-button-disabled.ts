import type { Test } from '@lvce-editor/test-with-playwright'

export const test: Test = async ({ expect, ExtensionSearch, Locator }) => {
  // arrange
  await ExtensionSearch.open()

  // act
  await ExtensionSearch.clearSearchResults()

  // assert
  const clearButton = Locator('.SearchFieldButton').first()
  await expect(clearButton).toHaveAttribute('class', 'SearchFieldButton SearchFieldButtonDisabled')
}
