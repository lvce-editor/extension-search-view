import type { Test } from '@lvce-editor/test-with-playwright'

export const test: Test = async ({ expect, ExtensionSearch, Locator }) => {
  // arrange
  await ExtensionSearch.open()

  // act
  await ExtensionSearch.handleInput('atom')

  // assert
  const detail = Locator('.ExtensionListItemDetail')
  await expect(detail).toHaveCount(1)
  await expect(detail.locator('.ExtensionListItemName')).toHaveCount(1)
  await expect(detail.locator('.ExtensionListItemDescription')).toHaveCount(1)
  await expect(detail.locator('.ExtensionListItemFooter')).toHaveCount(1)
}
