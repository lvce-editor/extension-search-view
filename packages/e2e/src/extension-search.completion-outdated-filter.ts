import type { Test } from '@lvce-editor/test-with-playwright'

export const skip = 0

export const test: Test = async ({ Command, expect, ExtensionSearch, Locator }) => {
  await ExtensionSearch.open()
  await ExtensionSearch.clearSearchResults()
  await Command.execute('Extensions.handleInput', '@outd', 1, 5)
  const items = Locator('.ExtensionSearchCompletionItem')
  const secondItem = items.nth(1)
  await expect(items).toHaveCount(2)
  await expect(items.first()).toHaveText('@outdated')
  await expect(secondItem).toHaveText('@workspaceunsupported')
}
