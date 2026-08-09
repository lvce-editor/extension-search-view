import type { Test } from '@lvce-editor/test-with-playwright'

export const test: Test = async ({ expect, ExtensionSearch, Locator }) => {
  await ExtensionSearch.open()
  await ExtensionSearch.clearSearchResults()
  await ExtensionSearch.handleInput('@', 1, 1)
  const input = Locator('.Extensions .MultilineInputBox')
  await expect(input).toHaveAttribute('role', 'combobox')
  await expect(input).toHaveAttribute('aria-autocomplete', 'list')
  await expect(input).toHaveAttribute('aria-expanded', 'true')
  await expect(input).toHaveAttribute('aria-controls', 'ExtensionSearchCompletions')
}
