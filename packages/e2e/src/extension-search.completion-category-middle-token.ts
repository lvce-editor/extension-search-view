import type { Test } from '@lvce-editor/test-with-playwright'

export const test: Test = async ({ expect, ExtensionSearch, Locator }) => {
  await ExtensionSearch.open()
  await ExtensionSearch.clearSearchResults()
  await ExtensionSearch.handleInput('theme @category:pro other', 1, 19)
  await ExtensionSearch.handleClickAt(0, 0, 0, '@category:"programming languages"')
  const input = Locator('.Extensions .MultilineInputBox')
  await expect(input).toHaveValue('theme @category:"programming languages" other')
}
