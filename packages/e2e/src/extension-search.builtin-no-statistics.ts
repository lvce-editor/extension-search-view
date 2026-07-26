import type { Test } from '@lvce-editor/test-with-playwright'

export const skip = 0

export const test: Test = async ({ expect, ExtensionSearch, Locator }) => {
  await ExtensionSearch.open()
  await ExtensionSearch.handleInput('@id:builtin.theme-atom-one-dark')

  const extensionItem = Locator('.ExtensionListItem')
  await expect(extensionItem).toHaveCount(1)
  await expect(extensionItem.locator('.ExtensionListItemMetadata')).toHaveCount(0)
  await expect(extensionItem.locator('.ExtensionListItemDownloadCount')).toHaveCount(0)
  await expect(extensionItem.locator('.ExtensionListItemRating')).toHaveCount(0)
}
