import type { Test } from '@lvce-editor/test-with-playwright'

export const test: Test = async ({ expect, ExtensionSearch, KeyBoard, Locator }) => {
  // arrange
  const extensionId = 'builtin.theme-atom-one-dark'
  await ExtensionSearch.open()
  await ExtensionSearch.handleInput(`@id:${extensionId}`)

  try {
    // act
    await ExtensionSearch.handleSettingsButtonClick(0)

    // assert
    const installAnotherVersion = Locator('.MenuItem', { hasText: 'Install Another Version' })
    await expect(installAnotherVersion).toBeVisible()
    await expect(installAnotherVersion).toHaveAttribute('aria-disabled', 'true')
  } finally {
    await KeyBoard.press('Escape')
    await ExtensionSearch.clearSearchResults()
  }
}
