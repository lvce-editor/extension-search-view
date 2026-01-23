import type { Test } from '@lvce-editor/test-with-playwright'

export const skip = 0

export const test: Test = async ({ Command, expect, ExtensionSearch, Locator }) => {
  // arrange
  await ExtensionSearch.open()
  const extensionsView = Locator('.Extensions')
  await expect(extensionsView).toBeVisible()

  // act
  await Command.execute('Extensions.handleClickFilter')

  // assert
  const filterMenu = Locator('.Menu')
  await expect(filterMenu).toBeVisible()
  const menuItems = filterMenu.locator('.MenuItem')
  await expect(menuItems).toHaveCount(15)
  const menuItem1 = menuItems.nth(0)
  await expect(menuItem1).toHaveText('Featured')
  const menuItem2 = menuItems.nth(1)
  await expect(menuItem2).toHaveText('MCP Servers')
  const menuItem3 = menuItems.nth(2)
  await expect(menuItem3).toHaveText('Most Popular')
  const menuItem4 = menuItems.nth(3)
  await expect(menuItem4).toHaveText('Recently Published')
  const menuItem5 = menuItems.nth(4)
  await expect(menuItem5).toHaveText('Recommended')
  // separator at index 5
  const menuItem7 = menuItems.nth(6)
  await expect(menuItem7).toHaveText('Category')
  const menuItem8 = menuItems.nth(7)
  await expect(menuItem8).toHaveText('Installed')
  const menuItem9 = menuItems.nth(8)
  await expect(menuItem9).toHaveText('Updates')
  const menuItem10 = menuItems.nth(9)
  await expect(menuItem10).toHaveText('Built-in')
  const menuItem11 = menuItems.nth(10)
  await expect(menuItem11).toHaveText('Enabled')
  const menuItem12 = menuItems.nth(11)
  await expect(menuItem12).toHaveText('Disabled')
  const menuItem13 = menuItems.nth(12)
  await expect(menuItem13).toHaveText('Workspace Unsupported')
  // separator at index 13
  const menuItem15 = menuItems.nth(14)
  await expect(menuItem15).toHaveText('Sort By')
}
