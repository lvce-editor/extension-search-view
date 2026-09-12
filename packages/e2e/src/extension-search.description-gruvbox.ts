import type { Test } from '@lvce-editor/test-with-playwright'

export const test: Test = async ({ expect, ExtensionSearch, Locator }) => {
  // arrange
  await ExtensionSearch.open()

  // act
  await ExtensionSearch.handleInput('@id:builtin.theme-gruvbox')

  // assert
  const description = Locator('.ExtensionListItemDescription')
  await expect(description).toHaveText('Theme based on gruvbox-material-vscode theme by sainnhe')
}
