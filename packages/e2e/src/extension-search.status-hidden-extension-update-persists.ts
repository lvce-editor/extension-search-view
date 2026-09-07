import type { Test } from '@lvce-editor/test-with-playwright'

export const test: Test = async ({ expect, ExtensionSearch, Locator }) => {
  const extensionId = 'builtin.theme-atom-one-dark'
  await ExtensionSearch.open()
  await ExtensionSearch.handleInput('ayu')
  const name = Locator('.ExtensionListItemName')
  await expect(name).toHaveText('Ayu Theme')
  await ExtensionSearch.setExtensionStatus(extensionId, 'disabled', true)
  await expect(name).toHaveText('Ayu Theme')
  const disabledItems = Locator('.ExtensionListItemDisabled')
  await expect(disabledItems).toHaveCount(0)

  await ExtensionSearch.handleInput(`@id:${extensionId}`)
  await expect(name).toHaveText('Atom One Dark Theme')
  await expect(disabledItems).toHaveCount(1)
  const action = Locator('.ExtensionActionButton')
  await expect(action).toHaveText('Enable')
}
