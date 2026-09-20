import type { Test } from '@lvce-editor/test-with-playwright'

export const test: Test = async ({ Command, ContextMenu, expect, ExtensionSearch, Locator }) => {
  // arrange
  await ExtensionSearch.open()
  await ExtensionSearch.clearSearchResults()
  await ExtensionSearch.handleClickFilter()

  const menus = Locator('.Menu')
  const category = menus.nth(0).locator('text=Category')

  // act
  // eslint-disable-next-line @typescript-eslint/no-deprecated
  await category.hover()

  // assert
  await expect(menus).toHaveCount(2)
  const subMenu = menus.nth(1)
  await expect(subMenu.locator('.MenuItem')).toHaveCount(20)
  await expect(subMenu.locator('text=Themes')).toBeVisible()

  // act
  await ContextMenu.selectItem('Themes')

  // assert
  const input = Locator('.Extensions .MultilineInputBox')
  await expect(input).toHaveValue('@category:"themes"')
  await expect(menus).toHaveCount(0)

  // act
  await ExtensionSearch.clearSearchResults()
  await ExtensionSearch.handleClickFilter()
  await Command.execute('Menu.handleMouseEnter', 0, 6, 0, 0, 2)

  // assert
  await expect(menus).toHaveCount(2)

  // act
  await ContextMenu.selectItem('Programming Languages')

  // assert
  await expect(input).toHaveValue('@category:"programming languages"')
  await expect(menus).toHaveCount(0)
}
