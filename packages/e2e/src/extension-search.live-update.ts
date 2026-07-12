import type { Test } from '@lvce-editor/test-with-playwright'

export const skip = 0

export const test: Test = async ({ expect, Extension, ExtensionSearch, Locator }) => {
  // arrange
  await ExtensionSearch.open()
  await ExtensionSearch.handleInput('@id:test.dynamic-extension')
  const extensions = Locator('.Extensions .ExtensionListItem')
  await expect(extensions).toHaveCount(0)

  // act
  const extensionUri = new URL('../fixtures/dynamic-extension', import.meta.url).href
  await Extension.addWebExtension(extensionUri)

  // assert
  await expect(extensions).toHaveCount(1)
  const extensionName = extensions.locator('.ExtensionListItemName')
  await expect(extensionName).toHaveText('Dynamic Extension')
}
