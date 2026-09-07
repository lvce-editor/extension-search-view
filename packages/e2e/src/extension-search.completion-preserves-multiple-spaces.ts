import type { Test } from '@lvce-editor/test-with-playwright'

export const test: Test = async ({ expect, ExtensionSearch, Locator }) => {
  await ExtensionSearch.open()
  await ExtensionSearch.handleInput('atom  @en   tail', 1, 9)
  const widget = Locator('.ExtensionSearchCompletionWidget')
  await expect(widget).toBeVisible()
  await ExtensionSearch.acceptCompletion()
  const input = Locator('.Extensions .MultilineInputBox')
  await expect(input).toHaveValue('atom  @enabled   tail')
  await expect(widget).toHaveCount(0)
  await expect(input).toHaveAttribute('aria-expanded', 'false')
}
