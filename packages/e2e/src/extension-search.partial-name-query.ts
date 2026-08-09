import type { Test } from '@lvce-editor/test-with-playwright'

export const test: Test = async ({ expect, ExtensionSearch, Locator }) => {
  await ExtensionSearch.open()
  await ExtensionSearch.handleInput('one dark')
  const item = Locator('.ExtensionListItem')
  await expect(item).toHaveCount(1)
  await expect(item.locator('.ExtensionListItemName')).toHaveText('Atom One Dark Theme')
}
