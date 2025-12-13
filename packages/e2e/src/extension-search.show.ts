import type { Test } from '@lvce-editor/test-with-playwright'

<<<<<<< HEAD
export const test: Test = async ({ Locator, expect, ExtensionSearch }) => {
=======
export const test: Test = async ({ expect, Locator, SideBar }) => {
>>>>>>> origin/main
  // act
  await ExtensionSearch.open()

  // assert
  const extensionsView = Locator('.Extensions')
  await expect(extensionsView).toBeVisible()
}
