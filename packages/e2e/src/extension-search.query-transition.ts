import type { Test } from '@lvce-editor/test-with-playwright'

export const test: Test = async ({ expect, ExtensionSearch, Locator }) => {
  // arrange
  await ExtensionSearch.open()

  // act
  await ExtensionSearch.handleInput('ayu')

  // assert
  const name = Locator('.ExtensionListItemName')
  await expect(name).toHaveText('Ayu Theme')

  // act
  await ExtensionSearch.handleInput('cobalt')

  // assert
  await expect(name).toHaveText('Cobalt 2 Theme')
}
