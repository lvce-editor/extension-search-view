import type { Test } from '@lvce-editor/test-with-playwright'

export const test: Test = async ({ expect, ExtensionSearch, Locator }) => {
  // arrange
  await ExtensionSearch.open()
  const undefinedText = Locator('.Extensions .List').locator('text=undefined')
  const items = Locator('.ExtensionListItem')
  const noResultsMessage = Locator('.NoExtensionsFoundMessage')

  // assert
  await expect(undefinedText).toHaveCount(0)

  // act
  await ExtensionSearch.handleInput('type')

  // assert
  await expect(items).toHaveCount(1)
  await expect(undefinedText).toHaveCount(0)

  // act
  await ExtensionSearch.handleInput('@id:missing.extension')

  // assert
  await expect(noResultsMessage).toBeVisible()

  // act
  await ExtensionSearch.clearSearchResults()

  // assert
  await expect(items).toHaveCount(10)
  await expect(undefinedText).toHaveCount(0)
}
