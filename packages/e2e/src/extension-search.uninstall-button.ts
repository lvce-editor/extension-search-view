import type { Test } from '@lvce-editor/test-with-playwright'

export const test: Test = async ({ ContextMenu, expect, Extension, ExtensionDetail, ExtensionSearch, Locator }) => {
  // arrange
  const extensionId = 'test.commands-test'
  const extensionUri = import.meta.resolve('../fixtures/extension-commands')
  await Extension.addWebExtension(extensionUri)
  await ExtensionSearch.open()

  // act
  await ExtensionSearch.handleInput(`@id:${extensionId}`)

  // assert
  const buttons = Locator('.ExtensionListItemActionManage')
  await expect(buttons).toHaveCount(1)

  // act
  await ExtensionSearch.handleSettingsButtonClick(0)
  const uninstallMenuItem = Locator('.MenuItem', { hasText: 'Uninstall' })
  await expect(uninstallMenuItem).toBeVisible()
  await ContextMenu.selectItem('Uninstall')

  // assert
  const installButton = Locator('.ExtensionActionButton')
  await expect(installButton).toHaveCount(1)
  await expect(installButton).toHaveText('Install')

  // act
  await ExtensionDetail.open(extensionId)

  // assert
  const errorTitle = Locator('.ExtensionDetailErrorTitle')
  const errorMessage = Locator('.ExtensionDetailErrorMessage')
  await expect(errorTitle).toHaveText('Unable to load extension')
  await expect(errorMessage).toHaveText(`The extension "${extensionId}" is not available in this version of LVCE Editor.`)
}
