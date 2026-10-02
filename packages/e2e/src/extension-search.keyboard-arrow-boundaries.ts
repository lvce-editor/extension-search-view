import type { Test } from '@lvce-editor/test-with-playwright'

export const test: Test = async ({ Command, ComponentState, expect, ExtensionSearch, KeyBoard, Locator }) => {
  // arrange
  await ExtensionSearch.open()
  const components = await ComponentState.getComponents()
  const extensions = components.find(({ moduleId }) => moduleId === 'Extensions')
  if (!extensions) {
    throw new Error('Extensions component not found')
  }
  await Command.execute('Viewlet.focusSelector', extensions.uid, '.MultilineInputBox')
  await ExtensionSearch.handleInput('@category:"themes"')
  await ExtensionSearch.focusLast()
  await Command.execute('Viewlet.focusSelector', extensions.uid, '.ListItems')
  const listItems = Locator('.ListItems')
  await expect(listItems).toBeFocused()

  // act
  await KeyBoard.press('ArrowDown')

  // assert
  const activeItem = Locator('.ExtensionActive')
  await expect(activeItem).toHaveAttribute('aria-posinset', '1')
  await expect(activeItem.locator('.ExtensionListItemName')).toHaveText('Ayu Theme')

  // act
  await KeyBoard.press('ArrowUp')

  // assert
  await expect(activeItem).toHaveAttribute('aria-posinset', '1')
  await expect(activeItem.locator('.ExtensionListItemName')).toHaveText('Ayu Theme')
}
