import type { Test } from '@lvce-editor/test-with-playwright'

export const skip = 0

export const test: Test = async ({ Command, expect, ExtensionSearch, Locator }) => {
  const extensionId = 'builtin.theme-atom-one-dark'
  await ExtensionSearch.open()
  await ExtensionSearch.clearSearchResults()
  const query = `@id:${extensionId}`
  await Command.execute('Extensions.handleInput', query, 1, query.length)
  const extensionItems = Locator('.ExtensionListItem')
  await expect(extensionItems).toHaveCount(1)

  await Command.execute('Extensions.setExtensionStatus', extensionId, 'not-installed', false)

  const buttons = Locator('.ExtensionListItem .ExtensionActionButton')
  await expect(buttons).toHaveCount(1)
  await expect(buttons.first()).toHaveText('Install')
}
