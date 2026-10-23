import type { Test } from '@lvce-editor/test-with-playwright'

export const test: Test = async ({ expect, ExtensionSearch, Locator }) => {
  // arrange
  await ExtensionSearch.open()

  // act
  await ExtensionSearch.handleInput('@category:', 1, 10)

  // assert
  const item = Locator('.ExtensionSearchCompletionItem').nth(18)
  await expect(item).toHaveAttribute('name', '@category:"themes"')
}
