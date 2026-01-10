import type { Test } from '@lvce-editor/test-with-playwright'

export const skip = 1

export const test: Test = async ({ expect, ExtensionSearch, Locator }) => {
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
  await expect(menuItem2).toHaveText('Enable Workspace')
  const menuItem3 = menuItems.nth(3)
  await expect(menuItem3).toHaveText('Disable')
  const menuItem4 = menuItems.nth(4)
  await expect(menuItem4).toHaveText('Disable Workspace')
  const menuItem5 = menuItems.nth(6)
  await expect(menuItem5).toHaveText('Install Another Version')
  const menuItem6 = menuItems.nth(7)
  await expect(menuItem6).toHaveText('Copy')
  const menuItem7 = menuItems.nth(8)
  await expect(menuItem7).toHaveText('Copy Extension Id')
}
