import type { Test } from '@lvce-editor/test-with-playwright'

export const skip = 0

export const test: Test = async ({ expect, ExtensionSearch, Locator }) => {
  await ExtensionSearch.open()
  await ExtensionSearch.handleInput('@category:"missing"')
  const items = Locator('.ExtensionListItem')
  const message = Locator('.NoExtensionsFoundMessage')
  await expect(items).toHaveCount(0)
  await expect(message).toHaveText('No extensions found.')
}
