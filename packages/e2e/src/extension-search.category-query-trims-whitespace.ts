import type { Test } from '@lvce-editor/test-with-playwright'

export const test: Test = async ({ expect, ExtensionSearch, Locator }) => {
  // arrange
  await ExtensionSearch.open()

  // act
  await ExtensionSearch.handleInput('  @category:"themes"  ')

  // assert
  const items = Locator('.ExtensionListItem')
  await expect(items).toHaveCount(2)
  const firstItemName = items.first().locator('.ExtensionListItemName')
  await expect(firstItemName).toHaveText('Ayu Theme')
}
