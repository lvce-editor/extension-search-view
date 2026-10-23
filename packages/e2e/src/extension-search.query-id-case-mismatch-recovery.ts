import type { Test } from '@lvce-editor/test-with-playwright'

export const test: Test = async ({ expect, ExtensionSearch, Locator }) => {
  // arrange
  await ExtensionSearch.open()

  // act
  await ExtensionSearch.handleInput('@id:BUILTIN.THEME-ATOM-ONE-DARK')

  // assert
  const input = Locator('.Extensions .MultilineInputBox')
  const message = Locator('.NoExtensionsFoundMessage')
  await expect(input).toHaveValue('@id:BUILTIN.THEME-ATOM-ONE-DARK')
  const items = Locator('.ExtensionListItem')
  await expect(items).toHaveCount(0)
  await expect(message).toHaveText('No extensions found.')

  // act
  await ExtensionSearch.handleInput('@id:builtin.theme-atom-one-dark')

  // assert
  await expect(message).toHaveCount(0)
  const name = Locator('.ExtensionListItemName')
  await expect(name).toHaveText('Atom One Dark Theme')
}
