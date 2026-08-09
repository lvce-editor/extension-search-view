import type { Test } from '@lvce-editor/test-with-playwright'

export const test: Test = async ({ expect, ExtensionSearch, Locator }) => {
  await ExtensionSearch.open()
  await ExtensionSearch.handleInput('@bti', 1, 4)
  const highlight = Locator('.ExtensionSearchCompletionHighlight').first()
  await expect(highlight).toHaveCSS('font-weight', '700')
}
