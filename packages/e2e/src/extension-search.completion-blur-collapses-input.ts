import type { Test } from '@lvce-editor/test-with-playwright'

export const skip = 0

export const test: Test = async ({ expect, ExtensionSearch, Locator }) => {
  await ExtensionSearch.open()
  await ExtensionSearch.handleInput('@', 1, 1)
  await ExtensionSearch.handleBlur()
  const input = Locator('.Extensions .MultilineInputBox')
  await expect(input).toHaveAttribute('aria-expanded', 'false')
}
