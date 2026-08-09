import type { Test } from '@lvce-editor/test-with-playwright'

export const test: Test = async ({ expect, ExtensionSearch, Locator }) => {
  await ExtensionSearch.open()
  await ExtensionSearch.handleInput('atom one dark theme')
  const items = Locator('.ExtensionListItem')
  await expect(items).toHaveCount(1)
  await expect(items.locator('.ExtensionListItemName')).toHaveText('Atom One Dark Theme')
}
