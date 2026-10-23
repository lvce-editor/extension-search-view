import type { Test } from '@lvce-editor/test-with-playwright'

export const test: Test = async ({ expect, ExtensionSearch, KeyBoard, Locator }) => {
  // arrange
  await ExtensionSearch.open()
  await ExtensionSearch.clearSearchResults()
  await ExtensionSearch.handleInput('@', 1, 1)

  // act
  await ExtensionSearch.closeSuggest()

  // assert
  const input = Locator('.MultilineInputBox')
  await expect(input).toBeFocused()

  // act
  await KeyBoard.press('Control+Space')

  // assert
  const widget = Locator('.ExtensionSearchCompletionWidget')
  await expect(widget).toBeVisible()
}
