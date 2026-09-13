import type { Test } from '@lvce-editor/test-with-playwright'

export const test: Test = async ({ expect, ExtensionSearch, Locator }) => {
  // arrange
  await ExtensionSearch.open()
  const query = '@mcp'
  await ExtensionSearch.handleInput(query, 1, query.length)

  // act
  await ExtensionSearch.acceptCompletion()

  // assert
  const input = Locator('.Extensions .MultilineInputBox')
  await expect(input).toHaveValue('@mcpservers ')
}
