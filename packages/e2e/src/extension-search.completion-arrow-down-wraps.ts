import type { Test } from '@lvce-editor/test-with-playwright'

export const test: Test = async ({ expect, ExtensionSearch, Locator }) => {
  await ExtensionSearch.open()
  await ExtensionSearch.handleInput('@', 1, 1)
  for (let i = 0; i < 15; i++) {
    await ExtensionSearch.selectNextCompletion()
  }
  const firstItem = Locator('.ExtensionSearchCompletionItem').first()
  await expect(firstItem).toHaveClass('ExtensionSearchCompletionItemFocused')
}
