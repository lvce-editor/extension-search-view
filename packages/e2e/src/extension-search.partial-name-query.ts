import type { Test } from '@lvce-editor/test-with-playwright'

export const test: Test = async ({ expect, ExtensionSearch, Locator }) => {
  // arrange
  await ExtensionSearch.open()

  // act
  await ExtensionSearch.handleInput('one dark')

  // assert
  const item = Locator('.ExtensionListItem')
  await expect(item).toHaveCount(1)
  await expect(item.locator('.ExtensionListItemName')).toHaveText('Atom One Dark Theme')
}
