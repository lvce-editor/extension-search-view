import type { Test } from '@lvce-editor/test-with-playwright'

export const test: Test = async ({ expect, ExtensionSearch, Locator }) => {
  const extensionId = 'builtin.theme-atom-one-dark'
  await ExtensionSearch.open()
  await ExtensionSearch.handleInput(`@id:${extensionId}`)
  await ExtensionSearch.setExtensionStatus(extensionId, 'disabled', true)
  await expect(Locator('.ExtensionListItemDisabled')).toHaveCount(1)
  await expect(Locator('.ExtensionActionButton')).toHaveText('Enable')

  await ExtensionSearch.setExtensionStatus(extensionId, 'enabled', true)
  await expect(Locator('.ExtensionListItemDisabled')).toHaveCount(0)
  await expect(Locator('.ExtensionActionButton')).toHaveCount(1)
  await expect(Locator('.ExtensionActionButton')).toHaveText('Disable')
}
