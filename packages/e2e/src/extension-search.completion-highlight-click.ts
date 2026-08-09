import type { Test } from '@lvce-editor/test-with-playwright'

export const test: Test = async ({ expect, ExtensionSearch, Locator }) => {
  await ExtensionSearch.open()
  await ExtensionSearch.clearSearchResults()
  await ExtensionSearch.handleInput('@bti', 1, 4)
  await ExtensionSearch.handleClickAt(0, 0, 0, '@builtin')
  const input = Locator('.Extensions .MultilineInputBox')
  await expect(input).toHaveValue('@builtin ')
}
