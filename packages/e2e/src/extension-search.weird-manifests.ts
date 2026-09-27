import type { Test } from '@lvce-editor/test-with-playwright'

export const test: Test = async ({ expect, ExtensionSearch, Locator }) => {
  await ExtensionSearch.open()

  await ExtensionSearch.handleInput('@category:stress-category-target')
  const items = Locator('.ExtensionListItem')
  const names = Locator('.ExtensionListItemName')
  const descriptions = Locator('.ExtensionListItemDescription')
  const icons = Locator('.ExtensionListItemIcon')
  const name = Locator('.ExtensionListItemName')
  await expect(items).toHaveCount(1)
  await expect(names).toHaveText('Many Categories Test Extension')

  const longName = `Long Manifest Name ${'name-segment '.repeat(100)}`
  const longDescription = `Long manifest description ${'description-segment '.repeat(200)}`
  await ExtensionSearch.handleInput('@id:test.extension-search-long-text')
  await expect(names).toHaveText(longName)
  await expect(descriptions).toHaveText(longDescription)

  await ExtensionSearch.handleInput('@id:test.extension-search-gif-icon')
  await expect(icons).toHaveJSProperty('naturalWidth', 1)
  await expect(icons).toHaveJSProperty('naturalHeight', 1)

  await ExtensionSearch.handleInput('@id:test.extension-search-missing-fields')
  await expect(descriptions).toHaveText('n/a')

  const markupName = 'Unicode extension 🧪 日本語 </div><img data-edge=markup onerror=alert(1)>'
  await ExtensionSearch.handleInput('@id:test.extension-search-unicode-markup')
  await expect(name).toHaveText(markupName)
  const injectedImages = Locator('.ExtensionListItemName img')
  await expect(injectedImages).toHaveCount(0)
}
