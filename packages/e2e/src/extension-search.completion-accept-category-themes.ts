import type { Test } from '@lvce-editor/test-with-playwright'

export const skip = 0

export const test: Test = async ({ expect, ExtensionSearch, Locator }) => {
  await ExtensionSearch.open()
  await ExtensionSearch.handleInput('@category:theme', 1, 15)
  await ExtensionSearch.acceptCompletion()
  const input = Locator('.Extensions .MultilineInputBox')
  await expect(input).toHaveValue('@category:"themes" ')
}
