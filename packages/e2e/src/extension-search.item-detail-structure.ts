import type { Test } from '@lvce-editor/test-with-playwright'

export const skip = 0

export const test: Test = async ({ expect, ExtensionSearch, Locator }) => {
  await ExtensionSearch.open()
  await ExtensionSearch.handleInput('atom')
  const detail = Locator('.ExtensionListItemDetail')
  await expect(detail).toHaveCount(1)
  await expect(detail.locator('.ExtensionListItemName')).toHaveCount(1)
  await expect(detail.locator('.ExtensionListItemDescription')).toHaveCount(1)
  await expect(detail.locator('.ExtensionListItemFooter')).toHaveCount(1)
}
