import type { Test } from '@lvce-editor/test-with-playwright'

export const skip = 0

export const test: Test = async ({ expect, ExtensionSearch, Locator }) => {
  // arrange
  await ExtensionSearch.open()
  await ExtensionSearch.handleInput('atom')
  const extensionItems = Locator('.ExtensionListItem')
  await expect(extensionItems).toHaveCount(1)

  // act
  await ExtensionSearch.clearSearchResults()

  // assert
  const input = Locator('.Extensions .MultilineInputBox')
  await expect(input).toHaveValue('')
  await expect(extensionItems).toHaveCount(10)
}
