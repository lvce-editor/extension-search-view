import type { Test } from '@lvce-editor/test-with-playwright'

export const test: Test = async ({ expect, ExtensionSearch, Locator }) => {
  await ExtensionSearch.open()
  await ExtensionSearch.handleInput('atom')
  const detail = Locator('.ExtensionListItemDetail')
  await expect(detail).toHaveCount(1)
  const itemName = detail.locator('.ExtensionListItemName')
  await expect(itemName).toHaveCount(1)
  const itemDescription = detail.locator('.ExtensionListItemDescription')
  await expect(itemDescription).toHaveCount(1)
  const itemFooter = detail.locator('.ExtensionListItemFooter')
  await expect(itemFooter).toHaveCount(1)
}
