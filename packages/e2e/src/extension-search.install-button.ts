import type { Test } from '@lvce-editor/test-with-playwright'

export const test: Test = async ({ expect, ExtensionSearch, Locator }) => {
  // arrange
  const extensionId = 'builtin.theme-atom-one-dark'
  await ExtensionSearch.open()
  await ExtensionSearch.clearSearchResults()
  const query = `@id:${extensionId}`

  // act
  await ExtensionSearch.handleInput(query)

  // assert
  const extensionItems = Locator('.ExtensionListItem')
  await expect(extensionItems).toHaveCount(1)

  // act
  await ExtensionSearch.setExtensionStatus(extensionId, 'not-installed', false)

  // assert
  const buttons = Locator('.ExtensionListItem .ExtensionActionButton')
  await expect(buttons).toHaveCount(1)
  await expect(buttons.first()).toHaveText('Install')
}
