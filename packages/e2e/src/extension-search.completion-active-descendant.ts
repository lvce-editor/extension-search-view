import type { Test } from '@lvce-editor/test-with-playwright'

export const test: Test = async ({ expect, ExtensionSearch, Locator }) => {
  await ExtensionSearch.open()
  await ExtensionSearch.clearSearchResults()
  await ExtensionSearch.handleInput('@', 1, 1)
  await ExtensionSearch.selectNextCompletion()
  const secondItem = Locator('.ExtensionSearchCompletionItem').nth(1)
  await expect(secondItem).toHaveClass('ExtensionSearchCompletionItemFocused')
}
