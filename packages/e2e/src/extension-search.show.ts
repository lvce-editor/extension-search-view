import type { Test } from '@lvce-editor/test-with-playwright'

export const test: Test = async ({ Locator, expect, SideBar }) => {
  // act
  await SideBar.open('Extensions')

  // assert
  const extensionsView = Locator('.Extensions')
  await expect(extensionsView).toBeVisible()
}
