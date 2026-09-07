import type { Test } from '@lvce-editor/test-with-playwright'

export const test: Test = async ({ expect, ExtensionSearch, Locator }) => {
  await ExtensionSearch.open()
  await ExtensionSearch.handleInput('@en', 1, 3)
  const widget = Locator('.ExtensionSearchCompletionWidget')
  await expect(widget).toBeVisible()
  await ExtensionSearch.closeSuggest()
  await ExtensionSearch.selectNextCompletion()
  await ExtensionSearch.selectPreviousCompletion()
  await expect(widget).toHaveCount(0)
  const input = Locator('.Extensions .MultilineInputBox')
  await expect(input).toHaveValue('@en')
  await expect(input).toHaveAttribute('aria-expanded', 'false')
}
