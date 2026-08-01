import type { Test } from '@lvce-editor/test-with-playwright'

export const skip = 0

export const test: Test = async ({ expect, ExtensionSearch, Locator }) => {
  await ExtensionSearch.open()
  await ExtensionSearch.handleInput('@id:builtin.theme-atom-one-dark')
  const actions = Locator('.ExtensionActions')
  await expect(actions).toHaveCount(1)
  await expect(actions.locator('.ExtensionActionButton')).toHaveCount(1)
}
