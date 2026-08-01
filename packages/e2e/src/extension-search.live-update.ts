import type { Test } from '@lvce-editor/test-with-playwright'

export const skip = 0

export const test: Test = async ({ Command, expect, ExtensionSearch, Locator }) => {
  // arrange
  await ExtensionSearch.open()
  await ExtensionSearch.handleInput('atom')
  const input = Locator('.Extensions .MultilineInputBox')
  const listItems = Locator('.Extensions .ListItems')
  await expect(listItems).toHaveCount(1)

  // act
  await Command.execute('Layout.handleExtensionsChanged')

  // assert
  await expect(input).toHaveValue('atom')
  await expect(listItems).toHaveCount(1)
  const firstItem = listItems.locator('.ExtensionListItem')
  await expect(firstItem).toBeVisible()
}
