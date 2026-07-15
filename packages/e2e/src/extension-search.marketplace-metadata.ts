import type { Test } from '@lvce-editor/test-with-playwright'

export const skip = 0

export const test: Test = async ({ expect, Extension, ExtensionSearch, Locator }) => {
  // arrange
  const extensionUri = import.meta.resolve('../fixtures/extension-marketplace-metadata')
  await Extension.addWebExtension(extensionUri)
  await ExtensionSearch.open()

  // act
  await ExtensionSearch.handleInput('@id:test.extension-marketplace-metadata')

  // assert
  const listItem = Locator('.ExtensionListItem')
  await expect(listItem).toBeVisible()
  const downloadCount = listItem.locator('.ExtensionListItemDownloadCount')
  await expect(downloadCount).toHaveText('12,345')
  const rating = listItem.locator('.ExtensionListItemRating')
  await expect(rating).toHaveText('4.8')
}
