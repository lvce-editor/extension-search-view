import type { Test } from '@lvce-editor/test-with-playwright'

export const skip = 0

export const test: Test = async ({ expect, ExtensionSearch, Locator }) => {
  await ExtensionSearch.open()
  const whitespace = ' '.repeat(3)
  await ExtensionSearch.handleInput(whitespace)
  const input = Locator('.Extensions .MultilineInputBox')
  const items = Locator('.ExtensionListItem')
  await expect(input).toHaveValue(whitespace)
  await expect(items).toHaveCount(10)
}
