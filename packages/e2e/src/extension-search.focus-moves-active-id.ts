import type { Test } from '@lvce-editor/test-with-playwright'

export const test: Test = async ({ expect, ExtensionSearch, Locator }) => {
  await ExtensionSearch.open()
  await ExtensionSearch.handleInput('@category:"themes"')
  await ExtensionSearch.focusFirst()
  const activeItem = Locator('.ExtensionListItem#ExtensionActive')
  const itemName = activeItem.locator('.ExtensionListItemName')
  await expect(itemName).toHaveText('Ayu Theme')
  await ExtensionSearch.focusNext()
  await expect(itemName).toHaveText('Cobalt 2 Theme')
}
