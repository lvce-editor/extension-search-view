import type { Test } from '@lvce-editor/test-with-playwright'

export const skip = 0

export const test: Test = async ({ expect, ExtensionSearch, Locator }) => {
  await ExtensionSearch.open()
  await ExtensionSearch.handleInput('@', 1, 1)
  const widget = Locator('.ExtensionSearchCompletionWidget')
  await expect(widget).toHaveCSS('font-size', '13px')
  await expect(widget).toHaveCSS('line-height', '20px')
}
