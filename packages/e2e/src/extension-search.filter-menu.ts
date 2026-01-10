import type { Test } from '@lvce-editor/test-with-playwright'

export const skip = 1

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
  await expect(menuItems).toHaveCount(8)
  const menuItem1 = menuItems.nth(0)
  await expect(menuItem1).toHaveText('@builtin')
  const menuItem2 = menuItems.nth(1)
  await expect(menuItem2).toHaveText('@disabled')
  const menuItem3 = menuItems.nth(2)
  await expect(menuItem3).toHaveText('@enabled')
  const menuItem4 = menuItems.nth(3)
  await expect(menuItem4).toHaveText('@installed')
  const menuItem5 = menuItems.nth(4)
  await expect(menuItem5).toHaveText('@outdated')
  const menuItem6 = menuItems.nth(5)
  await expect(menuItem6).toHaveText('@sort:installs')
  const menuItem7 = menuItems.nth(6)
  await expect(menuItem7).toHaveText('@id:')
  const menuItem8 = menuItems.nth(7)
  await expect(menuItem8).toHaveText('@category')
}
