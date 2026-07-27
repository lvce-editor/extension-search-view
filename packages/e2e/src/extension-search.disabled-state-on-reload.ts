import type { Test } from '@lvce-editor/test-with-playwright'

export const skip = 0

export const test: Test = async ({ Command, expect, ExtensionSearch, Locator }) => {
  const extensionId = 'builtin.theme-atom-one-dark'
  await ExtensionSearch.open()
  await ExtensionSearch.handleInput(`@id:${extensionId}`)
  await Command.execute('Extensions.handleEnable', extensionId)

  const button = Locator('.ExtensionListItem .ExtensionActionButton').first()
  await expect(button).toHaveText('Disable')

  try {
    await Command.execute('Extensions.handleDisable', extensionId)
    await expect(button).toHaveText('Enable')

    await Command.execute('Extensions.loadContent', {})
    await ExtensionSearch.handleInput(`@id:${extensionId}`)

    await expect(button).toHaveText('Enable')
  } finally {
    await Command.execute('Extensions.handleEnable', extensionId)
  }
}
