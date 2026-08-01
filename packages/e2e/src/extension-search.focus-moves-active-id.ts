import type { Test } from '@lvce-editor/test-with-playwright'

export const skip = 0

export const test: Test = async ({ Command, expect, ExtensionSearch, Locator }) => {
  await ExtensionSearch.open()
  await ExtensionSearch.handleInput('@category:"themes"')
  await Command.execute('Extensions.focusFirst')
  const activeItem = Locator('.ExtensionListItem#ExtensionActive')
  await expect(activeItem.locator('.ExtensionListItemName')).toHaveText('Ayu Theme')
  await Command.execute('Extensions.focusNext')
  await expect(activeItem.locator('.ExtensionListItemName')).toHaveText('Cobalt 2 Theme')
}
