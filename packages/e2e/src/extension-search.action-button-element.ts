import type { Test } from '@lvce-editor/test-with-playwright'

export const test: Test = async ({ expect, ExtensionSearch, Locator }) => {
  await ExtensionSearch.open()
  await ExtensionSearch.handleInput('@id:builtin.theme-atom-one-dark')
  const button = Locator('button.ExtensionActionButton')
  await expect(button).toHaveCount(1)
}
