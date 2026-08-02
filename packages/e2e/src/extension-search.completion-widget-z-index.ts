import type { Test } from '@lvce-editor/test-with-playwright'

export const skip = 0

export const test: Test = async ({ expect, ExtensionSearch, Locator }) => {
  await ExtensionSearch.open()
  await ExtensionSearch.handleInput('@', 1, 1)
  const element = Locator('.ExtensionSearchCompletionWidget').first()
  await expect(element).toHaveCSS('z-index', '10')
}
