import type { Test } from '@lvce-editor/test-with-playwright'

export const skip = 0

export const test: Test = async ({ Command, expect, ExtensionSearch, Locator }) => {
  await ExtensionSearch.open()
  await ExtensionSearch.clearSearchResults()
  await Command.execute('Extensions.handleInput', '@', 1, 1)
  const items = Locator('.ExtensionSearchCompletionItem')
  const firstItem = items.nth(0)
  const lastItem = items.nth(13)
  await expect(firstItem).toHaveText('@builtin')
  await expect(lastItem).toHaveText('@workspaceunsupported')
}
