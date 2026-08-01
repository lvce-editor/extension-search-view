import type { Test } from '@lvce-editor/test-with-playwright'

export const skip = 0

export const test: Test = async ({ expect, ExtensionSearch, Locator }) => {
  await ExtensionSearch.open()
  await ExtensionSearch.clearSearchResults()
  await ExtensionSearch.handleInput('@mcp', 1, 4)
  const items = Locator('.ExtensionSearchCompletionItem')
  await expect(items).toHaveCount(1)
  await expect(items).toHaveText('@mcpservers')
}
