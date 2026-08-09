import type { Test } from '@lvce-editor/test-with-playwright'

export const test: Test = async ({ expect, ExtensionSearch, Locator }) => {
  await ExtensionSearch.open()
  await ExtensionSearch.handleInput('@', 1, 1)
  const element = Locator('.ExtensionSearchCompletionItem').first()
  await expect(element).toHaveCSS('text-align', 'left')
}
