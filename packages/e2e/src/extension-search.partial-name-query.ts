import type { Test } from '@lvce-editor/test-with-playwright'

export const test: Test = async ({ expect, ExtensionSearch, Locator }) => {
  await ExtensionSearch.open()
  await ExtensionSearch.handleInput('one dark')
  const item = Locator('.ExtensionListItem')
  await expect(item).toHaveCount(1)
  const itemName = item.locator('.ExtensionListItemName')
  await expect(itemName).toHaveText('Atom One Dark Theme')
}
