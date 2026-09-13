import type { Test } from '@lvce-editor/test-with-playwright'

export const test: Test = async ({ expect, ExtensionSearch, Locator }) => {
  // arrange
  await ExtensionSearch.open()

  // act
  await ExtensionSearch.handleInput('@category:xyz', 1, 13)

  // assert
  const widget = Locator('.ExtensionSearchCompletionWidget')
  await expect(widget).toHaveCount(0)

  // act
  await ExtensionSearch.handleInput('@category:theme', 1, 15)

  // assert
  await expect(widget).toBeVisible()
  const focusedCompletion = Locator('.ExtensionSearchCompletionItemFocused')
  await expect(focusedCompletion).toHaveText('@category:"themes"')

  // act
  await ExtensionSearch.acceptCompletion()

  // assert
  const input = Locator('.Extensions .MultilineInputBox')
  await expect(input).toHaveValue('@category:"themes" ')
  const items = Locator('.ExtensionListItem')
  await expect(items).toHaveCount(2)
}
