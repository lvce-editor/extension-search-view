import type { Test } from '@lvce-editor/test-with-playwright'

export const test: Test = async ({ expect, ExtensionSearch, KeyBoard, Locator }) => {
  // arrange
  await ExtensionSearch.open()
  await ExtensionSearch.handleInput('@', 2, 1)
  await ExtensionSearch.handleInput('@', 1, 1)

  // act
  await ExtensionSearch.selectNextCompletion()

  // assert
  const focusedCompletion = Locator('.ExtensionSearchCompletionItemFocused')
  await expect(focusedCompletion).toHaveText('@category:')

  // act
  await ExtensionSearch.closeSuggest()
  await ExtensionSearch.closeSuggest()

  // assert
  const widget = Locator('.ExtensionSearchCompletionWidget')
  await expect(widget).toHaveCount(0)

  // act
  await KeyBoard.press('Control+Space')

  // assert
  await expect(focusedCompletion).toHaveText('@builtin')
  const input = Locator('.Extensions .MultilineInputBox')
  await expect(input).toHaveValue('@')
}
