import type { Test } from '@lvce-editor/test-with-playwright'

export const test: Test = async ({ expect, ExtensionSearch, Locator }) => {
  await ExtensionSearch.open()
  await ExtensionSearch.clearSearchResults()
  await ExtensionSearch.handleInput('@category:azr', 1, 13)
  const highlights = Locator('.ExtensionSearchCompletionHighlight')
  await expect(highlights).toHaveCount(3)
  const prefixHighlight = highlights.nth(0)
  const firstCategoryHighlight = highlights.nth(1)
  const secondCategoryHighlight = highlights.nth(2)
  await expect(prefixHighlight).toHaveText('@category:')
  await expect(firstCategoryHighlight).toHaveText('az')
  await expect(secondCategoryHighlight).toHaveText('r')
}
