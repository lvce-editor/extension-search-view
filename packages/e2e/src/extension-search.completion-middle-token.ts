import type { Test } from '@lvce-editor/test-with-playwright'

export const skip = 0

export const test: Test = async ({ Command, expect, ExtensionSearch, Locator }) => {
  await ExtensionSearch.open()
  await ExtensionSearch.clearSearchResults()
  await Command.execute('Extensions.handleInput', 'theme @ins other', 1, 10)
  await Command.execute('Extensions.handleClickAt', 0, 0, 0, '@installed')
  const input = Locator('.Extensions .MultilineInputBox')
  await expect(input).toHaveValue('theme @installed other')
}
