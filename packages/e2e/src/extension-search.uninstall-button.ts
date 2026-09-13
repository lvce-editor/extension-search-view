import type { Test } from '@lvce-editor/test-with-playwright'

export const skip = 1

export const test: Test = async ({ expect, Extension, ExtensionDetail, ExtensionSearch, Locator }) => {
  // arrange
  const extensionId = 'test.commands-test'
  const extensionUri = import.meta.resolve('../fixtures/extension-commands')
  await Extension.addWebExtension(extensionUri)
  await ExtensionSearch.open()

  // act
  await ExtensionSearch.handleInput(`@id:${extensionId}`)

  // assert
  const buttons = Locator('.ExtensionListItem .ExtensionActionButton')
  await expect(buttons).toHaveCount(2)
  const uninstallButton = buttons.nth(1)
  await expect(uninstallButton).toHaveText('Uninstall')

  // act
  await ExtensionSearch.handleUninstall(extensionId)

  // assert
  await expect(buttons).toHaveCount(1)
  await expect(buttons.first()).toHaveText('Install')

  // act
  await ExtensionDetail.open(extensionId)

  // assert
  const errorTitle = Locator('.ExtensionDetailErrorTitle')
  const errorMessage = Locator('.ExtensionDetailErrorMessage')
  await expect(errorTitle).toHaveText('Unable to load extension')
  await expect(errorMessage).toHaveText(`The extension "${extensionId}" is not available in this version of LVCE Editor.`)
}
