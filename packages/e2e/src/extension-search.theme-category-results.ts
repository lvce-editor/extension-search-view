import type { Test } from '@lvce-editor/test-with-playwright'

export const test: Test = async ({ expect, ExtensionSearch, Locator }) => {
  await ExtensionSearch.open()
  await ExtensionSearch.handleInput('@category:"themes"')
  const items = Locator('.ExtensionListItem')
  const firstItem = items.first()
  const secondItem = items.nth(1)
  await expect(items).toHaveCount(2)
  const firstItemName = firstItem.locator('.ExtensionListItemName')
  await expect(firstItemName).toHaveText('Ayu Theme')
  const secondItemName = secondItem.locator('.ExtensionListItemName')
  await expect(secondItemName).toHaveText('Cobalt 2 Theme')
}
