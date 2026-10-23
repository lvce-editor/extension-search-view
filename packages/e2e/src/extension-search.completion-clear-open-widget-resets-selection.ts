import type { Test } from '@lvce-editor/test-with-playwright'

export const test: Test = async ({ expect, ExtensionSearch, Locator }) => {
  // arrange
  await ExtensionSearch.open()
  await ExtensionSearch.handleInput('@', 1, 1)

  // act
  await ExtensionSearch.selectPreviousCompletion()

  // assert
  const focusedCompletion = Locator('.ExtensionSearchCompletionItemFocused')
  await expect(focusedCompletion).toHaveText('@workspaceunsupported')

  // act
  await ExtensionSearch.clearSearchResults()

  // assert
  const widget = Locator('.ExtensionSearchCompletionWidget')
  await expect(widget).toHaveCount(0)
  const input = Locator('.Extensions .MultilineInputBox')
  await expect(input).toHaveValue('')
  const items = Locator('.ExtensionListItem')
  await expect(items).toHaveCount(10)

  // act
  await ExtensionSearch.handleInput('@', 1, 1)

  // assert
  await expect(focusedCompletion).toHaveText('@builtin')
}
