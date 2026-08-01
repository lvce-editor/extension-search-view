import type { Test } from '@lvce-editor/test-with-playwright'

export const skip = 0

export const test: Test = async ({ expect, ExtensionSearch, Locator }) => {
  const extensionId = 'builtin.theme-atom-one-dark'
  await ExtensionSearch.open()
  await ExtensionSearch.handleInput(`@id:${extensionId}`)
  await ExtensionSearch.setExtensionStatus(extensionId, 'enabled', false)
  const metadata = Locator('.ExtensionListItemMetadata')
  await expect(metadata).toHaveCount(1)
  await expect(metadata.locator('.ExtensionListItemStatistic')).toHaveCount(2)
}
