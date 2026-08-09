import type { Test } from '@lvce-editor/test-with-playwright'

export const test: Test = async ({ expect, ExtensionSearch, Locator }) => {
  await ExtensionSearch.open()
  await ExtensionSearch.handleInput('atom')
  const icon = Locator('.ExtensionListItemIcon')
  await expect(icon).toBeVisible()
  await expect(icon).toHaveAttribute('role', 'none')
}
