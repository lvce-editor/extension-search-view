import type { Test } from '@lvce-editor/test-with-playwright'

export const test: Test = async ({ expect, ExtensionSearch, Locator }) => {
  // arrange
  await ExtensionSearch.open()

  // act
  await ExtensionSearch.handleInput('@id:missing.extension')

  // assert
  const items = Locator('.ExtensionListItem')
  const message = Locator('.NoExtensionsFoundMessage')
  await expect(items).toHaveCount(0)
  await expect(message).toHaveText('No extensions found.')
}
