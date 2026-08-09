import type { Test } from '@lvce-editor/test-with-playwright'

export const test: Test = async ({ expect, ExtensionSearch, Locator }) => {
  const extensionId = 'builtin.theme-atom-one-dark'
  await ExtensionSearch.open()
  await ExtensionSearch.clearSearchResults()
  const query = `@id:${extensionId}`
  await ExtensionSearch.handleInput(query, 1, query.length)
  const extensionItems = Locator('.ExtensionListItem')
  await expect(extensionItems).toHaveCount(1)

  await ExtensionSearch.setExtensionStatus(extensionId, 'not-installed', false)

  const buttons = Locator('.ExtensionListItem .ExtensionActionButton')
  await expect(buttons).toHaveCount(1)
  await expect(buttons.first()).toHaveText('Install')
}
