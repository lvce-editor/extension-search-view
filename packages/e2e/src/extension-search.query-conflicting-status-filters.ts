import type { Test } from '@lvce-editor/test-with-playwright'

export const test: Test = async ({ expect, ExtensionSearch, Locator }) => {
  // arrange
  await ExtensionSearch.open()
  await ExtensionSearch.setExtensionStatus('builtin.theme-atom-one-dark', 'disabled')

  // act
  await ExtensionSearch.handleInput('@enabled@disabled')

  // assert
  const items = Locator('.ExtensionListItem')
  await expect(items).toHaveCount(0)
  const message = Locator('.NoExtensionsFoundMessage')
  await expect(message).toHaveText('No extensions found.')

  // act
  await ExtensionSearch.handleInput('@disabled')

  // assert
  await expect(message).toHaveCount(0)
  const action = Locator('.ExtensionActionButton[name="builtin.theme-atom-one-dark"]').first()
  await expect(action).toHaveText('Enable')
}
