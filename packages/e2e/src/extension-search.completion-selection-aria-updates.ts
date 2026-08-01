import type { Test } from '@lvce-editor/test-with-playwright'

export const skip = 0

export const test: Test = async ({ expect, ExtensionSearch, Locator }) => {
  await ExtensionSearch.open()
  await ExtensionSearch.clearSearchResults()
  await ExtensionSearch.handleInput('@', 1, 1)
  await ExtensionSearch.selectNextCompletion()
  const items = Locator('.ExtensionSearchCompletionItem')
  const secondItem = items.nth(1)
  await expect(items.first()).toHaveAttribute('aria-selected', 'false')
  await expect(secondItem).toHaveAttribute('aria-selected', 'true')
}
