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
  await ExtensionSearch.handleInput('@category:', 1, 10)

  // assert
  const completionItems = Locator('.ExtensionSearchCompletionItem')
  await expect(completionItems).toHaveCount(20)
  await expect(focusedCompletion).toHaveText('@category:"ai"')

  // act
  await ExtensionSearch.acceptCompletion()

  // assert
  const input = Locator('.Extensions .MultilineInputBox')
  await expect(input).toHaveValue('@category:"ai" ')
}
