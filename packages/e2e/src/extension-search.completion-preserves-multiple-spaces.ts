import type { Test } from '@lvce-editor/test-with-playwright'

export const test: Test = async ({ expect, ExtensionSearch, Locator }) => {
  await ExtensionSearch.open()
  await ExtensionSearch.handleInput('atom  @en   tail', 1, 9)
  await expect(Locator('.ExtensionSearchCompletionWidget')).toBeVisible()
  await ExtensionSearch.acceptCompletion()
  await expect(Locator('.Extensions .MultilineInputBox')).toHaveValue('atom  @enabled   tail')
  await expect(Locator('.ExtensionSearchCompletionWidget')).toHaveCount(0)
  await expect(Locator('.Extensions .MultilineInputBox')).toHaveAttribute('aria-expanded', 'false')
}
