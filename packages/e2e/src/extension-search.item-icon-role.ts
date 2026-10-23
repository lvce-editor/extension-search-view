import type { Test } from '@lvce-editor/test-with-playwright'

export const test: Test = async ({ expect, ExtensionSearch, Locator }) => {
  // arrange
  await ExtensionSearch.open()

  // act
  await ExtensionSearch.handleInput('atom')

  // assert
  const icon = Locator('.ExtensionListItemIcon')
  await expect(icon).toBeVisible()
  await expect(icon).toHaveAttribute('role', 'none')
}
