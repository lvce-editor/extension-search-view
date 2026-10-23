import type { Test } from '@lvce-editor/test-with-playwright'

export const test: Test = async ({ expect, ExtensionSearch, Locator }) => {
  // arrange
  await ExtensionSearch.open()

  // act
  await ExtensionSearch.handleInput('@id:builtin.theme-palenight')

  // assert
  const description = Locator('.ExtensionListItemDescription')
  await expect(description).toHaveText('An elegant and juicy material-inspired theme for Visual Studio Code.')
}
