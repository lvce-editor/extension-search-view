import type { Test } from '@lvce-editor/test-with-playwright'

export const test: Test = async ({ expect, ExtensionSearch, Locator }) => {
  // arrange
  await ExtensionSearch.open()

  // act
  await ExtensionSearch.handleInput('one dark')

  // assert
  const input = Locator('.Extensions .MultilineInputBox')
  await expect(input).toHaveValue('one dark')
}
