import type { Test } from '@lvce-editor/test-with-playwright'

export const test: Test = async ({ expect, ExtensionSearch, Locator }) => {
  // act
  await ExtensionSearch.open()

  // assert
  const list = Locator('.Extensions .ListItems')
  await expect(list).toHaveCSS('gap', '0px')
}
