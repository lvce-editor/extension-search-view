import type { Test } from '@lvce-editor/test-with-playwright'

export const skip = 0

export const test: Test = async ({ expect, ExtensionSearch, Locator }) => {
  // arrange
  await ExtensionSearch.open()
  await ExtensionSearch.clearSearchResults()
  const extensionsView = Locator('.Extensions')
  await expect(extensionsView).toBeVisible()
  await ExtensionSearch.handleInput('atom', 1, 4)
  const extensionItems = Locator('.ExtensionListItem')
  await expect(extensionItems).toHaveCount(1)
  const input = Locator('.MultilineInputBox')
  await expect(input).toBeFocused()

  // act
  await ExtensionSearch.handleClick(-1)

  // assert
  const listItems = Locator('.ListItems')
  await expect(listItems).toBeVisible()
  await expect(listItems).toBeFocused()
  await expect(listItems).toHaveClass('FocusOutline')
}
