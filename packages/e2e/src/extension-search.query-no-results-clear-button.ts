import type { Test } from '@lvce-editor/test-with-playwright'

export const test: Test = async ({ expect, ExtensionSearch, Locator }) => {
  // arrange
  await ExtensionSearch.open()

  // act
  await ExtensionSearch.handleInput('@id:missing.extension')

  // assert
  const message = Locator('.NoExtensionsFoundMessage')
  await expect(message).toBeVisible()
  const clearButton = Locator('.SearchFieldButton').first()
  await expect(clearButton).toHaveAttribute('class', 'SearchFieldButton')

  // act
  await ExtensionSearch.clearSearchResults()

  // assert
  const input = Locator('.Extensions .MultilineInputBox')
  await expect(input).toHaveValue('')
  await expect(message).toHaveCount(0)
  const items = Locator('.ExtensionListItem')
  await expect(items).toHaveCount(10)
  await expect(clearButton).toHaveAttribute('class', 'SearchFieldButton SearchFieldButtonDisabled')
}
