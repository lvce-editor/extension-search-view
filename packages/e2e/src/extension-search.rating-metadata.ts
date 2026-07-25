import type { Test } from '@lvce-editor/test-with-playwright'

export const skip = 0

export const test: Test = async ({ expect, ExtensionSearch, Locator }) => {
  await ExtensionSearch.open()
  await ExtensionSearch.handleInput('atom')
  const rating = Locator('.ExtensionListItemRating')
  await expect(rating).toHaveText('n/a')
  await expect(rating).toHaveAttribute('title', 'Rating: n/a')
  await expect(rating).toHaveAttribute('aria-label', 'Rating: n/a')
}
