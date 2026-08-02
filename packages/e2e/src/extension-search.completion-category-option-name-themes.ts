import type { Test } from '@lvce-editor/test-with-playwright'

export const skip = 0

export const test: Test = async ({ expect, ExtensionSearch, Locator }) => {
  await ExtensionSearch.open()
  await ExtensionSearch.handleInput('@category:', 1, 10)
  const item = Locator('.ExtensionSearchCompletionItem').nth(18)
  await expect(item).toHaveAttribute('name', '@category:"themes"')
}
