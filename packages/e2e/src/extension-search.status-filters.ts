import type { Test } from '@lvce-editor/test-with-playwright'

export const test: Test = async ({ expect, ExtensionSearch, Locator }) => {
  const extensionId = 'builtin.theme-atom-one-dark'
  const action = Locator(`.ExtensionActionButton[name="${extensionId}"]`)

  await ExtensionSearch.open()
  await ExtensionSearch.setExtensionStatus(extensionId, 'disabled')

  await ExtensionSearch.handleInput('@disabled')
  await expect(action.first()).toHaveText('Enable')

  await ExtensionSearch.handleInput('@enabled')
  await expect(action).toHaveCount(0)

  await ExtensionSearch.setExtensionStatus(extensionId, 'enabled')
  await ExtensionSearch.handleInput('@enabled')
  await expect(action.first()).toHaveText('Disable')

  await ExtensionSearch.handleInput('@disabled')
  await expect(action).toHaveCount(0)
}
