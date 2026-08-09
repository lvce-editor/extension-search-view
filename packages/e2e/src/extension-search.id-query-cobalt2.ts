import type { Test } from '@lvce-editor/test-with-playwright'

export const test: Test = async ({ expect, ExtensionSearch, Locator }) => {
  await ExtensionSearch.open()
  await ExtensionSearch.handleInput('@id:builtin.theme-cobalt2')
  const items = Locator('.ExtensionListItem')
  await expect(items).toHaveCount(1)
  await expect(items.locator('.ExtensionListItemName')).toHaveText('Cobalt 2 Theme')
}
