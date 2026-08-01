import type { Test } from '@lvce-editor/test-with-playwright'

export const skip = 0

export const test: Test = async ({ Command, expect, ExtensionSearch, KeyBoard, Locator }) => {
  await ExtensionSearch.open()
  await ExtensionSearch.clearSearchResults()
  await Command.execute('Extensions.handleInput', '@', 1, 1)
  await Command.execute('Extensions.closeSuggest')
  const input = Locator('.MultilineInputBox')
  await expect(input).toBeFocused()
  await KeyBoard.press('Control+Space')
  const widget = Locator('.ExtensionSearchCompletionWidget')
  await expect(widget).toBeVisible()
}
