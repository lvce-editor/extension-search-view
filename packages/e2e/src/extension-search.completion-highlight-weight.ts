import type { Test } from '@lvce-editor/test-with-playwright'

export const test: Test = async ({ expect, ExtensionSearch, Locator }) => {
  // arrange
  await ExtensionSearch.open()

  // act
  await ExtensionSearch.handleInput('@bti', 1, 4)

  // assert
  const highlight = Locator('.ExtensionSearchCompletionHighlight').first()
  await expect(highlight).toHaveCSS('font-weight', '700')
}
