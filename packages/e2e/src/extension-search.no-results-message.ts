import type { Test } from '@lvce-editor/test-with-playwright'

export const test: Test = async ({ expect, ExtensionSearch, Locator }) => {
  // arrange
  await ExtensionSearch.open()

  // act
  await ExtensionSearch.handleInput('extension-that-does-not-exist')

  // assert
  const message = Locator('.NoExtensionsFoundMessage')
  await expect(message).toHaveCount(1)
  await expect(message).toHaveText('No extensions found.')
}
