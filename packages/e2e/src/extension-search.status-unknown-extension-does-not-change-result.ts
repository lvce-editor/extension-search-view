import type { Test } from '@lvce-editor/test-with-playwright'

export const test: Test = async ({ expect, ExtensionSearch, Locator }) => {
  // arrange
  const extensionId = 'builtin.theme-atom-one-dark'
  await ExtensionSearch.open()
  await ExtensionSearch.handleInput(`@id:${extensionId}`)

  // act
  await ExtensionSearch.setExtensionStatus(extensionId, 'enabled', true)

  // assert
  const action = Locator('.ExtensionActionButton')
  await expect(action).toHaveText('Disable')

  // act
  await ExtensionSearch.setExtensionStatus('missing.extension', 'installing', false)

  // assert
  const name = Locator('.ExtensionListItemName')
  await expect(name).toHaveText('Atom One Dark Theme')
  await expect(action).toHaveCount(1)
  await expect(action).toHaveText('Disable')
  await expect(action).toHaveAttribute('disabled', null)
  const disabledItems = Locator('.ExtensionListItemDisabled')
  await expect(disabledItems).toHaveCount(0)
}
