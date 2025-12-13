import type { Test } from '@lvce-editor/test-with-playwright'

// export const skip = 1

<<<<<<< HEAD
export const test: Test = async ({ Locator, expect, ExtensionSearch }) => {
=======
export const test: Test = async ({ Command, expect, Locator, SideBar }) => {
>>>>>>> origin/main
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
