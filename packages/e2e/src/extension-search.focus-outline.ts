import type { Test } from '@lvce-editor/test-with-playwright'

export const skip = 0

export const test: Test = async ({ expect, ExtensionSearch, Locator }) => {
  // arrange
  await ExtensionSearch.open()
  const extensionsView = Locator('.Extensions')
  await expect(extensionsView).toBeVisible()
  await ExtensionSearch.handleInput('atom')

  // act
  await ExtensionSearch.handleClick(-1)

  // assert
  const listItems = Locator('.ListItems')
  await expect(listItems).toBeVisible()
  await expect(listItems).toHaveClass('FocusOutline')
}
