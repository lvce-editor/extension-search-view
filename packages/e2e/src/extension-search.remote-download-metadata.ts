import type { Test } from '@lvce-editor/test-with-playwright'

export const skip = 0

export const test: Test = async ({ Command, expect, ExtensionSearch, Locator }) => {
  const extensionId = 'builtin.theme-atom-one-dark'
  await ExtensionSearch.open()
  await ExtensionSearch.handleInput(`@id:${extensionId}`)
  await Command.execute('Extensions.setExtensionStatus', extensionId, 'enabled', false)
  const downloadCount = Locator('.ExtensionListItemDownloadCount')
  await expect(downloadCount).toHaveText('n/a')
  await expect(downloadCount).toHaveAttribute('aria-label', 'Downloads: n/a')
  await expect(downloadCount).toHaveAttribute('title', 'Downloads: n/a')
}
