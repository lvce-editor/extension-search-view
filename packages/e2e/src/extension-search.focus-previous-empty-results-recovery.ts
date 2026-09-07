import type { Test } from '@lvce-editor/test-with-playwright'

export const test: Test = async ({ expect, ExtensionSearch, Locator }) => {
  await ExtensionSearch.open()
  await ExtensionSearch.handleInput('@id:missing.extension')
  await expect(Locator('.NoExtensionsFoundMessage')).toBeVisible()
  await ExtensionSearch.focusPrevious()
  await expect(Locator('.ExtensionActive')).toHaveCount(0)
  await expect(Locator('.NoExtensionsFoundMessage')).toHaveText('No extensions found.')

  await ExtensionSearch.handleInput('atom')
  await ExtensionSearch.focusFirst()
  await expect(Locator('.NoExtensionsFoundMessage')).toHaveCount(0)
  await expect(Locator('.ExtensionActive .ExtensionListItemName')).toHaveText('Atom One Dark Theme')
}
