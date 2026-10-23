import type { Test } from '@lvce-editor/test-with-playwright'

export const test: Test = async ({ expect, ExtensionSearch, Locator }) => {
  // arrange
  await ExtensionSearch.open()
  await ExtensionSearch.handleInput('@', 1, 1)

  // act
  await ExtensionSearch.selectPreviousCompletion()
  await ExtensionSearch.selectPreviousCompletion()

  // assert
  const input = Locator('.Extensions .MultilineInputBox')
  const selectedItem = Locator('.ExtensionSearchCompletionItem').nth(13)
  await expect(input).toHaveAttribute('aria-activedescendant', 'ExtensionSearchCompletion-13')
  await expect(selectedItem).toHaveText('@sort:installs')
}
