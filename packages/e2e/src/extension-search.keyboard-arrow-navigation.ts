import type { Test } from '@lvce-editor/test-with-playwright'

export const test: Test = async ({ expect, ExtensionSearch, KeyBoard, Locator }) => {
  // arrange
  await ExtensionSearch.open()
  await ExtensionSearch.handleInput('@category:"themes"')
  await ExtensionSearch.handleClick(-1)
  await ExtensionSearch.focusFirst()
  const listItems = Locator('.ListItems')
  await expect(listItems).toBeFocused()

  // act
  await KeyBoard.press('ArrowDown')

  // assert
  const activeItem = Locator('.ExtensionActive')
  await expect(activeItem).toHaveAttribute('aria-posinset', '2')
  await expect(activeItem.locator('.ExtensionListItemName')).toHaveText('Cobalt 2 Theme')

  // act
  await KeyBoard.press('ArrowDown')

  // assert
  await expect(activeItem).toHaveAttribute('aria-posinset', '1')
  await expect(activeItem.locator('.ExtensionListItemName')).toHaveText('Ayu Theme')

  // act
  await KeyBoard.press('ArrowUp')

  // assert
  await expect(activeItem).toHaveAttribute('aria-posinset', '1')
  await expect(activeItem.locator('.ExtensionListItemName')).toHaveText('Ayu Theme')
}
