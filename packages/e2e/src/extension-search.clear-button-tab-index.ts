import type { Test } from '@lvce-editor/test-with-playwright'

export const skip = 0

export const test: Test = async ({ expect, ExtensionSearch, Locator }) => {
  await ExtensionSearch.open()
  const clearButton = Locator('.SearchFieldButton').first()
  await expect(clearButton).toHaveAttribute('tabindex', '0')
}
