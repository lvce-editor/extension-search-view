import type { Test } from '@lvce-editor/test-with-playwright'

export const test: Test = async ({ expect, ExtensionSearch, Locator }) => {
  await ExtensionSearch.open()
  await ExtensionSearch.handleInput('@en\tatom', 1, 3)
  await expect(Locator('.ExtensionSearchCompletionWidget')).toBeVisible()
  await ExtensionSearch.acceptCompletion()
  await expect(Locator('.Extensions .MultilineInputBox')).toHaveValue('@enabled\tatom')
  await expect(Locator('.ExtensionSearchCompletionWidget')).toHaveCount(0)
  await expect(Locator('.Extensions .MultilineInputBox')).toHaveAttribute('aria-expanded', 'false')
}
