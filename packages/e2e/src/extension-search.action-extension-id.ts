import type { Test } from '@lvce-editor/test-with-playwright'

export const skip = 0

export const test: Test = async ({ Command, expect, ExtensionSearch, Locator }) => {
  const extensionId = 'builtin.theme-atom-one-dark'
  await ExtensionSearch.open()
  await ExtensionSearch.handleInput(`@id:${extensionId}`)
  try {
    await Command.execute('Extensions.setExtensionStatus', extensionId, 'enabled', false)
    const buttons = Locator('.ExtensionActionButton')
    const uninstallButton = buttons.nth(1)
    await expect(buttons).toHaveCount(2)
    await expect(buttons.first()).toHaveAttribute('name', extensionId)
    await expect(uninstallButton).toHaveAttribute('name', extensionId)
  } finally {
    await Command.execute('Extensions.setExtensionStatus', extensionId, 'enabled', true)
  }
}
