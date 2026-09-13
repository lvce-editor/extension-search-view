import type { Test } from '@lvce-editor/test-with-playwright'

export const test: Test = async ({ expect, ExtensionSearch, Locator }) => {
  // arrange
  const extensionId = 'builtin.theme-atom-one-dark'

  // act
  await ExtensionSearch.open()

  // assert
  const extensionItems = Locator('.ExtensionListItem')
  await expect(extensionItems).toHaveCount(10)
  const query = `@id:${extensionId}`

  // act
  await ExtensionSearch.handleInput(query, 1, query.length)

  // assert
  await expect(extensionItems).toHaveCount(1)

  // act
  await ExtensionSearch.setExtensionStatus(extensionId, 'enabled')

  // assert
  const actionContainers = Locator('.ExtensionListItem .ExtensionActions')
  await expect(actionContainers).toHaveCount(1)
  const buttons = Locator('.ExtensionListItem .ExtensionActionButton')
  await expect(buttons).toHaveCount(1)
  await expect(buttons.first()).toHaveText('Disable')
}
