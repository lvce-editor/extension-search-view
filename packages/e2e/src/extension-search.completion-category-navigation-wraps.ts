import type { Test } from '@lvce-editor/test-with-playwright'

export const test: Test = async ({ expect, ExtensionSearch, Locator }) => {
  // arrange
  await ExtensionSearch.open()

  // act
  await ExtensionSearch.handleInput('@category:', 1, 10)

  // assert
  const focusedCompletion = Locator('.ExtensionSearchCompletionItemFocused')
  await expect(focusedCompletion).toHaveText('@category:"ai"')

  // act
  await ExtensionSearch.selectPreviousCompletion()

  // assert
  await expect(focusedCompletion).toHaveText('@category:"visualization"')
  const input = Locator('.Extensions .MultilineInputBox')
  await expect(input).toHaveAttribute('aria-activedescendant', 'ExtensionSearchCompletion-19')

  // act
  await ExtensionSearch.selectNextCompletion()

  // assert
  await expect(focusedCompletion).toHaveText('@category:"ai"')
  await expect(input).toHaveAttribute('aria-activedescendant', 'ExtensionSearchCompletion-0')
}
