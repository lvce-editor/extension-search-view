import type { Test } from '@lvce-editor/test-with-playwright'

export const skip = 0

export const test: Test = async ({ Command, expect, ExtensionSearch, Locator }) => {
  await ExtensionSearch.open()
  await Command.execute('Extensions.handleInput', '@', 1, 1)
  await Command.execute('Extensions.selectNextCompletion')
  await Command.execute('Extensions.selectPreviousCompletion')
  const firstItem = Locator('.ExtensionSearchCompletionItem').first()
  await expect(firstItem).toHaveClass('ExtensionSearchCompletionItemFocused')
}
