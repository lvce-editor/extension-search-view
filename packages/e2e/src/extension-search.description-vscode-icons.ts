import type { Test } from '@lvce-editor/test-with-playwright'

export const test: Test = async ({ expect, ExtensionSearch, Locator }) => {
  // arrange
  await ExtensionSearch.open()

  // act
  await ExtensionSearch.handleInput('@id:builtin.vscode-icons')

  // assert
  const description = Locator('.ExtensionListItemDescription')
  await expect(description).toHaveText('Icons for Visual Studio Code')
}
