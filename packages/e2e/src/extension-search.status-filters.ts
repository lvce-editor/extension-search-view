import type { Test } from '@lvce-editor/test-with-playwright'

export const test: Test = async ({ expect, ExtensionSearch, Locator }) => {
  // arrange
  const extensionId = 'builtin.theme-atom-one-dark'
  const action = Locator(`.ExtensionActionButton[name="${extensionId}"]`)

  await ExtensionSearch.open()
  await ExtensionSearch.setExtensionStatus(extensionId, 'disabled')

  // act
  await ExtensionSearch.handleInput('@disabled')

  // assert
  await expect(action.first()).toHaveText('Enable')

  // act
  await ExtensionSearch.handleInput('@enabled')

  // assert
  await expect(action).toHaveCount(0)

  // act
  await ExtensionSearch.setExtensionStatus(extensionId, 'enabled')
  await ExtensionSearch.handleInput('@enabled')

  // assert
  await expect(action.first()).toHaveText('Disable')

  // act
  await ExtensionSearch.handleInput('@disabled')

  // assert
  await expect(action).toHaveCount(0)
}
