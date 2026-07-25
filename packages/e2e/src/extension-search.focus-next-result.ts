import type { Test } from '@lvce-editor/test-with-playwright'

export const skip = 0

export const test: Test = async ({ Command, expect, ExtensionSearch, Locator }) => {
  await ExtensionSearch.open()
  await ExtensionSearch.handleInput('@category:"themes"')
  await Command.execute('Extensions.focusFirst')
  await Command.execute('Extensions.focusNext')
  const activeItem = Locator('.ExtensionActive')
  await expect(activeItem).toHaveAttribute('aria-posinset', '2')
}
