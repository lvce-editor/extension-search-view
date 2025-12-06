import type { Test } from '@lvce-editor/test-with-playwright'

export const test: Test = async ({ Command, expect, Locator, SideBar }) => {
  // arrange
  await SideBar.open('Extensions')
  const extensionsView = Locator('.Extensions')
  await expect(extensionsView).toBeVisible()

  // act
  await Command.execute('Extensions.handleInput', 'not-found', 2)

  // assert
  const listItems = Locator('.Extensions .ListItems')
  await expect(listItems).toHaveCount(0)
  const noExtensionsFoundMessage = Locator('.Extensions > div:nth-of-type(2)')
  await expect(noExtensionsFoundMessage).toBeVisible()
  await expect(noExtensionsFoundMessage).toHaveText('No extensions found.')
}
