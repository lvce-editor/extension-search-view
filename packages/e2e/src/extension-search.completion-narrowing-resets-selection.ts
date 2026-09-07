import type { Test } from '@lvce-editor/test-with-playwright'

export const test: Test = async ({ expect, ExtensionSearch, Locator }) => {
  await ExtensionSearch.open()
  await ExtensionSearch.handleInput('@', 1, 1)
  await ExtensionSearch.selectPreviousCompletion()
  const focusedCompletion = Locator('.ExtensionSearchCompletionItemFocused')
  await expect(focusedCompletion).toHaveText('@workspaceunsupported')

  await ExtensionSearch.handleInput('@enab', 1, 5)
  const completionItems = Locator('.ExtensionSearchCompletionItem')
  await expect(completionItems).toHaveCount(1)
  await expect(focusedCompletion).toHaveText('@enabled')
  const input = Locator('.Extensions .MultilineInputBox')
  await expect(input).toHaveAttribute('aria-activedescendant', 'ExtensionSearchCompletion-0')
  await ExtensionSearch.acceptCompletion()
  await expect(input).toHaveValue('@enabled ')
}
