import type { Test } from '@lvce-editor/test-with-playwright'

export const test: Test = async ({ expect, ExtensionSearch, Locator }) => {
  await ExtensionSearch.open()
  await ExtensionSearch.handleInput('@category:', 1, 10)
  const item = Locator('.ExtensionSearchCompletionItem').nth(10)
  await expect(item).toHaveAttribute('name', '@category:"linters"')
}
