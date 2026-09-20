import type { Test } from '@lvce-editor/test-with-playwright'

export const test: Test = async ({ expect, ExtensionSearch, Locator }) => {
  // arrange
  await ExtensionSearch.open()
  const whitespace = ' '.repeat(3)

  // act
  await ExtensionSearch.handleInput(whitespace)

  // assert
  const input = Locator('.Extensions .MultilineInputBox')
  const items = Locator('.ExtensionListItem')
  await expect(input).toHaveValue(whitespace)
  await expect(items).toHaveCount(10)
}
