import type { Test } from '@lvce-editor/test-with-playwright'

export const test: Test = async ({ expect, ExtensionSearch, Locator }) => {
  // arrange
  await ExtensionSearch.open()
  await ExtensionSearch.clearSearchResults()

  // act
  await ExtensionSearch.handleInput('@bti', 1, 4)

  // assert
  const item = Locator('.ExtensionSearchCompletionItem')
  await expect(item).toHaveCount(1)
  await expect(item).toHaveAttribute('name', '@builtin')
}
