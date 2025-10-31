import type { Test } from '@lvce-editor/test-with-playwright'

export const test: Test = async ({ Locator, expect, SideBar, Command, ClipBoard }) => {
  // arrange
  await ClipBoard.enableMemoryClipBoard()
  await SideBar.open('Extensions')
  const extensionsView = Locator('.Extensions')
  await expect(extensionsView).toBeVisible()
  await Command.execute('Extensions.handleInput', 'atom', 2)

  // act
  await Command.execute('Extensions.copyExtensionId')

  // assert
  await ClipBoard.shouldHaveText('builtin.theme-atom-one-dark')
}
