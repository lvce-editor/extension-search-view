import type { Test } from '@lvce-editor/test-with-playwright'

export const skip = 0

export const test: Test = async ({ expect, ExtensionSearch, Locator }) => {
  await ExtensionSearch.open()
  await ExtensionSearch.handleInput('@', 1, 1)
  const items = Locator('.ExtensionSearchCompletionItem')
  const lastItem = items.nth(13)
  await expect(items.first()).toHaveAttribute('id', 'ExtensionSearchCompletion-0')
  await expect(lastItem).toHaveAttribute('id', 'ExtensionSearchCompletion-13')
}
