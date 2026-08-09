import type { Test } from '@lvce-editor/test-with-playwright'

export const test: Test = async ({ expect, ExtensionSearch, Locator }) => {
  await ExtensionSearch.open()
  await ExtensionSearch.handleInput('@category:"themes"')
  await ExtensionSearch.focusFirst()
  await ExtensionSearch.focusNext()
  const activeItem = Locator('.ExtensionActive')
  await expect(activeItem).toHaveAttribute('aria-posinset', '2')
}
