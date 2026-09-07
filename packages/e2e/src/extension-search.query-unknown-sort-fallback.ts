import type { Test } from '@lvce-editor/test-with-playwright'

export const test: Test = async ({ expect, ExtensionSearch, Locator }) => {
  await ExtensionSearch.open()
  await ExtensionSearch.handleInput('@sort:unknown')
  const names = Locator('.ExtensionListItemName')
  await expect(names).toHaveCount(10)
  await expect(names.first()).toHaveText('Atom One Dark Theme')
  await expect(names.nth(1)).toHaveText('Ayu Theme')
  await expect(Locator('.NoExtensionsFoundMessage')).toHaveCount(0)

  await ExtensionSearch.handleInput('atom')
  await expect(names).toHaveText('Atom One Dark Theme')
}
