import type { Test } from '@lvce-editor/test-with-playwright'

export const test: Test = async ({ expect, ExtensionSearch, Locator }) => {
  const extensionId = 'builtin.theme-atom-one-dark'
  await ExtensionSearch.open()
  await ExtensionSearch.handleInput('ayu')
  await expect(Locator('.ExtensionListItemName')).toHaveText('Ayu Theme')
  await ExtensionSearch.setExtensionStatus(extensionId, 'disabled', true)
  await expect(Locator('.ExtensionListItemName')).toHaveText('Ayu Theme')
  await expect(Locator('.ExtensionListItemDisabled')).toHaveCount(0)

  await ExtensionSearch.handleInput(`@id:${extensionId}`)
  await expect(Locator('.ExtensionListItemName')).toHaveText('Atom One Dark Theme')
  await expect(Locator('.ExtensionListItemDisabled')).toHaveCount(1)
  await expect(Locator('.ExtensionActionButton')).toHaveText('Enable')
}
