import type { Test } from '@lvce-editor/test-with-playwright'

export const test: Test = async ({ Locator, expect, ExtensionSearch }) => {
  // act
  await ExtensionSearch.open()
  const extensionsView = Locator('.Extensions')
  await expect(extensionsView).toBeVisible()

  // assert
  const input = extensionsView.locator('.MultilineInputBox')
  await expect(input).toBeVisible()
  await expect(input).toHaveAttribute('type', 'search')
  await expect(input).toHaveAttribute('spellcheck', 'false')
  await expect(input).toHaveAttribute('autocapitalize', 'off')
  await expect(input).toHaveAttribute('placeholder', 'Search Extensions in Marketplace')
  await expect(input).toHaveAttribute('name', 'extensions')
}
