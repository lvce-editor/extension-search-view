import type { Test } from '@lvce-editor/test-with-playwright'

export const test: Test = async ({ expect, ExtensionSearch, Locator }) => {
  await ExtensionSearch.open()
  await ExtensionSearch.handleInput('@', 1, 1)
  const widget = Locator('.ExtensionSearchCompletionWidget')
  await expect(widget).toHaveCSS('max-height', '240px')
}
