import type { Test } from '@lvce-editor/test-with-playwright'

export const skip = 0

export const test: Test = async ({ expect, ExtensionSearch, Locator }) => {
  await ExtensionSearch.open()
  await ExtensionSearch.handleInput('  @category:"themes"  ')
  const items = Locator('.ExtensionListItem')
  await expect(items).toHaveCount(2)
  await expect(items.first().locator('.ExtensionListItemName')).toHaveText('Ayu Theme')
}
