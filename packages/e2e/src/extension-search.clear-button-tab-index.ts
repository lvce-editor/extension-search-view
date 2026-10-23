import type { Test } from '@lvce-editor/test-with-playwright'

export const test: Test = async ({ expect, ExtensionSearch, Locator }) => {
  // act
  await ExtensionSearch.open()

  // assert
  const clearButton = Locator('.SearchFieldButton').first()
  await expect(clearButton).toHaveAttribute('tabindex', '0')
}
