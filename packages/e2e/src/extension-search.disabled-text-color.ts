import type { Test } from '@lvce-editor/test-with-playwright'

export const test: Test = async ({ expect, ExtensionSearch, Locator }) => {
  await ExtensionSearch.open()
  await ExtensionSearch.setExtensionStatus('builtin.theme-atom-one-dark', 'disabled')
  await ExtensionSearch.setExtensionStatus('builtin.theme-ayu', 'disabled')
  await ExtensionSearch.handleInput('@disabled')

  const listItem = Locator('.ExtensionListItemDisabled:not(.ExtensionActive)').first()
  await expect(listItem).toBeVisible()
  await expect(listItem).toHaveCSS('color', 'rgba(204, 204, 204, 0.5)')
}
