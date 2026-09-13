import type { Test } from '@lvce-editor/test-with-playwright'

export const test: Test = async ({ expect, ExtensionSearch, Locator }) => {
  // arrange
  await ExtensionSearch.open()

  // act
  await ExtensionSearch.handleInput('@category:', 1, 10)

  // assert
  const items = Locator('.ExtensionSearchCompletionItem')
  const lastItem = items.nth(19)
  await expect(items.first()).toHaveAttribute('id', 'ExtensionSearchCompletion-0')
  await expect(lastItem).toHaveAttribute('id', 'ExtensionSearchCompletion-19')
}
