import type { Test } from '@lvce-editor/test-with-playwright'

export const test: Test = async ({ expect, ExtensionSearch, Locator }) => {
  await ExtensionSearch.open()
  await ExtensionSearch.handleInput('@', 1, 1)
  await ExtensionSearch.selectPreviousCompletion()
  const focusedCompletion = Locator('.ExtensionSearchCompletionItemFocused')
  await expect(focusedCompletion).toHaveText('@workspaceunsupported')
  await ExtensionSearch.clearSearchResults()
  const widget = Locator('.ExtensionSearchCompletionWidget')
  await expect(widget).toHaveCount(0)
  const input = Locator('.Extensions .MultilineInputBox')
  await expect(input).toHaveValue('')
  const items = Locator('.ExtensionListItem')
  await expect(items).toHaveCount(10)

  await ExtensionSearch.handleInput('@', 1, 1)
  await expect(focusedCompletion).toHaveText('@builtin')
}
