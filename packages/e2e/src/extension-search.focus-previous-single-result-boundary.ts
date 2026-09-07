import type { Test } from '@lvce-editor/test-with-playwright'

export const test: Test = async ({ expect, ExtensionSearch, Locator }) => {
  await ExtensionSearch.open()
  await ExtensionSearch.handleInput('atom')
  await ExtensionSearch.focusFirst()
  await expect(Locator('.ExtensionActive')).toHaveAttribute('aria-posinset', '1')
  await ExtensionSearch.focusPrevious()
  await ExtensionSearch.focusPrevious()
  await expect(Locator('.ExtensionActive')).toHaveCount(1)
  await expect(Locator('.ExtensionActive')).toHaveAttribute('aria-posinset', '1')
  await expect(Locator('.ExtensionActive')).toHaveAttribute('aria-setsize', '1')
  await expect(Locator('.ExtensionActive .ExtensionListItemName')).toHaveText('Atom One Dark Theme')
}
