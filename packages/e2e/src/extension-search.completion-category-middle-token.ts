import type { Test } from '@lvce-editor/test-with-playwright'

export const skip = 0

export const test: Test = async ({ Command, expect, ExtensionSearch, Locator }) => {
  await ExtensionSearch.open()
  await ExtensionSearch.clearSearchResults()
  await Command.execute('Extensions.handleInput', 'theme @category:pro other', 1, 19)
  await Command.execute('Extensions.handleClickAt', 0, 0, 0, '@category:"programming languages"')
  const input = Locator('.Extensions .MultilineInputBox')
  await expect(input).toHaveValue('theme @category:"programming languages" other')
}
