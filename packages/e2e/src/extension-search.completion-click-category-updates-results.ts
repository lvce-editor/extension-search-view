import type { Test } from '@lvce-editor/test-with-playwright'

export const test: Test = async ({ expect, ExtensionSearch, Locator }) => {
  await ExtensionSearch.open()
  await ExtensionSearch.handleInput('@category:theme', 1, 15)
  await ExtensionSearch.handleClickAt(0, 0, 0, '@category:"themes"')
  const input = Locator('.Extensions .MultilineInputBox')
  const items = Locator('.ExtensionListItem')
  await expect(input).toHaveValue('@category:"themes" ')
  await expect(items).toHaveCount(2)
}
