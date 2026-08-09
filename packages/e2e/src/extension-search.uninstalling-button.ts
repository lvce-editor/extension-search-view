import type { Test } from '@lvce-editor/test-with-playwright'

export const test: Test = async ({ expect, ExtensionSearch, Locator }) => {
  const extensionId = 'builtin.theme-atom-one-dark'
  await ExtensionSearch.open()
  await ExtensionSearch.handleInput(`@id:${extensionId}`)

  await ExtensionSearch.setExtensionStatus(extensionId, 'uninstalling', false)

  const button = Locator('.ExtensionListItem .ExtensionActionButton').first()
  await expect(button).toHaveText('Uninstalling')
  await expect(button).toHaveAttribute('disabled', '')
}
