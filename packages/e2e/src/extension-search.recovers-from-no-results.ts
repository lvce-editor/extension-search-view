import type { Test } from '@lvce-editor/test-with-playwright'

export const skip = 0

export const test: Test = async ({ expect, ExtensionSearch, Locator }) => {
  await ExtensionSearch.open()
  await ExtensionSearch.handleInput('extension-that-does-not-exist')
  const message = Locator('.NoExtensionsFoundMessage')
  const items = Locator('.ExtensionListItem')
  await expect(message).toBeVisible()

  await ExtensionSearch.handleInput('atom')
  await expect(message).toHaveCount(0)
  await expect(items).toHaveCount(1)
}
