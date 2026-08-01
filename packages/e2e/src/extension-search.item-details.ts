import type { Test } from '@lvce-editor/test-with-playwright'

export const skip = 0

export const test: Test = async ({ expect, ExtensionSearch, Locator }) => {
  // arrange
  await ExtensionSearch.open()

  // act
  await ExtensionSearch.handleInput('atom')

  // assert
  const extensionItem = Locator('.ExtensionListItem')
  await expect(extensionItem).toHaveCount(1)
  await expect(extensionItem.locator('.ExtensionListItemName')).toHaveText('Atom One Dark Theme')
  await expect(extensionItem.locator('.ExtensionListItemDescription')).toHaveText('One Dark Theme based on Atom')
  await expect(extensionItem.locator('.ExtensionListItemAuthorName')).toHaveText('builtin')
}
