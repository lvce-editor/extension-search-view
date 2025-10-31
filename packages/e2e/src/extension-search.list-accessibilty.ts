import type { Test } from '@lvce-editor/test-with-playwright'

export const test: Test = async ({ Locator, expect, SideBar, Command }) => {
  // arrange
  await SideBar.open('Extensions')
  const extensionsView = Locator('.Extensions')
  await expect(extensionsView).toBeVisible()

  // act
  await Command.execute('Extensions.handleInput', 'atom', 2)

  // assert
  const listItems = Locator('.Extensions .ListItems')
  await expect(listItems).toHaveCount(1)
  const firstItem = listItems.locator('.ExtensionListItem')
  await expect(firstItem).toHaveAttribute('aria-roledescription', 'Extension')
  await expect(firstItem).toHaveAttribute('aria-posinset', '1')
  await expect(firstItem).toHaveAttribute('aria-setsize', '1')
  await expect(firstItem).toHaveAttribute('role', 'listitem')
}
