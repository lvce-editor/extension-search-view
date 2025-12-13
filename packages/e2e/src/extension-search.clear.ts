import type { Test } from '@lvce-editor/test-with-playwright'

export const skip = 1

<<<<<<< HEAD
export const test: Test = async ({ Locator, expect, Command, ExtensionSearch }) => {
=======
export const test: Test = async ({ Command, expect, Locator, SideBar }) => {
>>>>>>> origin/main
  // arrange
  await ExtensionSearch.open()
  const extensionsView = Locator('.Extensions')
  await expect(extensionsView).toBeVisible()
  await ExtensionSearch.handleInput('atom')

  // act
  await Command.execute('Extensions.clearSearchResults')

  // assert
  const listItems = Locator('.Extensions .ListItems')
  await expect(listItems).toHaveCount(0)
}
