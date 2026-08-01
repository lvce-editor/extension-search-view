import type { Test } from '@lvce-editor/test-with-playwright'

export const skip = 0

export const test: Test = async ({ expect, ExtensionSearch, Locator }) => {
  await ExtensionSearch.open()
  await ExtensionSearch.handleInput('@category:', 1, 10)
  const items = Locator('.ExtensionSearchCompletionItem')
  const lastItem = items.nth(19)
  await expect(items.first()).toHaveAttribute('id', 'ExtensionSearchCompletion-0')
  await expect(lastItem).toHaveAttribute('id', 'ExtensionSearchCompletion-19')
}
