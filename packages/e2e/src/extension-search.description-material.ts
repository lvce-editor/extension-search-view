import type { Test } from '@lvce-editor/test-with-playwright'

export const test: Test = async ({ expect, ExtensionSearch, Locator }) => {
  // arrange
  await ExtensionSearch.open()

  // act
  await ExtensionSearch.handleInput('@id:builtin.theme-material')

  // assert
  const description = Locator('.ExtensionListItemDescription')
  await expect(description).toHaveText('The most epic theme now for Visual Studio Code')
}
