import type { Test } from '@lvce-editor/test-with-playwright'

export const test: Test = async ({ expect, ExtensionSearch, Locator }) => {
  await ExtensionSearch.open()
  const filterButton = Locator('.SearchFieldButton').nth(1)
  await expect(filterButton).toHaveAttribute('tabindex', '0')
}
