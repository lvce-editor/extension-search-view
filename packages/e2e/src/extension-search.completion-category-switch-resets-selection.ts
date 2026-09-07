import type { Test } from '@lvce-editor/test-with-playwright'

export const test: Test = async ({ expect, ExtensionSearch, Locator }) => {
  await ExtensionSearch.open()
  await ExtensionSearch.handleInput('@', 1, 1)
  await ExtensionSearch.selectPreviousCompletion()
  await expect(Locator('.ExtensionSearchCompletionItemFocused')).toHaveText('@workspaceunsupported')

  await ExtensionSearch.handleInput('@category:', 1, 10)
  await expect(Locator('.ExtensionSearchCompletionItem')).toHaveCount(20)
  await expect(Locator('.ExtensionSearchCompletionItemFocused')).toHaveText('@category:"ai"')
  await ExtensionSearch.acceptCompletion()
  await expect(Locator('.Extensions .MultilineInputBox')).toHaveValue('@category:"ai" ')
}
