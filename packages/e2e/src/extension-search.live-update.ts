import type { Test } from '@lvce-editor/test-with-playwright'

export const skip = 0

export const test: Test = async ({ expect, Extension, ExtensionSearch, Locator }) => {
  // arrange
  await ExtensionSearch.open()
  await ExtensionSearch.handleInput('not-found')
  const listItems = Locator('.Extensions .ListItems')

  // act
  const manifest = encodeURIComponent(
    JSON.stringify({
      description: 'Added dynamically while the extension search view is open',
      id: 'test.dynamic-extension',
      name: 'Dynamic not-found Extension',
    }),
  )
  const extensionUri = `data:application/json,${manifest}#`
  await Extension.addWebExtension(extensionUri)

  // assert
  await expect(listItems).toHaveCount(1)
  const extensionName = listItems.locator('.ExtensionListItemName')
  await expect(extensionName).toHaveText('Dynamic not-found Extension')
}
