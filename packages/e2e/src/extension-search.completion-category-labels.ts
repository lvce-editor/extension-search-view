import type { Test } from '@lvce-editor/test-with-playwright'

export const test: Test = async ({ expect, ExtensionSearch, Locator }) => {
  // arrange
  await ExtensionSearch.open()
  await ExtensionSearch.clearSearchResults()

  // act
  await ExtensionSearch.handleInput('@category:', 1, 10)

  // assert
  const items = Locator('.ExtensionSearchCompletionItem')
  const firstItem = items.nth(0)
  const extensionPacksItem = items.nth(6)
  const programmingLanguagesItem = items.nth(14)
  const lastItem = items.nth(19)
  await expect(firstItem).toHaveText('@category:"ai"')
  await expect(extensionPacksItem).toHaveText('@category:"extension packs"')
  await expect(programmingLanguagesItem).toHaveText('@category:"programming languages"')
  await expect(lastItem).toHaveText('@category:"visualization"')
}
