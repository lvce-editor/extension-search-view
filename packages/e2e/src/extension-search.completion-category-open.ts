import type { Test } from '@lvce-editor/test-with-playwright'

export const skip = 0

export const test: Test = async ({ Command, expect, ExtensionSearch, Locator }) => {
  await ExtensionSearch.open()
  await ExtensionSearch.clearSearchResults()
  await Command.execute('Extensions.handleInput', '@category:', 1, 10)
  const widget = Locator('.ExtensionSearchCompletionWidget')
  await expect(widget).toBeVisible()
}
