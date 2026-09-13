import type { Test } from '@lvce-editor/test-with-playwright'

export const test: Test = async ({ expect, ExtensionSearch, Locator }) => {
  // arrange
  await ExtensionSearch.open()

  // act
  await ExtensionSearch.handleInput('@id:builtin.theme-atom-one-dark')

  // assert
  const actions = Locator('.ExtensionActions')
  await expect(actions).toHaveCount(1)
  await expect(actions.locator('.ExtensionActionButton')).toHaveCount(1)
}
