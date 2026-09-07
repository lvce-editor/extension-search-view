import type { Test } from '@lvce-editor/test-with-playwright'

export const test: Test = async ({ expect, ExtensionSearch, Locator }) => {
  await ExtensionSearch.open()
  await ExtensionSearch.handleInput('@', 1, 1)
  await ExtensionSearch.selectPreviousCompletion()
  await expect(Locator('.ExtensionSearchCompletionItemFocused')).toHaveText('@workspaceunsupported')

  await ExtensionSearch.handleInput('@enab', 1, 5)
  await expect(Locator('.ExtensionSearchCompletionItem')).toHaveCount(1)
  await expect(Locator('.ExtensionSearchCompletionItemFocused')).toHaveText('@enabled')
  await expect(Locator('.Extensions .MultilineInputBox')).toHaveAttribute('aria-activedescendant', 'ExtensionSearchCompletion-0')
  await ExtensionSearch.acceptCompletion()
  await expect(Locator('.Extensions .MultilineInputBox')).toHaveValue('@enabled ')
}
