import type { Test } from '@lvce-editor/test-with-playwright'

export const skip = 0

export const test: Test = async ({ expect, ExtensionSearch, Locator }) => {
  await ExtensionSearch.open()
  const list = Locator('.Extensions .ListItems')
  await expect(list).toHaveCSS('gap', '0px')
}
