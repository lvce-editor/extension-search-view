import type { Test } from '@lvce-editor/test-with-playwright'

export const test: Test = async ({ expect, ExtensionSearch, Locator }) => {
  // arrange
  await ExtensionSearch.open()

  // act
  await ExtensionSearch.handleInput('atom  @en   tail', 1, 9)

  // assert
  const widget = Locator('.ExtensionSearchCompletionWidget')
  await expect(widget).toBeVisible()

  // act
  await ExtensionSearch.acceptCompletion()

  // assert
  const input = Locator('.Extensions .MultilineInputBox')
  await expect(input).toHaveValue('atom  @enabled   tail')
  await expect(widget).toHaveCount(0)
  await expect(input).toHaveAttribute('aria-expanded', 'false')
}
