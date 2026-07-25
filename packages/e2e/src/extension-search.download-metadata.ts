import type { Test } from '@lvce-editor/test-with-playwright'

export const skip = 0

export const test: Test = async ({ expect, ExtensionSearch, Locator }) => {
  await ExtensionSearch.open()
  await ExtensionSearch.handleInput('atom')
  const downloads = Locator('.ExtensionListItemDownloadCount')
  await expect(downloads).toHaveText('n/a')
  await expect(downloads).toHaveAttribute('title', 'Downloads: n/a')
  await expect(downloads).toHaveAttribute('aria-label', 'Downloads: n/a')
}
