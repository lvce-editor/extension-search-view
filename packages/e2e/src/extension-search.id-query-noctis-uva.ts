import type { Test } from '@lvce-editor/test-with-playwright'

export const skip = 0

export const test: Test = async ({ expect, ExtensionSearch, Locator }) => {
  await ExtensionSearch.open()
  await ExtensionSearch.handleInput('@id:builtin.theme-noctis-uva')
  const items = Locator('.ExtensionListItem')
  await expect(items).toHaveCount(1)
  await expect(items.locator('.ExtensionListItemName')).toHaveText('Noctis Uva Theme')
}
