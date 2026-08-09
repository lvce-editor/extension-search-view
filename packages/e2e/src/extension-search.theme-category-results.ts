import type { Test } from '@lvce-editor/test-with-playwright'

export const test: Test = async ({ expect, ExtensionSearch, Locator }) => {
  await ExtensionSearch.open()
  await ExtensionSearch.handleInput('@category:"themes"')
  const items = Locator('.ExtensionListItem')
  const firstItem = items.first()
  const secondItem = items.nth(1)
  await expect(items).toHaveCount(2)
  await expect(firstItem.locator('.ExtensionListItemName')).toHaveText('Ayu Theme')
  await expect(secondItem.locator('.ExtensionListItemName')).toHaveText('Cobalt 2 Theme')
}
