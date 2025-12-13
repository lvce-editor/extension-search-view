import type { Test } from '@lvce-editor/test-with-playwright'

<<<<<<< HEAD
export const test: Test = async ({ Locator, expect, ClipBoard, ExtensionSearch }) => {
=======
export const test: Test = async ({ ClipBoard, Command, expect, Locator, SideBar }) => {
>>>>>>> origin/main
  // arrange
  await ClipBoard.enableMemoryClipBoard()
  await ExtensionSearch.open()
  const extensionsView = Locator('.Extensions')
  await expect(extensionsView).toBeVisible()
  await ExtensionSearch.handleInput('atom')

  // act
  await ExtensionSearch.copyExtensionId()

  // assert
  await ClipBoard.shouldHaveText('builtin.theme-atom-one-dark')
}
