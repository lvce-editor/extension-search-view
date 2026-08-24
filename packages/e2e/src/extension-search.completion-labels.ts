import type { Test } from '@lvce-editor/test-with-playwright'

export const test: Test = async ({ expect, ExtensionSearch, Locator }) => {
  await ExtensionSearch.open()
  await ExtensionSearch.clearSearchResults()
  await ExtensionSearch.handleInput('@', 1, 1)
  const items = Locator('.ExtensionSearchCompletionItem')
  const firstItem = items.nth(0)
  const lastItem = items.nth(14)
  await expect(firstItem).toHaveText('@builtin')
  await expect(lastItem).toHaveText('@workspaceunsupported')
}
