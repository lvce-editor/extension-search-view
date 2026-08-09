import type { Test } from '@lvce-editor/test-with-playwright'

export const test: Test = async ({ expect, ExtensionSearch, Locator }) => {
  await ExtensionSearch.open()
  await ExtensionSearch.handleInput('@id:missing.extension')
  const items = Locator('.ExtensionListItem')
  const message = Locator('.NoExtensionsFoundMessage')
  await expect(items).toHaveCount(0)
  await expect(message).toHaveText('No extensions found.')
}
