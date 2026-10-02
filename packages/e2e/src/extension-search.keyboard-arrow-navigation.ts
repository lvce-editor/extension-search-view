import type { Test } from '@lvce-editor/test-with-playwright'

export const test: Test = async ({ Command, ComponentState, expect, ExtensionSearch, KeyBoard, Locator }) => {
  // arrange
  await ExtensionSearch.open()
  const components = await ComponentState.getComponents()
  const extensionSearch = components.find(({ moduleId }) => moduleId === 'Extensions')
  if (!extensionSearch) {
    throw new Error('Extensions component not found')
  }
  await Command.execute('Viewlet.focusSelector', extensionSearch.uid, '.MultilineInputBox')
  await ExtensionSearch.handleInput('@category:"themes"')
  await ExtensionSearch.focusFirst()
  await Command.execute('Viewlet.focusSelector', extensionSearch.uid, '.ListItems')
  const listItems = Locator('.ListItems')
  await expect(listItems).toBeFocused()

  // act
  await KeyBoard.press('ArrowDown')

  // assert
  const activeItem = Locator('.ExtensionActive')
  await expect(activeItem).toHaveAttribute('aria-posinset', '2')
  await expect(activeItem.locator('.ExtensionListItemName')).toHaveText('Cobalt 2 Theme')
}
