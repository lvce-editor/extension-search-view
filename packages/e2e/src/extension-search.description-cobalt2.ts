import type { Test } from '@lvce-editor/test-with-playwright'

export const test: Test = async ({ expect, ExtensionSearch, Locator }) => {
  // arrange
  await ExtensionSearch.open()

  // act
  await ExtensionSearch.handleInput('@id:builtin.theme-cobalt2')

  // assert
  const description = Locator('.ExtensionListItemDescription')
  await expect(description).toHaveText('Theme based on the the Official Cobalt2 theme by Wes Bos.')
}
