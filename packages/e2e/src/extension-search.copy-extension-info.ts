import type { Test } from '@lvce-editor/test-with-playwright'

export const skip = 0

export const test: Test = async ({ ClipBoard, expect, ExtensionSearch, Locator }) => {
  // arrange
  await ClipBoard.enableMemoryClipBoard()
  await ExtensionSearch.open()
  const extensionsView = Locator('.Extensions')
  await expect(extensionsView).toBeVisible()
  await ExtensionSearch.handleInput('atom')

  // act
  await ExtensionSearch.copyExtensionInfo()

  // assert
  await ClipBoard.shouldHaveText(`Name: Atom One Dark Theme
Id: builtin.theme-atom-one-dark
Description: One Dark Theme based on Atom
Version:
Publisher: builtin
Marketplace Link:`)
}
