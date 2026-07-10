import type { Test } from '@lvce-editor/test-with-playwright'

export const skip = 0

export const test: Test = async ({ Command, expect, ExtensionSearch, Locator }) => {
  await ExtensionSearch.open()
  await ExtensionSearch.clearSearchResults()
  await Command.execute('Extensions.handleInput', '@', 1, 1)
  const input = Locator('.Extensions .MultilineInputBox')
  await Command.execute('Extensions.acceptCompletion')
  await expect(input).toHaveValue('@builtin')
}
