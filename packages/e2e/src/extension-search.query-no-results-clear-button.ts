import type { Test } from '@lvce-editor/test-with-playwright'

export const test: Test = async ({ expect, ExtensionSearch, Locator }) => {
  await ExtensionSearch.open()
  await ExtensionSearch.handleInput('@id:missing.extension')
  await expect(Locator('.NoExtensionsFoundMessage')).toBeVisible()
  const clearButton = Locator('.SearchFieldButton').first()
  await expect(clearButton).not.toHaveClass('SearchFieldButtonDisabled')
  await clearButton.click()

  await expect(Locator('.Extensions .MultilineInputBox')).toHaveValue('')
  await expect(Locator('.NoExtensionsFoundMessage')).toHaveCount(0)
  await expect(Locator('.ExtensionListItem')).toHaveCount(10)
  await expect(clearButton).toHaveClass('SearchFieldButtonDisabled')
}
