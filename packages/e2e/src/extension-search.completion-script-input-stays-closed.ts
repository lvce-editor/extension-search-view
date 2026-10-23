import type { Test } from '@lvce-editor/test-with-playwright'

export const test: Test = async ({ expect, ExtensionSearch, Locator }) => {
  // arrange
  await ExtensionSearch.open()
  await ExtensionSearch.clearSearchResults()

  // act
  await ExtensionSearch.handleInput('@', 2, 1)

  // assert
  const widget = Locator('.ExtensionSearchCompletionWidget')
  const input = Locator('.Extensions .MultilineInputBox')
  await expect(widget).toHaveCount(0)
  await expect(input).toHaveValue('@')
}
