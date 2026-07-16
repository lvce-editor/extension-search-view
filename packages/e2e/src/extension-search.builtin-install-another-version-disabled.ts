import type { Test } from '@lvce-editor/test-with-playwright'

export const skip = 0

export const test: Test = async ({ Command, expect, ExtensionSearch, Locator }) => {
  const extensionId = 'builtin.theme-atom-one-dark'
  await ExtensionSearch.open()
  await ExtensionSearch.handleInput(`@id:${extensionId}`)

  const settingsButton = Locator('.ExtensionSettingsButton')
  await expect(settingsButton).toBeVisible()
  await Command.execute('SearchExtensions.handleSettingsButtonClick', 0)

  const installAnotherVersion = Locator('.MenuItem', { hasText: 'Install Another Version' })
  await expect(installAnotherVersion).toBeVisible()
  await expect(installAnotherVersion).toHaveAttribute('aria-disabled', 'true')
}
