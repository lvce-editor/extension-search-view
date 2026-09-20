import type { Test } from '@lvce-editor/test-with-playwright'

export const test: Test = async ({ expect, ExtensionSearch, Locator }) => {
  // act
  await ExtensionSearch.open()

  // assert
  const input = Locator('.Extensions .MultilineInputBox')
  await expect(input).toHaveAttribute('autocomplete', 'off')
}
