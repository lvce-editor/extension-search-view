import type { Test } from '@lvce-editor/test-with-playwright'

export const skip = 0

export const test: Test = async ({ Command, expect, Extension, ExtensionSearch, Locator }) => {
  const extensionId = 'test.commands-test'
  await Extension.addWebExtension(import.meta.resolve('../fixtures/extension-commands'))
  await ExtensionSearch.open()
  await ExtensionSearch.handleInput(extensionId)

  await Command.execute('Extensions.setExtensionStatus', extensionId, 'not-installed')

  const buttons = Locator('.ExtensionListItem .ExtensionActionButton')
  await expect(buttons).toHaveCount(1)
  await expect(buttons.first()).toHaveText('Install')
}
