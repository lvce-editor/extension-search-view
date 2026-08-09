import type { Test } from '@lvce-editor/test-with-playwright'

export const test: Test = async ({ expect, ExtensionSearch, Locator }) => {
  await ExtensionSearch.open()
  const list = Locator('.Extensions .ListItems')
  await expect(list).toHaveCSS('display', 'flex')
  await expect(list).toHaveCSS('flex-direction', 'column')
}
