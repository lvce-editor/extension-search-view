import type { Test } from '@lvce-editor/test-with-playwright'

export const test: Test = async ({ expect, ExtensionSearch, Locator }) => {
  await ExtensionSearch.open()
  await ExtensionSearch.handleInput('<img src=x onerror=alert(1)>')
  const input = Locator('.Extensions .MultilineInputBox')
  const message = Locator('.NoExtensionsFoundMessage')
  await expect(input).toHaveValue('<img src=x onerror=alert(1)>')
  const items = Locator('.ExtensionListItem')
  await expect(items).toHaveCount(0)
  await expect(message).toHaveText('No extensions found.')
  const injectedImage = Locator('.Extensions img[src="x"]')
  await expect(injectedImage).toHaveCount(0)

  await ExtensionSearch.handleInput('@id:builtin.theme-atom-one-dark')
  await expect(message).toHaveCount(0)
  const name = Locator('.ExtensionListItemName')
  await expect(name).toHaveText('Atom One Dark Theme')
}
