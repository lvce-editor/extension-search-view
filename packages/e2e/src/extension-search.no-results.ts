import type { Test } from '@lvce-editor/test-with-playwright'

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
  await ExtensionSearch.handleInput('not-found')

  // assert
  const listItems = Locator('.Extensions .ListItems')
  await expect(listItems).toHaveCount(0)
  const noExtensionsFoundMessage = Locator('.Extensions > div:nth-of-type(2)')
  await expect(noExtensionsFoundMessage).toBeVisible()
  await expect(noExtensionsFoundMessage).toHaveText('No extensions found.')
}
