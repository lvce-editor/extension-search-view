import type { Test } from '@lvce-editor/test-with-playwright'

export const test: Test = async ({ expect, ExtensionSearch, Locator }) => {
  // arrange
  await ExtensionSearch.open()

  // act
  await ExtensionSearch.handleInput('one dark')

  // assert
  const item = Locator('.ExtensionListItem')
  await expect(item).toHaveCount(1)
  const itemName = item.locator('.ExtensionListItemName')
  await expect(itemName).toHaveText('Atom One Dark Theme')
}
