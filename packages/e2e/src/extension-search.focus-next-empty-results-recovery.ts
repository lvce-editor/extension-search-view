import type { Test } from '@lvce-editor/test-with-playwright'

export const test: Test = async ({ expect, ExtensionSearch, Locator }) => {
  await ExtensionSearch.open()
  await ExtensionSearch.handleInput('@id:missing.extension')
  const message = Locator('.NoExtensionsFoundMessage')
  await expect(message).toBeVisible()
  await ExtensionSearch.focusNext()
  const activeItem = Locator('.ExtensionActive')
  await expect(activeItem).toHaveCount(0)
  await expect(message).toHaveText('No extensions found.')

  await ExtensionSearch.handleInput('atom')
  await ExtensionSearch.focusFirst()
  await expect(message).toHaveCount(0)
  const activeName = Locator('.ExtensionActive .ExtensionListItemName')
  await expect(activeName).toHaveText('Atom One Dark Theme')
}
