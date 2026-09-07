import type { Test } from '@lvce-editor/test-with-playwright'

export const test: Test = async ({ expect, ExtensionSearch, KeyBoard, Locator }) => {
  await ExtensionSearch.open()
  await ExtensionSearch.handleInput('@', 1, 1)
  await ExtensionSearch.selectNextCompletion()
  await expect(Locator('.ExtensionSearchCompletionItemFocused')).toHaveText('@category:')
  await ExtensionSearch.closeSuggest()
  await ExtensionSearch.closeSuggest()
  await expect(Locator('.ExtensionSearchCompletionWidget')).toHaveCount(0)
  await KeyBoard.press('Control+Space')
  await expect(Locator('.ExtensionSearchCompletionItemFocused')).toHaveText('@builtin')
  await expect(Locator('.Extensions .MultilineInputBox')).toHaveValue('@')
}
