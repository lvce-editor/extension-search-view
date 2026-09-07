import type { Test } from '@lvce-editor/test-with-playwright'

export const test: Test = async ({ expect, ExtensionSearch, Locator }) => {
  await ExtensionSearch.open()
  const query = 'missing-extension-'.repeat(256)
  await ExtensionSearch.handleInput(query)
  const input = Locator('.Extensions .MultilineInputBox')
  await expect(input).toHaveValue(query)
  const items = Locator('.ExtensionListItem')
  await expect(items).toHaveCount(0)
  const message = Locator('.NoExtensionsFoundMessage')
  await expect(message).toHaveText('No extensions found.')

  await ExtensionSearch.clearSearchResults()
  await expect(message).toHaveCount(0)
  await expect(items).toHaveCount(10)
}
