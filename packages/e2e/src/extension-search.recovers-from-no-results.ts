import type { Test } from '@lvce-editor/test-with-playwright'

export const test: Test = async ({ expect, ExtensionSearch, Locator }) => {
  // arrange
  await ExtensionSearch.open()

  // act
  await ExtensionSearch.handleInput('extension-that-does-not-exist')

  // assert
  const message = Locator('.NoExtensionsFoundMessage')
  const items = Locator('.ExtensionListItem')
  await expect(message).toBeVisible()

  // act
  await ExtensionSearch.handleInput('atom')

  // assert
  await expect(message).toHaveCount(0)
  await expect(items).toHaveCount(1)
}
