import type { Test } from '@lvce-editor/test-with-playwright'

export const test: Test = async ({ expect, ExtensionSearch, Locator }) => {
  await ExtensionSearch.open()
  await ExtensionSearch.handleInput('@id:missing.extension')
  const message = Locator('.NoExtensionsFoundMessage')
  await expect(message).toBeVisible()
  const clearButton = Locator('.SearchFieldButton').first()
  await expect(clearButton).not.toHaveClass('SearchFieldButtonDisabled')
  await ExtensionSearch.clearSearchResults()

  const input = Locator('.Extensions .MultilineInputBox')
  await expect(input).toHaveValue('')
  await expect(message).toHaveCount(0)
  const items = Locator('.ExtensionListItem')
  await expect(items).toHaveCount(10)
  await expect(clearButton).toHaveClass('SearchFieldButtonDisabled')
}
