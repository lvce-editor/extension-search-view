import type { Test } from '@lvce-editor/test-with-playwright'

export const test: Test = async ({ expect, ExtensionSearch, Locator }) => {
  // arrange
  const extensionId = 'builtin.theme-atom-one-dark'
  await ExtensionSearch.open()
  await ExtensionSearch.handleInput(`@id:${extensionId}`)

  // act
  await ExtensionSearch.setExtensionStatus(extensionId, 'disabled', true)

  // assert
  const disabledItems = Locator('.ExtensionListItemDisabled')
  await expect(disabledItems).toHaveCount(1)
  const action = Locator('.ExtensionActionButton')
  await expect(action).toHaveText('Enable')

  // act
  await ExtensionSearch.setExtensionStatus(extensionId, 'enabled', true)

  // assert
  await expect(disabledItems).toHaveCount(0)
  await expect(action).toHaveCount(1)
  await expect(action).toHaveText('Disable')
}
