import type { Test } from '@lvce-editor/test-with-playwright'

export const skip = navigator.platform === 'Win32'

export const test: Test = async ({ ColorTheme, expect, ExtensionSearch, Locator }) => {
  // arrange
  await ExtensionSearch.open()
  await ExtensionSearch.setExtensionStatus('builtin.theme-atom-one-dark', 'disabled')
  await ExtensionSearch.setExtensionStatus('builtin.theme-ayu', 'disabled')
  await ExtensionSearch.handleInput('@disabled')

  // act
  await ColorTheme.setColorTheme('ayu')

  // assert
  const listItem = Locator('.ExtensionListItemDisabled:not(.ExtensionActive)').first()
  await expect(listItem).toBeVisible()
  await expect(listItem).toHaveCSS('color', 'color(srgb 0.378824 0.398039 0.42)')
}
