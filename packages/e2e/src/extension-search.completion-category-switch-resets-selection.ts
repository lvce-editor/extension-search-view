import type { Test } from '@lvce-editor/test-with-playwright'

export const test: Test = async ({ expect, ExtensionSearch, Locator }) => {
  await ExtensionSearch.open()
  await ExtensionSearch.handleInput('@', 1, 1)
  await ExtensionSearch.selectPreviousCompletion()
  const focusedCompletion = Locator('.ExtensionSearchCompletionItemFocused')
  await expect(focusedCompletion).toHaveText('@workspaceunsupported')

  await ExtensionSearch.handleInput('@category:', 1, 10)
  const completionItems = Locator('.ExtensionSearchCompletionItem')
  await expect(completionItems).toHaveCount(20)
  await expect(focusedCompletion).toHaveText('@category:"ai"')
  await ExtensionSearch.acceptCompletion()
  const input = Locator('.Extensions .MultilineInputBox')
  await expect(input).toHaveValue('@category:"ai" ')
}
