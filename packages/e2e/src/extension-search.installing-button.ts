import type { Test } from '@lvce-editor/test-with-playwright'

export const skip = 0

export const test: Test = async ({ Command, expect, ExtensionSearch, Locator }) => {
  const extensionId = 'builtin.theme-atom-one-dark'
  await ExtensionSearch.open()
  await ExtensionSearch.handleInput(`@id:${extensionId}`)

  await Command.execute('Extensions.setExtensionStatus', extensionId, 'installing', false)

  const button = Locator('.ExtensionListItem .ExtensionActionButton').first()
  await expect(button).toHaveText('Installing')
  await expect(button).toHaveAttribute('disabled', '')
}
