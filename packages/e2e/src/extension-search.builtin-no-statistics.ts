import type { Test } from '@lvce-editor/test-with-playwright'

export const skip = 0

export const test: Test = async ({ expect, ExtensionSearch, Locator }) => {
  await ExtensionSearch.open()

  const extensionItem = Locator('.ExtensionListItem').first()
  await expect(extensionItem.locator('.ExtensionListItemAuthorName')).toHaveText('builtin')
  await expect(extensionItem.locator('.ExtensionListItemMetadata')).toHaveCount(0)
  await expect(extensionItem.locator('.ExtensionListItemDownloadCount')).toHaveCount(0)
  await expect(extensionItem.locator('.ExtensionListItemRating')).toHaveCount(0)
}
