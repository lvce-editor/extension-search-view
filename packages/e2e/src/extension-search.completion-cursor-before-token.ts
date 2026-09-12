import type { Test } from '@lvce-editor/test-with-playwright'

export const test: Test = async ({ expect, ExtensionSearch, Locator }) => {
  // arrange
  await ExtensionSearch.open()

  // act
  await ExtensionSearch.handleInput('theme @en', 1, 5)

  // assert
  const widget = Locator('.ExtensionSearchCompletionWidget')
  await expect(widget).toHaveCount(0)
}
