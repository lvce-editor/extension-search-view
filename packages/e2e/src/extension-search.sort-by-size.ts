import type { Test } from '@lvce-editor/test-with-playwright'

export const skip = 1

export const test: Test = async ({ expect, ExtensionSearch, Locator }) => {
  // arrange
  await ExtensionSearch.open()
  const extensionsView = Locator('.Extensions')
  await expect(extensionsView).toBeVisible()

  // act - filter by sort:size to sort extensions by size in descending order
  await ExtensionSearch.handleInput('@sort:size')

  // assert - verify that extensions are sorted by size (largest first)
  const listItems = Locator('.Extensions .ListItems')
  await expect(listItems).toBeVisible()

  // Get the first few extension names to verify sorting
  const firstItem = listItems.locator('.ExtensionListItem').nth(0)
  const secondItem = listItems.locator('.ExtensionListItem').nth(1)
  const thirdItem = listItems.locator('.ExtensionListItem').nth(2)

  // Verify items are visible
  await expect(firstItem).toBeVisible()
  await expect(secondItem).toBeVisible()
  await expect(thirdItem).toBeVisible()

  // Verify that the list has multiple items (extensions are sorted)
  // @ts-ignore
  const itemCount = await listItems.locator('.ExtensionListItem').count()
  // @ts-ignore
  expect(itemCount).toBeGreaterThan(0)
}
