import type { Test } from '@lvce-editor/test-with-playwright'

export const test: Test = async ({ expect, ExtensionSearch, Locator }) => {
  // arrange
  const extensionId = 'builtin.theme-atom-one-dark'
  await ExtensionSearch.open()

  // act
  await ExtensionSearch.handleInput('ayu')

  // assert
  const name = Locator('.ExtensionListItemName')
  await expect(name).toHaveText('Ayu Theme')

  // act
  await ExtensionSearch.setExtensionStatus(extensionId, 'disabled', true)

  // assert
  await expect(name).toHaveText('Ayu Theme')
  const disabledItems = Locator('.ExtensionListItemDisabled')
  await expect(disabledItems).toHaveCount(0)

  // act
  await ExtensionSearch.handleInput(`@id:${extensionId}`)

  // assert
  await expect(name).toHaveText('Atom One Dark Theme')
  await expect(disabledItems).toHaveCount(1)
  const action = Locator('.ExtensionActionButton')
  await expect(action).toHaveText('Enable')
}
