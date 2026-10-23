import type { Test } from '@lvce-editor/test-with-playwright'

export const test: Test = async ({ ColorTheme, expect, ExtensionSearch, Locator }) => {
  // arrange
  await ExtensionSearch.open()
  await ColorTheme.setColorTheme('slime')
  await ExtensionSearch.handleInput('atom')
  const extensionItem = Locator('.ExtensionListItem')
  await expect(extensionItem).toHaveCount(1)
  const listItems = Locator('.ListItems')
  const extensionInput = Locator('.MultilineInputBox')

  // act
  await ExtensionSearch.handleClick(-1)
  await ExtensionSearch.focusFirst()

  // assert
  await expect(listItems).toBeFocused()
  await expect(extensionItem).toHaveAttribute('id', 'ExtensionActive')
  await expect(extensionItem).toHaveCSS('background-color', 'rgb(81, 95, 89)')

  // act
  await ExtensionSearch.handleInput('atom')

  // assert
  await expect(extensionInput).toBeFocused()
  await expect(extensionItem).toHaveAttribute('id', 'ExtensionActive')
  await expect(extensionItem).toHaveCSS('background-color', 'rgba(59, 71, 66, 0.5)')

  // act
  await ExtensionSearch.handleClick(-1)
  await ExtensionSearch.focusFirst()

  // assert
  await expect(listItems).toBeFocused()
  await expect(extensionItem).toHaveAttribute('id', 'ExtensionActive')
  await expect(extensionItem).toHaveCSS('background-color', 'rgb(81, 95, 89)')
}
