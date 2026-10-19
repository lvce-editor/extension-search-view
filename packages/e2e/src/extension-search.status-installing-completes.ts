import type { Test } from '@lvce-editor/test-with-playwright'

export const test: Test = async ({ expect, ExtensionSearch, Locator }) => {
  // arrange
  const extensionId = 'builtin.theme-atom-one-dark'
  await ExtensionSearch.open()
  await ExtensionSearch.handleInput(`@id:${extensionId}`)

  // act
  await ExtensionSearch.setExtensionStatus(extensionId, 'installing', false)

  // assert
  const buttons = Locator('.ExtensionListItem .ExtensionActionButton')
  await expect(buttons).toHaveCount(1)
  await expect(buttons.first()).toHaveText('Installing')
  await expect(buttons.first()).toHaveAttribute('disabled', '')

  // act
  await ExtensionSearch.setExtensionStatus(extensionId, 'enabled', false)

  // assert
  const manageButton = Locator('.ExtensionListItemActionManage')
  await expect(manageButton).toHaveCount(1)
  const name = Locator('.ExtensionListItemName')
  await expect(name).toHaveText('Atom One Dark Theme')
}
