import type { Test } from '@lvce-editor/test-with-playwright'

export const test: Test = async ({ expect, ExtensionSearch, KeyBoard, Locator }) => {
  await ExtensionSearch.open()
  await ExtensionSearch.handleInput('@', 2, 1)
  await ExtensionSearch.handleInput('@', 1, 1)
  await ExtensionSearch.selectNextCompletion()
  const focusedCompletion = Locator('.ExtensionSearchCompletionItemFocused')
  await expect(focusedCompletion).toHaveText('@category:')
  await ExtensionSearch.closeSuggest()
  await ExtensionSearch.closeSuggest()
  const widget = Locator('.ExtensionSearchCompletionWidget')
  await expect(widget).toHaveCount(0)
  await KeyBoard.press('Control+Space')
  await expect(focusedCompletion).toHaveText('@builtin')
  const input = Locator('.Extensions .MultilineInputBox')
  await expect(input).toHaveValue('@')
}
