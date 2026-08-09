import type { Test } from '@lvce-editor/test-with-playwright'

export const test: Test = async ({ expect, ExtensionSearch, Locator }) => {
  await ExtensionSearch.open()
  await ExtensionSearch.clearSearchResults()
  await ExtensionSearch.handleInput('@outd', 1, 5)
  const items = Locator('.ExtensionSearchCompletionItem')
  const secondItem = items.nth(1)
  await expect(items).toHaveCount(2)
  await expect(items.first()).toHaveText('@outdated')
  await expect(secondItem).toHaveText('@workspaceunsupported')
}
