import type { Test } from '@lvce-editor/test-with-playwright'

export const test: Test = async ({ expect, ExtensionSearch, Locator }) => {
  await ExtensionSearch.open()
  await ExtensionSearch.handleInput('')
  const widget = Locator('.ExtensionSearchCompletionWidget')
  await expect(widget).toHaveCount(0)
  await ExtensionSearch.acceptCompletion()
  const input = Locator('.Extensions .MultilineInputBox')
  await expect(input).toHaveValue('')
  await expect(widget).toHaveCount(0)

  await ExtensionSearch.handleInput('@en', 1, 3)
  await ExtensionSearch.acceptCompletion()
  await expect(input).toHaveValue('@enabled ')
}
