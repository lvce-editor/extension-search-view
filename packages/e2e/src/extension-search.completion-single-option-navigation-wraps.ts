import type { Test } from '@lvce-editor/test-with-playwright'

export const test: Test = async ({ expect, ExtensionSearch, Locator }) => {
  // arrange
  await ExtensionSearch.open()

  // act
  await ExtensionSearch.handleInput('@enab', 1, 5)

  // assert
  const completionItems = Locator('.ExtensionSearchCompletionItem')
  await expect(completionItems).toHaveCount(1)

  // act
  await ExtensionSearch.selectNextCompletion()

  // assert
  const focusedCompletion = Locator('.ExtensionSearchCompletionItemFocused')
  await expect(focusedCompletion).toHaveText('@enabled')

  // act
  await ExtensionSearch.selectPreviousCompletion()

  // assert
  await expect(focusedCompletion).toHaveText('@enabled')
  const input = Locator('.Extensions .MultilineInputBox')
  await expect(input).toHaveAttribute('aria-activedescendant', 'ExtensionSearchCompletion-0')

  // act
  await ExtensionSearch.acceptCompletion()

  // assert
  await expect(input).toHaveValue('@enabled ')
}
