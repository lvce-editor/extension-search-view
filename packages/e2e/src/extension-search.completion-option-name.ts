import type { Test } from '@lvce-editor/test-with-playwright'

export const skip = 0

export const test: Test = async ({ Command, expect, ExtensionSearch, Locator }) => {
  await ExtensionSearch.open()
  await ExtensionSearch.clearSearchResults()
  await Command.execute('Extensions.handleInput', '@bti', 1, 4)
  const item = Locator('.ExtensionSearchCompletionItem')
  await expect(item).toHaveCount(1)
  await expect(item).toHaveAttribute('name', '@builtin')
}
