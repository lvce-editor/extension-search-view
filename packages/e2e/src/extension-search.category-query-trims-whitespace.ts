import type { Test } from '@lvce-editor/test-with-playwright'

export const test: Test = async ({ expect, ExtensionSearch, Locator }) => {
  await ExtensionSearch.open()
  await ExtensionSearch.handleInput('  @category:"themes"  ')
  const items = Locator('.ExtensionListItem')
  await expect(items).toHaveCount(2)
  const firstItemName = items.first().locator('.ExtensionListItemName')
  await expect(firstItemName).toHaveText('Ayu Theme')
}
