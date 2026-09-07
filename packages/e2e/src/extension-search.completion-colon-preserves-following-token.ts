import type { Test } from '@lvce-editor/test-with-playwright'

export const test: Test = async ({ expect, ExtensionSearch, Locator }) => {
  await ExtensionSearch.open()
  await ExtensionSearch.handleInput('@cat atom', 1, 4)
  await expect(Locator('.ExtensionSearchCompletionWidget')).toBeVisible()
  await ExtensionSearch.acceptCompletion()
  await expect(Locator('.Extensions .MultilineInputBox')).toHaveValue('@category: atom')
  await expect(Locator('.ExtensionSearchCompletionWidget')).toHaveCount(0)
  await expect(Locator('.Extensions .MultilineInputBox')).toHaveAttribute('aria-expanded', 'false')
}
