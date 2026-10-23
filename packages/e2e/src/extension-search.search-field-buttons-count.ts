import type { Test } from '@lvce-editor/test-with-playwright'

export const test: Test = async ({ expect, ExtensionSearch, Locator }) => {
  // act
  await ExtensionSearch.open()

  // assert
  const buttons = Locator('.Extensions .SearchFieldButtons .SearchFieldButton')
  await expect(buttons).toHaveCount(2)
}
