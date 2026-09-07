import type { Test } from '@lvce-editor/test-with-playwright'

export const test: Test = async ({ expect, ExtensionSearch, Locator }) => {
  await ExtensionSearch.open()
  await ExtensionSearch.handleInput('不存在的扩展🔎')
  const input = Locator('.Extensions .MultilineInputBox')
  const message = Locator('.NoExtensionsFoundMessage')
  await expect(input).toHaveValue('不存在的扩展🔎')
  await expect(Locator('.ExtensionListItem')).toHaveCount(0)
  await expect(message).toHaveText('No extensions found.')

  await ExtensionSearch.handleInput('@id:builtin.theme-atom-one-dark')
  await expect(message).toHaveCount(0)
  await expect(Locator('.ExtensionListItemName')).toHaveText('Atom One Dark Theme')
}
