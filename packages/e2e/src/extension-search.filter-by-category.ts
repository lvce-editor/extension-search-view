import type { Test } from '@lvce-editor/test-with-playwright'

export const skip = 1

export const test: Test = async ({ expect, ExtensionSearch, Locator, SideBar }) => {
  // arrange
  await SideBar.open('Extensions')
  const extensionsView = Locator('.Extensions')
  await expect(extensionsView).toBeVisible()

  // act
  await ExtensionSearch.handleInput('@category:"themes"')

  // assert
  const listItems = Locator('.Extensions .ListItems')
  const firstItem = listItems.locator('.ExtensionListItem').nth(0)
  await expect(firstItem).toBeVisible()
  const name = firstItem.locator('.ExtensionListItemName')
  await expect(name).toHaveText('Ayu Theme')
}
