import type { Test } from '@lvce-editor/test-with-playwright'

export const test: Test = async ({ expect, ExtensionSearch, Locator }) => {
  await ExtensionSearch.open()
  await ExtensionSearch.handleInput('@sort:unknown')
  const names = Locator('.ExtensionListItemName')
  await expect(names).toHaveCount(10)
  await expect(names.first()).toHaveText('Atom One Dark Theme')
  const secondName = names.nth(1)
  await expect(secondName).toHaveText('Ayu Theme')
  const message = Locator('.NoExtensionsFoundMessage')
  await expect(message).toHaveCount(0)

  await ExtensionSearch.handleInput('atom')
  await expect(names).toHaveText('Atom One Dark Theme')
}
