import type { Test } from '@lvce-editor/test-with-playwright'

export const skip = 0

export const test: Test = async ({ expect, ExtensionSearch, Locator }) => {
  await ExtensionSearch.open()
  await ExtensionSearch.handleInput('@id:builtin.theme-ayu')
  const description = Locator('.ExtensionListItemDescription')
  await expect(description).toHaveText(
    'A simple theme with bright colors and comes in three versions — dark, light and mirage for all day long comfortable work.',
  )
}
