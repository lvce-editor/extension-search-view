import type { Test } from '@lvce-editor/test-with-playwright'

export const test: Test = async ({ expect, ExtensionSearch, Locator }) => {
  await ExtensionSearch.open()
  await ExtensionSearch.setExtensionStatus('builtin.theme-atom-one-dark', 'disabled')
  await ExtensionSearch.handleInput('@enabled@disabled')
  await expect(Locator('.ExtensionListItem')).toHaveCount(0)
  await expect(Locator('.NoExtensionsFoundMessage')).toHaveText('No extensions found.')

  await ExtensionSearch.handleInput('@disabled')
  await expect(Locator('.NoExtensionsFoundMessage')).toHaveCount(0)
  await expect(Locator('.ExtensionActionButton[name="builtin.theme-atom-one-dark"]').first()).toHaveText('Enable')
}
