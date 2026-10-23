import type { Test } from '@lvce-editor/test-with-playwright'

export const test: Test = async ({ expect, ExtensionSearch, Locator }) => {
  // arrange
  await ExtensionSearch.open()
  await ExtensionSearch.handleInput('@category:"themes"')

  // act
  await ExtensionSearch.focusFirst()

  // assert
  const activeItem = Locator('.ExtensionListItem#ExtensionActive')
  const itemName = activeItem.locator('.ExtensionListItemName')
  await expect(itemName).toHaveText('Ayu Theme')

  // act
  await ExtensionSearch.focusNext()

  // assert
  await expect(itemName).toHaveText('Cobalt 2 Theme')
}
