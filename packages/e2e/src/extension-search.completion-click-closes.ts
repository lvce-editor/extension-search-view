import type { Test } from '@lvce-editor/test-with-playwright'

export const skip = 0

export const test: Test = async ({ Command, expect, ExtensionSearch, Locator }) => {
  await ExtensionSearch.open()
  await ExtensionSearch.clearSearchResults()
  await Command.execute('Extensions.handleInput', '@en', 1, 3)
  await Command.execute('Extensions.handleClickAt', 0, 0, 0, '@enabled')
  const widget = Locator('.ExtensionSearchCompletionWidget')
  await expect(widget).toBeHidden()
}
