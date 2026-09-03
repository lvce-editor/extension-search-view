import type { Test } from '@lvce-editor/test-with-playwright'

export const test: Test = async ({ expect, ExtensionSearch, KeyBoard, Locator }) => {
  await ExtensionSearch.open()
  await ExtensionSearch.clearSearchResults()
  await ExtensionSearch.handleInput('@ins', 1, 4)
  await KeyBoard.press('Tab')
  const input = Locator('.Extensions .MultilineInputBox')
  await expect(input).toHaveValue('@installed ')
  await expect(input).toBeFocused()
}
