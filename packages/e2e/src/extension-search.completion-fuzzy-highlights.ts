import type { Test } from '@lvce-editor/test-with-playwright'

export const test: Test = async ({ expect, ExtensionSearch, Locator }) => {
  // arrange
  await ExtensionSearch.open()
  await ExtensionSearch.clearSearchResults()

  // act
  await ExtensionSearch.handleInput('@bti', 1, 4)

  // assert
  const highlights = Locator('.ExtensionSearchCompletionHighlight')
  await expect(highlights).toHaveCount(2)
  const firstHighlight = highlights.nth(0)
  const secondHighlight = highlights.nth(1)
  await expect(firstHighlight).toHaveText('@b')
  await expect(secondHighlight).toHaveText('ti')
}
