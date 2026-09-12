import type { Test } from '@lvce-editor/test-with-playwright'

export const test: Test = async ({ expect, ExtensionSearch, Locator }) => {
  // arrange
  await ExtensionSearch.open()
  await ExtensionSearch.handleInput('@', 1, 1)

  // act
  for (let i = 0; i < 15; i++) {
    await ExtensionSearch.selectNextCompletion()
  }

  // assert
  const firstItem = Locator('.ExtensionSearchCompletionItem').first()
  await expect(firstItem).toHaveClass('ExtensionSearchCompletionItemFocused')
}
