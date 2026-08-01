import type { Test } from '@lvce-editor/test-with-playwright'

export const skip = 0

export const test: Test = async ({ Command, expect, ExtensionSearch, Locator }) => {
  await ExtensionSearch.open()
  await ExtensionSearch.clearSearchResults()
  await Command.execute('Extensions.handleInput', '@', 1, 1)
  await Command.execute('Extensions.selectNextCompletion')
  const items = Locator('.ExtensionSearchCompletionItem')
  const secondItem = items.nth(1)
  await expect(items.first()).toHaveAttribute('aria-selected', 'false')
  await expect(secondItem).toHaveAttribute('aria-selected', 'true')
}
