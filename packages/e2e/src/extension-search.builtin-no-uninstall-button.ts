import type { Test } from '@lvce-editor/test-with-playwright'

export const skip = 0

export const test: Test = async ({ Command, expect, ExtensionSearch, Locator }) => {
  const extensionId = 'builtin.theme-atom-one-dark'
  await ExtensionSearch.open()
  await ExtensionSearch.handleInput(extensionId)

  await Command.execute('Extensions.setExtensionStatus', extensionId, 'enabled')

  const buttons = Locator('.ExtensionListItem .ExtensionActionButton')
  await expect(buttons).toHaveCount(1)
  await expect(buttons.first()).toHaveText('Disable')
}
