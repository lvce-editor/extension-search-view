import type { Test } from '@lvce-editor/test-with-playwright'

export const skip = 0

export const test: Test = async ({ expect, ExtensionSearch, Locator }) => {
  await ExtensionSearch.open()
  await ExtensionSearch.handleInput('@id:builtin.theme-palenight')
  const description = Locator('.ExtensionListItemDescription')
  await expect(description).toHaveText('An elegant and juicy material-inspired theme for Visual Studio Code.')
}
