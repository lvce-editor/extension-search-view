import type { Test } from '@lvce-editor/test-with-playwright'

export const skip = 0

export const test: Test = async ({ expect, Extension, ExtensionSearch, Locator }) => {
  // arrange
  await ExtensionSearch.open()
  const extensionsView = Locator('.Extensions')
  await expect(extensionsView).toBeVisible()

  // act
  const extensionUri = new URL('../fixtures/dynamic-extension', import.meta.url).href
  await Extension.addWebExtension(extensionUri)

  // assert
  const extensionName = Locator('.Extensions .ListItems').locator('text=Dynamic Extension')
  await expect(extensionName).toHaveText('Dynamic Extension')
}
