import type { Test } from '@lvce-editor/test-with-playwright'

export const test: Test = async ({ expect, ExtensionSearch, Locator }) => {
  // act
  await ExtensionSearch.open()

  // assert
  const item = Locator('.ExtensionListItem').first()
  await expect(item).toHaveCSS('box-sizing', 'border-box')
  await expect(item).toHaveCSS('position', 'relative')
  await expect(item).toHaveCSS('flex-shrink', '0')
}
