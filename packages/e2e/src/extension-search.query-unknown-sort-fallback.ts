import type { Test } from '@lvce-editor/test-with-playwright'

export const test: Test = async ({ expect, ExtensionSearch, Locator }) => {
  // arrange
  await ExtensionSearch.open()

  // act
  await ExtensionSearch.handleInput('@sort:unknown')

  // assert
  const names = Locator('.ExtensionListItemName')
  await expect(names).toHaveCount(10)
  await expect(names.first()).toHaveText('Atom One Dark Theme')
  const secondName = names.nth(1)
  await expect(secondName).toHaveText('Ayu Theme')
  const message = Locator('.NoExtensionsFoundMessage')
  await expect(message).toHaveCount(0)

  // act
  await ExtensionSearch.handleInput('atom')

  // assert
  await expect(names).toHaveText('Atom One Dark Theme')
}
