import type { Test } from '@lvce-editor/test-with-playwright'

export const test: Test = async ({ expect, ExtensionSearch, Locator }) => {
  // arrange
  const extensionId = 'builtin.theme-atom-one-dark'
  await ExtensionSearch.open()
  await ExtensionSearch.handleInput(`@id:${extensionId}`)

  // act
  await ExtensionSearch.setExtensionStatus(extensionId, 'enabled', false)

  // assert
  const buttons = Locator('.ExtensionListItem .ExtensionActionButton')
  await expect(buttons).toHaveCount(2)
  await expect(buttons.first()).toHaveText('Disable')
  const disabledItems = Locator('.ExtensionListItemDisabled')
  await expect(disabledItems).toHaveCount(0)

  // act
  await ExtensionSearch.setExtensionStatus(extensionId, 'disabled', false)

  // assert
  await expect(disabledItems).toHaveCount(1)
  await expect(buttons).toHaveCount(2)
  await expect(buttons.first()).toHaveText('Enable')
  const uninstallButton = buttons.nth(1)
  await expect(uninstallButton).toHaveText('Uninstall')
  await expect(buttons.first()).toHaveAttribute('disabled', null)
}
