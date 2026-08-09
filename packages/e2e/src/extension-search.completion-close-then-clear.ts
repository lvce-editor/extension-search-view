import type { Test } from '@lvce-editor/test-with-playwright'

export const test: Test = async ({ expect, ExtensionSearch, Locator }) => {
  await ExtensionSearch.open()
  await ExtensionSearch.clearSearchResults()
  await ExtensionSearch.handleInput('@', 1, 1)
  await ExtensionSearch.closeSuggest()
  await ExtensionSearch.clearSearchResults()
  const widget = Locator('.ExtensionSearchCompletionWidget')
  const input = Locator('.Extensions .MultilineInputBox')
  await expect(widget).toHaveCount(0)
  await expect(input).toHaveValue('')
}
