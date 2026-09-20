import type { Test } from '@lvce-editor/test-with-playwright'

export const test: Test = async ({ expect, ExtensionSearch, Locator }) => {
  // arrange
  await ExtensionSearch.open()

  // act
  await ExtensionSearch.handleInput('@id:missing.extension')

  // assert
  const message = Locator('.NoExtensionsFoundMessage')
  await expect(message).toBeVisible()

  // act
  await ExtensionSearch.focusNext()

  // assert
  const activeItem = Locator('.ExtensionActive')
  await expect(activeItem).toHaveCount(0)
  await expect(message).toHaveText('No extensions found.')

  // act
  await ExtensionSearch.handleInput('atom')
  await ExtensionSearch.focusFirst()

  // assert
  await expect(message).toHaveCount(0)
  const activeName = Locator('.ExtensionActive .ExtensionListItemName')
  await expect(activeName).toHaveText('Atom One Dark Theme')
}
