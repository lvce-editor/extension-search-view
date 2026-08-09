import type { Test } from '@lvce-editor/test-with-playwright'

export const test: Test = async ({ expect, ExtensionSearch, Locator }) => {
  await ExtensionSearch.open()
  const input = Locator('.Extensions .MultilineInputBox')
  await expect(input).toHaveAttribute('role', 'combobox')
  await expect(input).toHaveAttribute('aria-autocomplete', 'list')
  await expect(input).toHaveAttribute('aria-expanded', 'false')
}
