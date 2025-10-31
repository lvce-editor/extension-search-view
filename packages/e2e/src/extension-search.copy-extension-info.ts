import type { Test } from '@lvce-editor/test-with-playwright'

export const test: Test = async ({ Locator, expect, SideBar, Command, ClipBoard }) => {
  // arrange
  await ClipBoard.enableMemoryClipBoard()
  await SideBar.open('Extensions')
  const extensionsView = Locator('.Extensions')
  await expect(extensionsView).toBeVisible()
  await Command.execute('Extensions.handleInput', 'atom', 2)

  // act
  await Command.execute('Extensions.copyExtensionInfo')

  // assert
  await ClipBoard.shouldHaveText(`Name: Atom One Dark Theme
Id: builtin.theme-atom-one-dark
Description: One Dark Theme based on Atom
Version:
Publisher: builtin
Marketplace Link:`)
}
