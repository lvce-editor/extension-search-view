import type { Test } from '@lvce-editor/test-with-playwright'

export const test: Test = async ({ expect, ExtensionSearch, Locator }) => {
  // arrange
  await ExtensionSearch.open()

  // act
  await ExtensionSearch.handleInput('@', 1, 1)

  // assert
  const secondItem = Locator('.ExtensionSearchCompletionItem').nth(1)
  await expect(secondItem).toHaveAttribute('aria-selected', 'false')
}
