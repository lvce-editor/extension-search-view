import type { Test } from '@lvce-editor/test-with-playwright'

export const skip = 0

export const test: Test = async ({ expect, ExtensionSearch, Locator }) => {
  await ExtensionSearch.open()
  await ExtensionSearch.handleInput('@', 1, 1)
  await ExtensionSearch.selectNextCompletion()
  await ExtensionSearch.selectNextCompletion()
  const thirdItem = Locator('.ExtensionSearchCompletionItem').nth(2)
  await expect(thirdItem).toHaveClass('ExtensionSearchCompletionItemFocused')
  await expect(thirdItem).toHaveAttribute('aria-selected', 'true')
}
