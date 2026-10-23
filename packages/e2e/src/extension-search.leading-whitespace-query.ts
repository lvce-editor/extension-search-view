import type { Test } from '@lvce-editor/test-with-playwright'

export const test: Test = async ({ expect, ExtensionSearch, Locator }) => {
  // arrange
  await ExtensionSearch.open()

  // act
  await ExtensionSearch.handleInput('  atom')

  // assert
  const items = Locator('.ExtensionListItem')
  await expect(items).toHaveCount(1)
  const itemName = items.locator('.ExtensionListItemName')
  await expect(itemName).toHaveText('Atom One Dark Theme')
}
