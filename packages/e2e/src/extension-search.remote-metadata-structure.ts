import type { Test } from '@lvce-editor/test-with-playwright'

export const test: Test = async ({ expect, ExtensionSearch, Locator }) => {
  // arrange
  const extensionId = 'builtin.theme-atom-one-dark'
  await ExtensionSearch.open()
  await ExtensionSearch.handleInput(`@id:${extensionId}`)

  // act
  await ExtensionSearch.setExtensionStatus(extensionId, 'enabled', false)

  // assert
  const metadata = Locator('.ExtensionListItemMetadata')
  await expect(metadata).toHaveCount(1)
  await expect(metadata.locator('.ExtensionListItemStatistic')).toHaveCount(2)
}
