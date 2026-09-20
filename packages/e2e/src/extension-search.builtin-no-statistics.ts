import type { Test } from '@lvce-editor/test-with-playwright'

export const test: Test = async ({ expect, ExtensionSearch, Locator }) => {
  // act
  await ExtensionSearch.open()

  // assert
  const extensionItem = Locator('.ExtensionListItem').first()
  await expect(extensionItem.locator('.ExtensionListItemAuthorName')).toHaveText('builtin')
  await expect(extensionItem.locator('.ExtensionListItemMetadata')).toHaveCount(0)
  await expect(extensionItem.locator('.ExtensionListItemDownloadCount')).toHaveCount(0)
  await expect(extensionItem.locator('.ExtensionListItemRating')).toHaveCount(0)
}
