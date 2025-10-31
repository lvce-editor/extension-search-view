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
}
