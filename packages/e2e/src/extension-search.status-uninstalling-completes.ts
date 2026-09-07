import type { Test } from '@lvce-editor/test-with-playwright'

export const test: Test = async ({ expect, ExtensionSearch, Locator }) => {
  const extensionId = 'builtin.theme-atom-one-dark'
  await ExtensionSearch.open()
  await ExtensionSearch.handleInput(`@id:${extensionId}`)
  await ExtensionSearch.setExtensionStatus(extensionId, 'uninstalling', false)
  const buttons = Locator('.ExtensionListItem .ExtensionActionButton')
  await expect(buttons).toHaveCount(1)
  await expect(buttons.first()).toHaveText('Uninstalling')
  await expect(buttons.first()).toHaveAttribute('disabled', '')

  await ExtensionSearch.setExtensionStatus(extensionId, 'not-installed', false)
  await expect(buttons).toHaveCount(1)
  await expect(buttons.first()).toHaveText('Install')
  await expect(buttons.first()).toHaveAttribute('disabled', null)
  await expect(Locator('.ExtensionListItemName')).toHaveText('Atom One Dark Theme')
}
