import type { Test } from '@lvce-editor/test-with-playwright'

export const test: Test = async ({ expect, ExtensionSearch, Locator }) => {
  // arrange
  await ExtensionSearch.open()

  // act
  await ExtensionSearch.handleInput('@', 1, 1)

  // assert
  const input = Locator('.Extensions .MultilineInputBox')
  await expect(input).toHaveAttribute('aria-controls', 'ExtensionSearchCompletions')

  // act
  await ExtensionSearch.handleInput('atom', 1, 4)

  // assert
  const widget = Locator('.ExtensionSearchCompletionWidget')
  await expect(widget).toHaveCount(0)
  await expect(input).toHaveAttribute('aria-expanded', 'false')
  await expect(input).toHaveAttribute('aria-controls', null)
  await expect(input).toHaveAttribute('aria-activedescendant', null)
  const name = Locator('.ExtensionListItemName')
  await expect(name).toHaveText('Atom One Dark Theme')
}
