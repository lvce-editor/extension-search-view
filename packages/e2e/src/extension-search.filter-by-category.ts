import type { Test } from '@lvce-editor/test-with-playwright'

export const test: Test = async ({ Command, expect, Locator, SideBar }) => {
  // arrange
  await SideBar.open('Extensions')
  const extensionsView = Locator('.Extensions')
  await expect(extensionsView).toBeVisible()

  // act
  await Command.execute('Extensions.handleInput', '@category:"themes"', 2)

  // assert
  const listItems = Locator('.Extensions .ListItems')
  const firstItem = listItems.locator('.ExtensionListItem').nth(0)
  await expect(firstItem).toBeVisible()
  const name = firstItem.locator('.ExtensionListItemName')
  await expect(name).toHaveText('Ayu Theme')
}
