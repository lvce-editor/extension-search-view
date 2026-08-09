import type { Test } from '@lvce-editor/test-with-playwright'

export const test: Test = async ({ expect, ExtensionSearch, Locator }) => {
  await ExtensionSearch.open()
  await ExtensionSearch.handleInput('@category:"themes"')
  await ExtensionSearch.focusFirst()
  const activeItem = Locator('.ExtensionListItem#ExtensionActive')
  await expect(activeItem.locator('.ExtensionListItemName')).toHaveText('Ayu Theme')
  await ExtensionSearch.focusNext()
  await expect(activeItem.locator('.ExtensionListItemName')).toHaveText('Cobalt 2 Theme')
}
