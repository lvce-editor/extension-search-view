import type { Test } from '@lvce-editor/test-with-playwright'

export const test: Test = async ({ expect, ExtensionSearch, Locator }) => {
  await ExtensionSearch.open()
  await ExtensionSearch.handleInput('@linked')

  const linkedIcon = Locator('.ExtensionListItemLinkedIcon')
  await expect(linkedIcon).toHaveCount(1)
  await expect(linkedIcon).toHaveAttribute('title', 'Extension is linked')
}
