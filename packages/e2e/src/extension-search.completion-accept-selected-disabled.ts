import type { Test } from '@lvce-editor/test-with-playwright'

export const test: Test = async ({ expect, ExtensionSearch, Locator }) => {
  // arrange
  await ExtensionSearch.open()
  await ExtensionSearch.handleInput('@', 1, 1)
  await ExtensionSearch.selectNextCompletion()
  await ExtensionSearch.selectNextCompletion()

  // act
  await ExtensionSearch.acceptCompletion()

  // assert
  const input = Locator('.Extensions .MultilineInputBox')
  await expect(input).toHaveValue('@disabled ')
}
