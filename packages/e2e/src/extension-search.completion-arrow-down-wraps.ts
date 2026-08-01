import type { Test } from '@lvce-editor/test-with-playwright'

export const skip = 0

export const test: Test = async ({ Command, expect, ExtensionSearch, Locator }) => {
  await ExtensionSearch.open()
  await Command.execute('Extensions.handleInput', '@', 1, 1)
  for (let i = 0; i < 14; i++) {
    await Command.execute('Extensions.selectNextCompletion')
  }
  const firstItem = Locator('.ExtensionSearchCompletionItem').first()
  await expect(firstItem).toHaveClass('ExtensionSearchCompletionItemFocused')
}
