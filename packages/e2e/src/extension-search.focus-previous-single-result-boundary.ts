import type { Test } from '@lvce-editor/test-with-playwright'

export const test: Test = async ({ expect, ExtensionSearch, Locator }) => {
  // arrange
  await ExtensionSearch.open()
  await ExtensionSearch.handleInput('atom')

  // act
  await ExtensionSearch.focusFirst()

  // assert
  const activeItem = Locator('.ExtensionActive')
  await expect(activeItem).toHaveAttribute('aria-posinset', '1')

  // act
  await ExtensionSearch.focusPrevious()
  await ExtensionSearch.focusPrevious()

  // assert
  await expect(activeItem).toHaveCount(1)
  await expect(activeItem).toHaveAttribute('aria-posinset', '1')
  await expect(activeItem).toHaveAttribute('aria-setsize', '1')
  const activeName = Locator('.ExtensionActive .ExtensionListItemName')
  await expect(activeName).toHaveText('Atom One Dark Theme')
}
