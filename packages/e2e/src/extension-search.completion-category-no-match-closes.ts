import type { Test } from '@lvce-editor/test-with-playwright'

export const test: Test = async ({ expect, ExtensionSearch, Locator }) => {
  await ExtensionSearch.open()
  await ExtensionSearch.clearSearchResults()
  await ExtensionSearch.handleInput('@category:xyz', 1, 13)
  const widget = Locator('.ExtensionSearchCompletionWidget')
  await expect(widget).toBeHidden()
}
