import type { Test } from '@lvce-editor/test-with-playwright'

export const test: Test = async ({ expect, ExtensionSearch, Locator }) => {
  await ExtensionSearch.open()
  await ExtensionSearch.handleInput('@id:builtin.vscode-icons')
  const description = Locator('.ExtensionListItemDescription')
  await expect(description).toHaveText('Icons for Visual Studio Code')
}
