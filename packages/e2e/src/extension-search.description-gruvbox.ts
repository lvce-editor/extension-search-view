import type { Test } from '@lvce-editor/test-with-playwright'

export const skip = 0

export const test: Test = async ({ expect, ExtensionSearch, Locator }) => {
  await ExtensionSearch.open()
  await ExtensionSearch.handleInput('@id:builtin.theme-gruvbox')
  const description = Locator('.ExtensionListItemDescription')
  await expect(description).toHaveText('Theme based on gruvbox-material-vscode theme by sainnhe')
}
