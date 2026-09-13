import type { Test } from '@lvce-editor/test-with-playwright'

export const test: Test = async ({ expect, ExtensionSearch, Locator }) => {
  // arrange
  await ExtensionSearch.open()

  // act
  await ExtensionSearch.handleInput('atom')

  // assert
  const extensionItem = Locator('.ExtensionListItem')
  await expect(extensionItem).toHaveCount(1)
  const itemName = extensionItem.locator('.ExtensionListItemName')
  await expect(itemName).toHaveText('Atom One Dark Theme')
  const itemDescription = extensionItem.locator('.ExtensionListItemDescription')
  await expect(itemDescription).toHaveText('One Dark Theme based on Atom')
  const authorName = extensionItem.locator('.ExtensionListItemAuthorName')
  await expect(authorName).toHaveText('builtin')
}
