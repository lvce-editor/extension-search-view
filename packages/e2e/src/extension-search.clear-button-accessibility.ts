import type { Test } from '@lvce-editor/test-with-playwright'

export const test: Test = async ({ expect, ExtensionSearch, Locator }) => {
  await ExtensionSearch.open()
  const clearButton = Locator('.SearchFieldButton').first()
  await expect(clearButton).toHaveAttribute('title', 'Clear extension search results')
  const clearIcon = clearButton.locator('.MaskIconClearAll')
  await expect(clearIcon).toHaveCount(1)
}
