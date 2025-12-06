import type { Test } from '@lvce-editor/test-with-playwright'

// export const skip = 1

export const test: Test = async ({ Command, expect, Locator, SideBar }) => {
  // arrange
  await SideBar.open('Extensions')
  const extensionsView = Locator('.Extensions')
  await expect(extensionsView).toBeVisible()

  // act
  await Command.execute('Extensions.handleInput', '@id:builtin.theme-atom-one-dark', 2)

  // assert
  const listItems = Locator('.Extensions .ListItems')
  await expect(listItems).toHaveCount(1)
  const firstItem = listItems.locator('.ExtensionListItem')
}
