import type { Test } from '@lvce-editor/test-with-playwright'

export const skip = 0

export const test: Test = async ({ Command, expect, ExtensionSearch, Locator }) => {
  const extensionId = 'builtin.theme-atom-one-dark'
  await ExtensionSearch.open()
  await Command.execute('Extensions.setExtensionStatus', extensionId, 'enabled', false)
  await ExtensionSearch.handleInput(`@id:${extensionId}`)

  const buttons = Locator('.ExtensionListItem .ExtensionActionButton')
  await expect(buttons).toHaveCount(2)
  const uninstallButton = buttons.nth(1)
  await expect(uninstallButton).toHaveText('Uninstall')

  await Command.execute('Extensions.handleUninstall', extensionId)

  const errorMessage = Locator('#DialogBodyErrorMessage')
  await expect(errorMessage).toBeVisible()
  await expect(errorMessage).toContainText(`Failed to uninstall extension "${extensionId}"`)
  await expect(uninstallButton).toHaveText('Uninstall')
}
