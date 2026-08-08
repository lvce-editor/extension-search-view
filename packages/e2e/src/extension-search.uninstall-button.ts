import type { Test } from '@lvce-editor/test-with-playwright'

export const skip = 1

export const test: Test = async ({ expect, Extension, ExtensionDetail, ExtensionSearch, Locator }) => {
  const extensionId = 'test.commands-test'
  const extensionUri = import.meta.resolve('../fixtures/extension-commands')
  await Extension.addWebExtension(extensionUri)
  await ExtensionSearch.open()
  await ExtensionSearch.handleInput(`@id:${extensionId}`)

  const buttons = Locator('.ExtensionListItem .ExtensionActionButton')
  await expect(buttons).toHaveCount(2)
  const uninstallButton = buttons.nth(1)
  await expect(uninstallButton).toHaveText('Uninstall')

  await ExtensionSearch.handleUninstall(extensionId)

  await expect(buttons).toHaveCount(1)
  await expect(buttons.first()).toHaveText('Install')

  await ExtensionDetail.open(extensionId)
  const errorTitle = Locator('.ExtensionDetailErrorTitle')
  const errorMessage = Locator('.ExtensionDetailErrorMessage')
  await expect(errorTitle).toHaveText('Unable to load extension')
  await expect(errorMessage).toHaveText(`The extension "${extensionId}" is not available in this version of LVCE Editor.`)
}
