import type { Test } from '@lvce-editor/test-with-playwright'

export const skip = 0

export const test: Test = async ({ Command, expect, ExtensionSearch, Locator }) => {
  await ExtensionSearch.open()
  await ExtensionSearch.clearSearchResults()
  await Command.execute('Extensions.handleInput', '@', 1, 1)
  await Command.execute('Extensions.closeSuggest')
  await Command.execute('Extensions.toggleSuggest')
  const widget = Locator('.ExtensionSearchCompletionWidget')
  await expect(widget).toBeVisible()
}
