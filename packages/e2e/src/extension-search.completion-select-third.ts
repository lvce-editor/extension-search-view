import type { Test } from '@lvce-editor/test-with-playwright'

export const test: Test = async ({ expect, ExtensionSearch, Locator }) => {
  // arrange
  await ExtensionSearch.open()
  await ExtensionSearch.handleInput('@', 1, 1)

  // act
  await ExtensionSearch.selectNextCompletion()
  await ExtensionSearch.selectNextCompletion()

  // assert
  const thirdItem = Locator('.ExtensionSearchCompletionItem').nth(2)
  await expect(thirdItem).toHaveClass('ExtensionSearchCompletionItemFocused')
  await expect(thirdItem).toHaveAttribute('aria-selected', 'true')
}
