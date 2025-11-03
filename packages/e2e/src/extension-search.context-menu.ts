import type { Test } from '@lvce-editor/test-with-playwright'

export const test: Test = async ({ Locator, expect, SideBar, ExtensionSearch }) => {
  // arrange
  await ExtensionSearch.open()
  const extensionsView = Locator('.Extensions')
  await expect(extensionsView).toBeVisible()
  await ExtensionSearch.handleInput('atom')

  // act
  await ExtensionSearch.handleContextMenu(0, 0, 0)

  // assert
  const contextMenu = Locator('.Menu')
  await expect(contextMenu).toBeVisible()
  const menuItems = contextMenu.locator('.MenuItem')
  const menuItem1 = menuItems.nth(0)
  await expect(menuItem1).toHaveText('Enable')
  const menuItem2 = menuItems.nth(1)
  await expect(menuItem2).toHaveText('Disable')
  const menuItem3 = menuItems.nth(2)
  await expect(menuItem3).toHaveText('Install Another Version')
  const menuItem4 = menuItems.nth(3)
  await expect(menuItem4).toHaveText('Copy')
  const menuItem5 = menuItems.nth(4)
  await expect(menuItem5).toHaveText('Copy Extension Id')
}
