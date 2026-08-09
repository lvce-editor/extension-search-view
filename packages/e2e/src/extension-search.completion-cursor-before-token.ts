import type { Test } from '@lvce-editor/test-with-playwright'

export const test: Test = async ({ expect, ExtensionSearch, Locator }) => {
  await ExtensionSearch.open()
  await ExtensionSearch.handleInput('theme @en', 1, 5)
  const widget = Locator('.ExtensionSearchCompletionWidget')
  await expect(widget).toHaveCount(0)
}
