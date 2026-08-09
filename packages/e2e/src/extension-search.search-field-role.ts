import type { Test } from '@lvce-editor/test-with-playwright'

export const test: Test = async ({ expect, ExtensionSearch, Locator }) => {
  await ExtensionSearch.open()
  const searchField = Locator('.Extensions .SearchField')
  await expect(searchField).toHaveAttribute('role', 'none')
}
