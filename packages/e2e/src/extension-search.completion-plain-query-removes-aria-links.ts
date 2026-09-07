import type { Test } from '@lvce-editor/test-with-playwright'

export const test: Test = async ({ expect, ExtensionSearch, Locator }) => {
  await ExtensionSearch.open()
  await ExtensionSearch.handleInput('@', 1, 1)
  const input = Locator('.Extensions .MultilineInputBox')
  await expect(input).toHaveAttribute('aria-controls', 'ExtensionSearchCompletions')
  await ExtensionSearch.handleInput('atom', 1, 4)
  await expect(Locator('.ExtensionSearchCompletionWidget')).toHaveCount(0)
  await expect(input).toHaveAttribute('aria-expanded', 'false')
  await expect(input).toHaveAttribute('aria-controls', null)
  await expect(input).toHaveAttribute('aria-activedescendant', null)
  await expect(Locator('.ExtensionListItemName')).toHaveText('Atom One Dark Theme')
}
