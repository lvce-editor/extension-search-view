import type { Test } from '@lvce-editor/test-with-playwright'

export const test: Test = async ({ expect, ExtensionSearch, Locator }) => {
  // arrange
  await ExtensionSearch.open()

  // act
  await ExtensionSearch.handleInput('@id:builtin.theme-atom-one-dark')

  // assert
  const actions = Locator('.ExtensionActions')
  await expect(actions).toHaveCount(1)
  const manageButton = actions.locator('.ExtensionListItemActionManage')
  await expect(manageButton).toHaveCount(1)
}
