import type { Test } from '@lvce-editor/test-with-playwright'

export const test: Test = async ({ expect, ExtensionSearch, Locator }) => {
  // arrange
  await ExtensionSearch.open()
  await ExtensionSearch.clearSearchResults()

  // act
  await ExtensionSearch.handleInput('@category:ai', 1, 12)

  // assert
  const items = Locator('.ExtensionSearchCompletionItem')
  const lastItem = items.nth(5)
  await expect(items).toHaveCount(6)
  await expect(items.first()).toHaveText('@category:"ai"')
  await expect(lastItem).toHaveText('@category:"visualization"')
}
