import type { Test } from '@lvce-editor/test-with-playwright'

export const skip = 0

export const test: Test = async ({ Command, expect, ExtensionSearch, Locator }) => {
  const extensionId = 'builtin.theme-atom-one-dark'
  await ExtensionSearch.open()
  const query = `@id:${extensionId}`
  await Command.execute('Extensions.handleInput', query, 1, query.length)
  await Command.execute('Extensions.setExtensionStatus', extensionId, 'enabled', false)

  const footer = Locator('.ExtensionListItemFooter')
  await expect(footer).toHaveCSS('justify-content', 'flex-end')
  await expect(footer).toHaveCSS('padding-right', '2px')

  const author = Locator('.ExtensionListItemAuthorName')
  await expect(author).toHaveCSS('flex-grow', '1')

  const actions = Locator('.ExtensionActions')
  await expect(actions).toHaveCSS('display', 'flex')
  await expect(actions).toHaveCSS('gap', '6px')

  const buttons = Locator('.ExtensionActionButton')
  await expect(buttons).toHaveCount(2)
  await expect(buttons.first()).toHaveCSS('padding-left', '5px')
  await expect(buttons.first()).toHaveCSS('padding-right', '5px')
}
