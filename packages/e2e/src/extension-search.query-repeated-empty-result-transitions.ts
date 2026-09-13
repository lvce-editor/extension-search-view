import type { Test } from '@lvce-editor/test-with-playwright'

export const test: Test = async ({ expect, ExtensionSearch, Locator }) => {
  // arrange
  await ExtensionSearch.open()
  const message = Locator('.NoExtensionsFoundMessage')
  const names = Locator('.ExtensionListItemName')

  // act
  await ExtensionSearch.handleInput('atom')

  // assert
  await expect(names).toHaveText('Atom One Dark Theme')

  // act
  await ExtensionSearch.handleInput('@id:missing.extension')

  // assert
  await expect(names).toHaveCount(0)
  await expect(message).toBeVisible()

  // act
  await ExtensionSearch.handleInput('@category:"themes"')

  // assert
  await expect(message).toHaveCount(0)
  await expect(names).toHaveCount(2)

  // act
  await ExtensionSearch.handleInput('@category:"missing"')

  // assert
  await expect(names).toHaveCount(0)
  await expect(message).toBeVisible()

  // act
  await ExtensionSearch.handleInput('atom')

  // assert
  await expect(message).toHaveCount(0)
  await expect(names).toHaveText('Atom One Dark Theme')
}
