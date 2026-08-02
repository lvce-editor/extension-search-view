import type { Test } from '@lvce-editor/test-with-playwright'

export const skip = 0

export const test: Test = async ({ expect, ExtensionSearch, Locator }) => {
  await ExtensionSearch.open()
  await ExtensionSearch.handleInput('ayu')
  const name = Locator('.ExtensionListItemName')
  await expect(name).toHaveText('Ayu Theme')
  await ExtensionSearch.handleInput('cobalt')
  await expect(name).toHaveText('Cobalt 2 Theme')
}
