import type { Test } from '@lvce-editor/test-with-playwright'

export const test: Test = async ({ expect, ExtensionSearch, Locator }) => {
  await ExtensionSearch.open()
  await ExtensionSearch.handleInput('@', 1, 1)
  await ExtensionSearch.selectPreviousCompletion()
  await expect(Locator('.ExtensionSearchCompletionItemFocused')).toHaveText('@workspaceunsupported')
  await ExtensionSearch.clearSearchResults()
  await expect(Locator('.ExtensionSearchCompletionWidget')).toHaveCount(0)
  await expect(Locator('.Extensions .MultilineInputBox')).toHaveValue('')
  await expect(Locator('.ExtensionListItem')).toHaveCount(10)

  await ExtensionSearch.handleInput('@', 1, 1)
  await expect(Locator('.ExtensionSearchCompletionItemFocused')).toHaveText('@builtin')
}
