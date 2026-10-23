import type { Test } from '@lvce-editor/test-with-playwright'

export const test: Test = async ({ expect, ExtensionSearch, Locator }) => {
  // arrange
  await ExtensionSearch.open()

  // act
  await ExtensionSearch.handleInput('@en', 2, 3)
  await ExtensionSearch.handleInput('@en', 1, 3)

  // assert
  const widget = Locator('.ExtensionSearchCompletionWidget')
  await expect(widget).toBeVisible()

  // act
  await ExtensionSearch.closeSuggest()
  await ExtensionSearch.selectNextCompletion()
  await ExtensionSearch.selectPreviousCompletion()

  // assert
  await expect(widget).toHaveCount(0)
  const input = Locator('.Extensions .MultilineInputBox')
  await expect(input).toHaveValue('@en')
  await expect(input).toHaveAttribute('aria-expanded', 'false')
}
