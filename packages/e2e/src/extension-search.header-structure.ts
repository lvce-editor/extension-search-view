import type { Test } from '@lvce-editor/test-with-playwright'

export const test: Test = async ({ expect, ExtensionSearch, Locator }) => {
  await ExtensionSearch.open()
  const header = Locator('.Extensions .ExtensionHeader')
  await expect(header).toHaveCount(1)
  const searchField = header.locator('.SearchField')
  await expect(searchField).toHaveCount(1)
}
