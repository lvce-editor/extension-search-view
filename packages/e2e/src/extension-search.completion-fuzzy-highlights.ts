import type { Test } from '@lvce-editor/test-with-playwright'

export const skip = 0

export const test: Test = async ({ Command, expect, ExtensionSearch, Locator }) => {
  await ExtensionSearch.open()
  await ExtensionSearch.clearSearchResults()
  await Command.execute('Extensions.handleInput', '@bti', 1, 4)
  const highlights = Locator('.ExtensionSearchCompletionHighlight')
  await expect(highlights).toHaveCount(2)
  const firstHighlight = highlights.nth(0)
  const secondHighlight = highlights.nth(1)
  await expect(firstHighlight).toHaveText('@b')
  await expect(secondHighlight).toHaveText('ti')
}
