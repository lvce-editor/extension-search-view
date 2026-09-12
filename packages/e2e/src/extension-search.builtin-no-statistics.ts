import type { Test } from '@lvce-editor/test-with-playwright'

export const test: Test = async ({ expect, ExtensionSearch, Locator }) => {
  await ExtensionSearch.open()

  const extensionItem = Locator('.ExtensionListItem').first()
  const authorName = extensionItem.locator('.ExtensionListItemAuthorName')
  await expect(authorName).toHaveText('builtin')
  const metadata = extensionItem.locator('.ExtensionListItemMetadata')
  await expect(metadata).toHaveCount(0)
  const downloadCount = extensionItem.locator('.ExtensionListItemDownloadCount')
  await expect(downloadCount).toHaveCount(0)
  const rating = extensionItem.locator('.ExtensionListItemRating')
  await expect(rating).toHaveCount(0)
}
