import type { Test } from '@lvce-editor/test-with-playwright'

export const test: Test = async ({ expect, ExtensionSearch, Locator }) => {
  // arrange
  await ExtensionSearch.open()
  await ExtensionSearch.handleInput('@category:"themes"')
  await ExtensionSearch.focusFirst()

  // act
  await ExtensionSearch.focusPrevious()

  // assert
  const activeItem = Locator('.ExtensionActive')
  await expect(activeItem).toHaveAttribute('aria-posinset', '1')
  await expect(activeItem.locator('.ExtensionListItemName')).toHaveText('Ayu Theme')
}
