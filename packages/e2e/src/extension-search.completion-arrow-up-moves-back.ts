import type { Test } from '@lvce-editor/test-with-playwright'

export const test: Test = async ({ expect, ExtensionSearch, Locator }) => {
  await ExtensionSearch.open()
  await ExtensionSearch.handleInput('@', 1, 1)
  await ExtensionSearch.selectNextCompletion()
  await ExtensionSearch.selectPreviousCompletion()
  const firstItem = Locator('.ExtensionSearchCompletionItem').first()
  await expect(firstItem).toHaveClass('ExtensionSearchCompletionItemFocused')
}
