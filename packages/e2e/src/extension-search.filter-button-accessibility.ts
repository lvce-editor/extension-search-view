import type { Test } from '@lvce-editor/test-with-playwright'

export const test: Test = async ({ expect, ExtensionSearch, Locator }) => {
  // act
  await ExtensionSearch.open()

  // assert
  const filterButton = Locator('.SearchFieldButton').nth(1)
  await expect(filterButton).toHaveAttribute('title', 'Filter')
  await expect(filterButton.locator('.MaskIconFilter')).toHaveCount(1)
}
