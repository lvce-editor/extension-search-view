import type { Test } from '@lvce-editor/test-with-playwright'

export const test: Test = async ({ expect, ExtensionSearch, Locator }) => {
  await ExtensionSearch.open()
  await ExtensionSearch.handleInput('@builtin')
  const items = Locator('.ExtensionListItem')
  await expect(items).toHaveCount(10)
}
