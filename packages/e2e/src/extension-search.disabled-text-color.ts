import type { Test } from '@lvce-editor/test-with-playwright'

export const skip = navigator.platform === 'Win32'

export const test: Test = async ({ Command, expect, ExtensionSearch, Locator }) => {
  await ExtensionSearch.open()
  await ExtensionSearch.setExtensionStatus('builtin.theme-atom-one-dark', 'disabled')
  await ExtensionSearch.setExtensionStatus('builtin.theme-ayu', 'disabled')
  await ExtensionSearch.handleInput('@disabled')
  await Command.execute('ColorTheme.setColorTheme', 'ayu')

  const listItem = Locator('.ExtensionListItemDisabled:not(.ExtensionActive)').first()
  await expect(listItem).toBeVisible()
  await expect(listItem).toHaveCSS('color', 'color(srgb 0.378824 0.398039 0.42)')
}
