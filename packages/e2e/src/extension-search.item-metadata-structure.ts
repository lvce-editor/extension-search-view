import type { Test } from '@lvce-editor/test-with-playwright'

export const skip = 0

export const test: Test = async ({ expect, ExtensionSearch, Locator }) => {
  await ExtensionSearch.open()
  await ExtensionSearch.handleInput('atom')
  const metadata = Locator('.ExtensionListItemMetadata')
  const statistics = metadata.locator('.ExtensionListItemStatistic')
  await expect(metadata).toBeVisible()
  await expect(statistics).toHaveCount(2)
}
