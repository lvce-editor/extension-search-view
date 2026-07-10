import type { Test } from '@lvce-editor/test-with-playwright'

export const skip = 0

export const test: Test = async ({ Command, expect, ExtensionSearch, Locator }) => {
  await ExtensionSearch.open()
  await ExtensionSearch.clearSearchResults()
  await Command.execute('Extensions.handleInput', '@', 1, 1)
  const firstItem = Locator('.ExtensionSearchCompletionItem').nth(0)
  await expect(firstItem).toHaveAttribute('role', 'option')
  await expect(firstItem).toHaveAttribute('aria-selected', 'true')
}
