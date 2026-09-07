import type { Test } from '@lvce-editor/test-with-playwright'

export const test: Test = async ({ expect, ExtensionSearch, Locator }) => {
  await ExtensionSearch.open()
  await ExtensionSearch.handleInput('@category:xyz', 1, 13)
  await expect(Locator('.ExtensionSearchCompletionWidget')).toHaveCount(0)
  await ExtensionSearch.handleInput('@category:theme', 1, 15)
  await expect(Locator('.ExtensionSearchCompletionWidget')).toBeVisible()
  await expect(Locator('.ExtensionSearchCompletionItemFocused')).toHaveText('@category:"themes"')
  await ExtensionSearch.acceptCompletion()
  await expect(Locator('.Extensions .MultilineInputBox')).toHaveValue('@category:"themes" ')
  await expect(Locator('.ExtensionListItem')).toHaveCount(2)
}
