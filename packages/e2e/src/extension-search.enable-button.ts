import type { Test } from '@lvce-editor/test-with-playwright'

export const test: Test = async ({ expect, ExtensionSearch, Locator }) => {
  // arrange
  const extensionId = 'builtin.theme-atom-one-dark'
  await ExtensionSearch.open()
  await ExtensionSearch.handleInput(`@id:${extensionId}`)

  // act
  await ExtensionSearch.setExtensionStatus(extensionId, 'disabled', false)

  // assert
  const listItem = Locator('.ExtensionListItemDisabled')
  await expect(listItem).toBeVisible()

  const buttons = Locator('.ExtensionListItem .ExtensionActionButton')
  await expect(buttons.first()).toHaveText('Enable')
}
