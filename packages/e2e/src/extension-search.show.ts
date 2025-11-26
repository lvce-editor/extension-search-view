import type { Test } from '@lvce-editor/test-with-playwright'

export const test: Test = async ({ Locator, expect, ExtensionSearch }) => {
  // act
  await ExtensionSearch.open()

  // assert
  const extensionsView = Locator('.Extensions')
  await expect(extensionsView).toBeVisible()
}
