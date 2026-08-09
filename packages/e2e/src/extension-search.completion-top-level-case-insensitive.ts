import type { Test } from '@lvce-editor/test-with-playwright'

export const test: Test = async ({ expect, ExtensionSearch, Locator }) => {
  await ExtensionSearch.open()
  await ExtensionSearch.clearSearchResults()
  await ExtensionSearch.handleInput('@RECOM', 1, 6)
  const items = Locator('.ExtensionSearchCompletionItem')
  await expect(items).toHaveCount(1)
  await expect(items).toHaveText('@recommended')
}
