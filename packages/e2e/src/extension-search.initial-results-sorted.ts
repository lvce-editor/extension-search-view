import type { Test } from '@lvce-editor/test-with-playwright'

export const test: Test = async ({ expect, ExtensionSearch, Locator }) => {
  // arrange
  await ExtensionSearch.open()

  // act
  await ExtensionSearch.clearSearchResults()

  // assert
  const names = Locator('.ExtensionListItemName')
  const secondName = names.nth(1)
  await expect(names.first()).toHaveText('Atom One Dark Theme')
  await expect(secondName).toHaveText('Ayu Theme')
}
