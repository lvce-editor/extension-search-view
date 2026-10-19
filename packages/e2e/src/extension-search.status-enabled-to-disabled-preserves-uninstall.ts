import type { Test } from '@lvce-editor/test-with-playwright'

export const test: Test = async ({ expect, ExtensionSearch, Locator }) => {
  // arrange
  const extensionId = 'builtin.theme-atom-one-dark'
  await ExtensionSearch.open()
  await ExtensionSearch.handleInput(`@id:${extensionId}`)

  // act
  await ExtensionSearch.setExtensionStatus(extensionId, 'enabled', false)

  // assert
  const buttons = Locator('.ExtensionListItem .ExtensionListItemActionManage')
  await expect(buttons).toHaveCount(1)
  const disabledItems = Locator('.ExtensionListItemDisabled')
  await expect(disabledItems).toHaveCount(0)

  // act
  await ExtensionSearch.setExtensionStatus(extensionId, 'disabled', false)

  // assert
  await expect(disabledItems).toHaveCount(1)
  await expect(buttons).toHaveCount(1)
}
