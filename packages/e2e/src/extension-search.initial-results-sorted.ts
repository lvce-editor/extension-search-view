import type { Test } from '@lvce-editor/test-with-playwright'

export const test: Test = async ({ expect, ExtensionSearch, Locator }) => {
  await ExtensionSearch.open()
  await ExtensionSearch.clearSearchResults()
  const names = Locator('.ExtensionListItemName')
  const secondName = names.nth(1)
  await expect(names.first()).toHaveText('Atom One Dark Theme')
  await expect(secondName).toHaveText('Ayu Theme')
}
