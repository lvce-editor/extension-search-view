import type { Test } from '@lvce-editor/test-with-playwright'

export const test: Test = async ({ expect, ExtensionSearch, Locator }) => {
  // arrange
  await ExtensionSearch.open()

  // act
  await ExtensionSearch.handleInput('@category:"themes"')

  // assert
  const lastItem = Locator('.ExtensionListItem').nth(1)
  await expect(lastItem).toHaveAttribute('aria-posinset', '2')
  await expect(lastItem).toHaveAttribute('aria-setsize', '2')
}
