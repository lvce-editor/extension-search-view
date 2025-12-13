import type { Test } from '@lvce-editor/test-with-playwright'

<<<<<<< HEAD
export const test: Test = async ({ Locator, expect, ExtensionSearch }) => {
=======
export const test: Test = async ({ Command, expect, Locator, SideBar }) => {
>>>>>>> origin/main
  // arrange
  await ExtensionSearch.open()
  const extensionsView = Locator('.Extensions')
  await expect(extensionsView).toBeVisible()

  // act
  await ExtensionSearch.handleInput('atom')

  // assert
  const listItems = Locator('.Extensions .ListItems')
  await expect(listItems).toHaveAttribute('tabIndex', '0')
  await expect(listItems).toHaveAttribute('aria-label', 'Extensions')
  await expect(listItems).toHaveAttribute('role', 'list')
  await expect(listItems).toHaveCount(1)
  const firstItem = listItems.locator('.ExtensionListItem')
  await expect(firstItem).toHaveAttribute('aria-roledescription', 'Extension')
  await expect(firstItem).toHaveAttribute('aria-posinset', '1')
  await expect(firstItem).toHaveAttribute('aria-setsize', '1')
  await expect(firstItem).toHaveAttribute('role', 'listitem')
}
