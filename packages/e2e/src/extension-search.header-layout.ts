import type { Test } from '@lvce-editor/test-with-playwright'

export const test: Test = async ({ expect, ExtensionSearch, Locator }) => {
  // act
  await ExtensionSearch.open()

  // assert
  const header = Locator('.ExtensionHeader')
  await expect(header).toHaveCSS('position', 'relative')
  await expect(header).toHaveCSS('z-index', '1')
}
