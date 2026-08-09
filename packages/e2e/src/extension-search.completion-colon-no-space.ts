import type { Test } from '@lvce-editor/test-with-playwright'

export const test: Test = async ({ expect, ExtensionSearch, Locator }) => {
  await ExtensionSearch.open()
  await ExtensionSearch.clearSearchResults()
  await ExtensionSearch.handleInput('@i', 1, 2)
  await ExtensionSearch.handleClickAt(0, 0, 0, '@id:')
  const input = Locator('.Extensions .MultilineInputBox')
  await expect(input).toHaveValue('@id:')
}
