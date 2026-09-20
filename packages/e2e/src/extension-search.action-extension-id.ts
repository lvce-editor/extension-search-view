import type { Test } from '@lvce-editor/test-with-playwright'

export const test: Test = async ({ expect, ExtensionSearch, Locator }) => {
  // arrange
  const extensionId = 'builtin.theme-atom-one-dark'
  await ExtensionSearch.open()

  // act
  await ExtensionSearch.handleInput(`@id:${extensionId}`)

  // assert
  const button = Locator('.ExtensionActionButton')
  await expect(button).toHaveCount(1)
  await expect(button).toHaveAttribute('name', extensionId)
}
