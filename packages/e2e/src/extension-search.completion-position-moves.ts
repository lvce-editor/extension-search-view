import type { Test } from '@lvce-editor/test-with-playwright'

export const skip = 0

export const test: Test = async ({ expect, ExtensionSearch, Locator }) => {
  await ExtensionSearch.open()
  await ExtensionSearch.clearSearchResults()
  await ExtensionSearch.handleInput('@', 1, 1)
  const widget = Locator('.ExtensionSearchCompletionWidget')
  await expect(widget).toHaveCSS('left', '16px')
  await ExtensionSearch.handleInput('theme @', 1, 7)
  await expect(widget).toHaveCSS('left', '61px')
}
