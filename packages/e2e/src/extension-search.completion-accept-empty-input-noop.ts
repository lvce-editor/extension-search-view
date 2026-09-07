import type { Test } from '@lvce-editor/test-with-playwright'

export const test: Test = async ({ expect, ExtensionSearch, Locator }) => {
  await ExtensionSearch.open()
  await ExtensionSearch.handleInput('')
  await expect(Locator('.ExtensionSearchCompletionWidget')).toHaveCount(0)
  await ExtensionSearch.acceptCompletion()
  await expect(Locator('.Extensions .MultilineInputBox')).toHaveValue('')
  await expect(Locator('.ExtensionSearchCompletionWidget')).toHaveCount(0)

  await ExtensionSearch.handleInput('@en', 1, 3)
  await ExtensionSearch.acceptCompletion()
  await expect(Locator('.Extensions .MultilineInputBox')).toHaveValue('@enabled ')
}
