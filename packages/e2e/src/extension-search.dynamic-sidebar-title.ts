import type { Test } from '@lvce-editor/test-with-playwright'

export const skip = 1

export const test: Test = async ({ expect, ExtensionSearch, Locator }) => {
  await ExtensionSearch.open()
  await ExtensionSearch.handleInput('@deprecated')

  const sideBarTitle = Locator('.SideBarTitleAreaTitle')
  await expect(sideBarTitle).toHaveText('Extensions: Deprecated')
}
