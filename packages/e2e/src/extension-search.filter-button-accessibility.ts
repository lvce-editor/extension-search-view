import type { Test } from '@lvce-editor/test-with-playwright'

export const test: Test = async ({ expect, ExtensionSearch, Locator }) => {
  // act
  await ExtensionSearch.open()

  // assert
  const filterButton = Locator('.SearchFieldButton').nth(1)
  await expect(filterButton).toHaveAttribute('title', 'Filter')
  const filterIcon = filterButton.locator('.MaskIconFilter')
  await expect(filterIcon).toHaveCount(1)
}
