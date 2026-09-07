import type { Test } from '@lvce-editor/test-with-playwright'

export const test: Test = async ({ expect, ExtensionSearch, Locator }) => {
  await ExtensionSearch.open()
  const message = Locator('.NoExtensionsFoundMessage')
  const names = Locator('.ExtensionListItemName')
  await ExtensionSearch.handleInput('atom')
  await expect(names).toHaveText('Atom One Dark Theme')
  await ExtensionSearch.handleInput('@id:missing.extension')
  await expect(names).toHaveCount(0)
  await expect(message).toBeVisible()
  await ExtensionSearch.handleInput('@category:"themes"')
  await expect(message).toHaveCount(0)
  await expect(names).toHaveCount(2)
  await ExtensionSearch.handleInput('@category:"missing"')
  await expect(names).toHaveCount(0)
  await expect(message).toBeVisible()
  await ExtensionSearch.handleInput('atom')
  await expect(message).toHaveCount(0)
  await expect(names).toHaveText('Atom One Dark Theme')
}
