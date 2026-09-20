import type { Test } from '@lvce-editor/test-with-playwright'

export const test: Test = async ({ expect, ExtensionSearch, Locator }) => {
  // arrange
  await ExtensionSearch.open()
  await ExtensionSearch.handleInput('@', 1, 1)

  // act
  await ExtensionSearch.selectNextCompletion()
  await ExtensionSearch.selectNextCompletion()
  await ExtensionSearch.selectNextCompletion()
  await ExtensionSearch.selectNextCompletion()
  await ExtensionSearch.selectNextCompletion()
  await ExtensionSearch.selectNextCompletion()

  // assert
  const input = Locator('.Extensions .MultilineInputBox')
  const item = Locator('.ExtensionSearchCompletionItem').nth(6)
  await expect(input).toHaveAttribute('aria-activedescendant', 'ExtensionSearchCompletion-6')
  await expect(item).toHaveAttribute('aria-selected', 'true')
}
