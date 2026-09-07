import type { Test } from '@lvce-editor/test-with-playwright'

export const test: Test = async ({ expect, ExtensionSearch, Locator }) => {
  await ExtensionSearch.open()
  await ExtensionSearch.handleInput('@en', 1, 3)
  await expect(Locator('.ExtensionSearchCompletionWidget')).toBeVisible()
  await ExtensionSearch.closeSuggest()
  await ExtensionSearch.selectNextCompletion()
  await ExtensionSearch.selectPreviousCompletion()
  await expect(Locator('.ExtensionSearchCompletionWidget')).toHaveCount(0)
  await expect(Locator('.Extensions .MultilineInputBox')).toHaveValue('@en')
  await expect(Locator('.Extensions .MultilineInputBox')).toHaveAttribute('aria-expanded', 'false')
}
