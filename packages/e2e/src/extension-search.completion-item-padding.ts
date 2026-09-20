import type { Test } from '@lvce-editor/test-with-playwright'

export const test: Test = async ({ expect, ExtensionSearch, Locator }) => {
  // arrange
  await ExtensionSearch.open()

  // act
  await ExtensionSearch.handleInput('@', 1, 1)

  // assert
  const item = Locator('.ExtensionSearchCompletionItem').first()
  await expect(item).toHaveCSS('padding-left', '6px')
  await expect(item).toHaveCSS('padding-right', '6px')
}
