import type { Test } from '@lvce-editor/test-with-playwright'

export const test: Test = async ({ expect, ExtensionSearch, Locator }) => {
  await ExtensionSearch.open()
  await ExtensionSearch.handleInput('noctis')
  const items = Locator('.ExtensionListItem')
  await expect(items).toHaveCount(1)
  const itemName = items.locator('.ExtensionListItemName')
  await expect(itemName).toHaveText('Noctis Uva Theme')
}
