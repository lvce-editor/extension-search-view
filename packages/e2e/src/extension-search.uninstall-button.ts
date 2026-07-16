import type { Test } from '@lvce-editor/test-with-playwright'

export const skip = 0

export const test: Test = async ({ Command, expect, ExtensionSearch, Locator }) => {
  const extensionId = 'builtin.theme-atom-one-dark'
  await ExtensionSearch.open()
  await ExtensionSearch.handleInput(`@id:${extensionId}`)

  await Command.execute('Extensions.setExtensionStatus', extensionId, 'enabled', false)

  const buttons = Locator('.ExtensionListItem .ExtensionActionButton')
  await expect(buttons).toHaveCount(2)
  const uninstallButton = buttons.nth(1)
  await expect(uninstallButton).toHaveText('Uninstall')
}
