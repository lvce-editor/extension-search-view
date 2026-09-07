import type { Test } from '@lvce-editor/test-with-playwright'

export const test: Test = async ({ expect, ExtensionSearch, Locator }) => {
  await ExtensionSearch.open()
  const query = 'missing-extension-'.repeat(256)
  await ExtensionSearch.handleInput(query)
  await expect(Locator('.Extensions .MultilineInputBox')).toHaveValue(query)
  await expect(Locator('.ExtensionListItem')).toHaveCount(0)
  await expect(Locator('.NoExtensionsFoundMessage')).toHaveText('No extensions found.')

  await ExtensionSearch.clearSearchResults()
  await expect(Locator('.NoExtensionsFoundMessage')).toHaveCount(0)
  await expect(Locator('.ExtensionListItem')).toHaveCount(10)
}
