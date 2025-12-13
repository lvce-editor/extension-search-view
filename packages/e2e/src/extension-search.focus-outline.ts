import type { Test } from '@lvce-editor/test-with-playwright'

export const test: Test = async ({ Command, expect, ExtensionSearch, Locator }) => {
  // arrange
  await ExtensionSearch.open()
  const extensionsView = Locator('.Extensions')
  await expect(extensionsView).toBeVisible()
  await ExtensionSearch.handleInput('atom')

  // act
  await Command.execute('Extensions.handleClick', -1)

  // assert
  // TODO verify focusoutline
}
