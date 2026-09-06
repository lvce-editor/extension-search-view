import type { Test } from '@lvce-editor/test-with-playwright'

export const test: Test = async ({ Command, ContextMenu, expect, ExtensionSearch, Locator }) => {
  await ExtensionSearch.open()
  await ExtensionSearch.clearSearchResults()
  await ExtensionSearch.handleClickFilter()

  const menus = Locator('.Menu')
  const category = menus.nth(0).locator('text=Category')
  await category.hover()
  await expect(menus).toHaveCount(2)
  const subMenu = menus.nth(1)
  await expect(subMenu.locator('.MenuItem')).toHaveCount(20)
  await expect(subMenu.locator('text=Themes')).toBeVisible()
  await ContextMenu.selectItem('Themes')

  const input = Locator('.Extensions .MultilineInputBox')
  await expect(input).toHaveValue('@category:"themes"')
  await expect(menus).toHaveCount(0)

  await ExtensionSearch.clearSearchResults()
  await ExtensionSearch.handleClickFilter()
  await Command.execute('Menu.handleMouseEnter', 0, 6, 0, 0, 2)
  await expect(menus).toHaveCount(2)
  await ContextMenu.selectItem('Programming Languages')
  await expect(input).toHaveValue('@category:"programming languages"')
  await expect(menus).toHaveCount(0)
}
