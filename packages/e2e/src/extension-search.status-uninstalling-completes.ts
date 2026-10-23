import type { Test } from '@lvce-editor/test-with-playwright'

export const test: Test = async ({ expect, ExtensionSearch, Locator }) => {
  // arrange
  const extensionId = 'builtin.theme-atom-one-dark'
  await ExtensionSearch.open()
  await ExtensionSearch.handleInput(`@id:${extensionId}`)

  // act
  await ExtensionSearch.setExtensionStatus(extensionId, 'uninstalling', false)

  // assert
  const buttons = Locator('.ExtensionListItem .ExtensionActionButton')
  await expect(buttons).toHaveCount(1)
  await expect(buttons.first()).toHaveText('Uninstalling')
  await expect(buttons.first()).toHaveAttribute('disabled', '')

  // act
  await ExtensionSearch.setExtensionStatus(extensionId, 'not-installed', false)

  // assert
  await expect(buttons).toHaveCount(1)
  await expect(buttons.first()).toHaveText('Install')
  await expect(buttons.first()).toHaveAttribute('disabled', null)
  const name = Locator('.ExtensionListItemName')
  await expect(name).toHaveText('Atom One Dark Theme')
}
