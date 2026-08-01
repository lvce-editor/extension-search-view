import type { Test } from '@lvce-editor/test-with-playwright'

export const skip = 0

export const test: Test = async ({ expect, ExtensionSearch, Locator }) => {
  await ExtensionSearch.open()
  await ExtensionSearch.clearSearchResults()
  await ExtensionSearch.handleInput('@category:ai', 1, 12)
  const items = Locator('.ExtensionSearchCompletionItem')
  const lastItem = items.nth(5)
  await expect(items).toHaveCount(6)
  await expect(items.first()).toHaveText('@category:"ai"')
  await expect(lastItem).toHaveText('@category:"visualization"')
}
