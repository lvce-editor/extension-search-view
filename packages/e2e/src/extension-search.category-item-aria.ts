import type { Test } from '@lvce-editor/test-with-playwright'

export const test: Test = async ({ expect, ExtensionSearch, Locator }) => {
  // arrange
  await ExtensionSearch.open()

  // act
  await ExtensionSearch.handleInput('@category:"themes"')

  // assert
  const items = Locator('.ExtensionListItem')
  const firstItem = items.first()
  const secondItem = items.nth(1)
  await expect(firstItem).toHaveAttribute('aria-posinset', '1')
  await expect(firstItem).toHaveAttribute('aria-setsize', '2')
  await expect(secondItem).toHaveAttribute('aria-posinset', '2')
  await expect(secondItem).toHaveAttribute('aria-setsize', '2')
}
