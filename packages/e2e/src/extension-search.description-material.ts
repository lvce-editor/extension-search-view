import type { Test } from '@lvce-editor/test-with-playwright'

export const test: Test = async ({ expect, ExtensionSearch, Locator }) => {
  await ExtensionSearch.open()
  await ExtensionSearch.handleInput('@id:builtin.theme-material')
  const description = Locator('.ExtensionListItemDescription')
  await expect(description).toHaveText('The most epic theme now for Visual Studio Code')
}
