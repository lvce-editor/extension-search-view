import type { Test } from '@lvce-editor/test-with-playwright'

export const test: Test = async ({ expect, ExtensionSearch, Locator }) => {
  const extensionId = 'builtin.theme-atom-one-dark'
  await ExtensionSearch.open()
  await ExtensionSearch.handleInput(`@id:${extensionId}`)
  await ExtensionSearch.setExtensionStatus(extensionId, 'enabled', true)
  await expect(Locator('.ExtensionActionButton')).toHaveText('Disable')

  await ExtensionSearch.setExtensionStatus('missing.extension', 'installing', false)
  await expect(Locator('.ExtensionListItemName')).toHaveText('Atom One Dark Theme')
  await expect(Locator('.ExtensionActionButton')).toHaveCount(1)
  await expect(Locator('.ExtensionActionButton')).toHaveText('Disable')
  await expect(Locator('.ExtensionActionButton')).toHaveAttribute('disabled', null)
  await expect(Locator('.ExtensionListItemDisabled')).toHaveCount(0)
}
