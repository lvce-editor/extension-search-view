import type { Test } from '@lvce-editor/test-with-playwright'

export const skip = 0

export const test: Test = async ({ Command, expect, ExtensionSearch, Locator }) => {
  await ExtensionSearch.open()
  await ExtensionSearch.clearSearchResults()
  await Command.execute('Extensions.handleInput', '@', 2, 1)
  const widget = Locator('.ExtensionSearchCompletionWidget')
  const input = Locator('.Extensions .MultilineInputBox')
  await expect(widget).toHaveCount(0)
  await expect(input).toHaveValue('@')
}
