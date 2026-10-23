import type { Test } from '@lvce-editor/test-with-playwright'

export const test: Test = async ({ expect, ExtensionSearch, Locator }) => {
  // arrange
  const extensionId = 'builtin.theme-atom-one-dark'
  const action = Locator(`.ExtensionListItemActionManage[aria-label="Extension settings for ${extensionId}"]`)

  await ExtensionSearch.open()
  await ExtensionSearch.setExtensionStatus(extensionId, 'disabled')

  // act
  await ExtensionSearch.handleInput('@disabled')

  // assert
  await expect(action).toHaveCount(1)

  // act
  await ExtensionSearch.handleInput('@enabled')

  // assert
  await expect(action).toHaveCount(0)

  // act
  await ExtensionSearch.setExtensionStatus(extensionId, 'enabled')
  await ExtensionSearch.handleInput('@enabled')

  // assert
  await expect(action).toHaveCount(1)

  // act
  await ExtensionSearch.handleInput('@disabled')

  // assert
  await expect(action).toHaveCount(0)
}
