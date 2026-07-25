import type { Test } from '@lvce-editor/test-with-playwright'

export const skip = 0

export const test: Test = async ({ expect, ExtensionSearch, Locator }) => {
  await ExtensionSearch.open()
  await ExtensionSearch.handleInput('extension-that-does-not-exist')
  const message = Locator('.NoExtensionsFoundMessage')
  await expect(message).toHaveCount(1)
  await expect(message).toHaveText('No extensions found.')
}
