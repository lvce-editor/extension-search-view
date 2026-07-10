import type { Test } from '@lvce-editor/test-with-playwright'

export const skip = 0

export const test: Test = async ({ Command, expect, ExtensionSearch, Locator }) => {
  // arrange
  await ExtensionSearch.open()
  await ExtensionSearch.clearSearchResults()
  const extensionsView = Locator('.Extensions')
  await expect(extensionsView).toBeVisible()
  await Command.execute('Extensions.handleInput', 'atom', 1, 4)
  const extensionItems = Locator('.ExtensionListItem')
  await expect(extensionItems).toHaveCount(1)

  // act
  await Command.execute('Extensions.handleClick', -1)

  // assert
  const listItems = Locator('.ListItems')
  await expect(listItems).toBeVisible()
  await expect(listItems).toHaveClass('FocusOutline')
}
