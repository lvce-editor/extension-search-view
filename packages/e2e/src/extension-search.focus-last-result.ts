import type { Test } from '@lvce-editor/test-with-playwright'

export const test: Test = async ({ expect, ExtensionSearch, Locator }) => {
  // arrange
  await ExtensionSearch.open()
  await ExtensionSearch.handleInput('@category:"themes"')

  // act
  await ExtensionSearch.focusLast()

  // assert
  const activeItem = Locator('.ExtensionActive')
  await expect(activeItem).toHaveAttribute('aria-posinset', '2')
  await expect(activeItem.locator('.ExtensionListItemName')).toHaveText('Cobalt 2 Theme')
}
