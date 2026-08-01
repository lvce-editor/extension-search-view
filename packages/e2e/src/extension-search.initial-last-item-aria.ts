import type { Test } from '@lvce-editor/test-with-playwright'

export const skip = 0

export const test: Test = async ({ expect, ExtensionSearch, Locator }) => {
  await ExtensionSearch.open()
  await ExtensionSearch.clearSearchResults()
  const lastItem = Locator('.ExtensionListItem').nth(9)
  await expect(lastItem).toHaveAttribute('aria-posinset', '10')
  await expect(lastItem).toHaveAttribute('aria-setsize', '10')
}
