import type { Test } from '@lvce-editor/test-with-playwright'

export const skip = 0

export const test: Test = async ({ expect, ExtensionSearch, Locator }) => {
  await ExtensionSearch.open()
  const query = '@recom'
  await ExtensionSearch.handleInput(query, 1, query.length)
  await ExtensionSearch.acceptCompletion()
  const input = Locator('.Extensions .MultilineInputBox')
  await expect(input).toHaveValue('@recommended ')
}
