import type { Test } from '@lvce-editor/test-with-playwright'

export const test: Test = async ({ expect, ExtensionSearch, Locator }) => {
  // arrange
  const extensionId = 'builtin.theme-atom-one-dark'
  await ExtensionSearch.open()
  await ExtensionSearch.handleInput(`@id:${extensionId}`)

  // act
  await ExtensionSearch.setExtensionStatus(extensionId, 'enabled', false)

  // assert
  const rating = Locator('.ExtensionListItemRating')
  await expect(rating).toHaveText('n/a')
  await expect(rating).toHaveAttribute('aria-label', 'Rating: n/a')
  await expect(rating).toHaveAttribute('title', 'Rating: n/a')
}
