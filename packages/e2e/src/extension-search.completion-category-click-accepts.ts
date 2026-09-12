import type { Test } from '@lvce-editor/test-with-playwright'

export const test: Test = async ({ expect, ExtensionSearch, Locator }) => {
  // arrange
  await ExtensionSearch.open()
  await ExtensionSearch.clearSearchResults()
  await ExtensionSearch.handleInput('@category:', 1, 10)

  // act
  await ExtensionSearch.handleClickAt(0, 0, 0, '@category:"extension packs"')

  // assert
  const input = Locator('.Extensions .MultilineInputBox')
  await expect(input).toHaveValue('@category:"extension packs" ')
}
