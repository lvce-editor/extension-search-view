import type { Test } from '@lvce-editor/test-with-playwright'

export const skip = 0

export const test: Test = async ({ expect, ExtensionSearch, Locator }) => {
  // arrange
  await ExtensionSearch.open()
  await ExtensionSearch.handleInput('atom')
  const extensionItem = Locator('.ExtensionListItem')
  await expect(extensionItem).toHaveCount(1)

  // act
  await ExtensionSearch.handleClick(0)

  // assert
  await expect(extensionItem).toHaveAttribute('id', 'ExtensionActive')
  const listItems = Locator('.ListItems')
  await expect(listItems).toBeFocused()
}
