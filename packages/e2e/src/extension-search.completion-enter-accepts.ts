import type { Test } from '@lvce-editor/test-with-playwright'

export const test: Test = async ({ expect, ExtensionSearch, Locator }) => {
  await ExtensionSearch.open()
  await ExtensionSearch.clearSearchResults()
  await ExtensionSearch.handleInput('@buil', 1, 5)
  const input = Locator('.Extensions .MultilineInputBox')
  await ExtensionSearch.acceptCompletion()
  await expect(input).toHaveValue('@builtin ')
}
