import type { Test } from '@lvce-editor/test-with-playwright'

// export const skip = 1

export const test: Test = async ({ Locator, expect, SideBar, Command, ExtensionSearch }) => {
  // arrange
  await ExtensionSearch.open()
  const extensionsView = Locator('.Extensions')
  await expect(extensionsView).toBeVisible()

  // act
  await ExtensionSearch.handleInput('@id:builtin.theme-atom-one-dark')

  // assert
  const listItems = Locator('.Extensions .ListItems')
  await expect(listItems).toHaveCount(1)
  const firstItem = listItems.locator('.ExtensionListItem')
  await expect(firstItem).toBeVisible()
}
