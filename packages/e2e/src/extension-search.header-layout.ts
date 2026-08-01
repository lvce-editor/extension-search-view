import type { Test } from '@lvce-editor/test-with-playwright'

export const skip = 0

export const test: Test = async ({ expect, ExtensionSearch, Locator }) => {
  await ExtensionSearch.open()
  const header = Locator('.ExtensionHeader')
  await expect(header).toHaveCSS('position', 'relative')
  await expect(header).toHaveCSS('z-index', '1')
}
