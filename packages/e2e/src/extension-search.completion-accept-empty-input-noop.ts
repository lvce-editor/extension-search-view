import type { Test } from '@lvce-editor/test-with-playwright'

export const test: Test = async ({ expect, ExtensionSearch, Locator }) => {
  // arrange
  await ExtensionSearch.open()

  // act
  await ExtensionSearch.handleInput('')

  // assert
  const widget = Locator('.ExtensionSearchCompletionWidget')
  await expect(widget).toHaveCount(0)

  // act
  await ExtensionSearch.acceptCompletion()

  // assert
  const input = Locator('.Extensions .MultilineInputBox')
  await expect(input).toHaveValue('')
  await expect(widget).toHaveCount(0)

  // act
  await ExtensionSearch.handleInput('@en', 1, 3)
  await ExtensionSearch.acceptCompletion()

  // assert
  await expect(input).toHaveValue('@enabled ')
}
