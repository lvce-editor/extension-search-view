import type { Test } from '@lvce-editor/test-with-playwright'

export const test: Test = async ({ expect, ExtensionSearch, Locator }) => {
  const extensionId = 'builtin.theme-atom-one-dark'
  await ExtensionSearch.open()
  await ExtensionSearch.handleInput(`@id:${extensionId}`)
  await ExtensionSearch.setExtensionStatus(extensionId, 'enabled', true)
  const action = Locator('.ExtensionActionButton')
  await expect(action).toHaveText('Disable')

  await ExtensionSearch.setExtensionStatus('missing.extension', 'installing', false)
  const name = Locator('.ExtensionListItemName')
  await expect(name).toHaveText('Atom One Dark Theme')
  await expect(action).toHaveCount(1)
  await expect(action).toHaveText('Disable')
  await expect(action).toHaveAttribute('disabled', null)
  const disabledItems = Locator('.ExtensionListItemDisabled')
  await expect(disabledItems).toHaveCount(0)
}
