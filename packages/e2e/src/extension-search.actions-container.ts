import type { Test } from '@lvce-editor/test-with-playwright'

export const test: Test = async ({ expect, ExtensionSearch, Locator }) => {
  await ExtensionSearch.open()
  await ExtensionSearch.handleInput('@id:builtin.theme-atom-one-dark')
  const actions = Locator('.ExtensionActions')
  await expect(actions).toHaveCount(1)
  const actionButton = actions.locator('.ExtensionActionButton')
  await expect(actionButton).toHaveCount(1)
}
