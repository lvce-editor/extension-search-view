export const name = 'viewlet.extensions-more-actions'

/** @type {import('@lvce-editor/test-with-playwright').Test} */
export const test = async ({ expect, ExtensionSearch, KeyBoard, Locator }) => {
  await ExtensionSearch.open()
  const moreActions = Locator('.IconButton[title="More Actions"]')
  await expect(moreActions).toBeVisible()
  await moreActions.click()
  const menu = Locator('.Menu')
  await expect(menu).toBeVisible()
  const runningExtensions = menu.locator('.MenuItem', { hasText: 'Show Running Extensions' })
  await expect(runningExtensions).toBeVisible()

  await KeyBoard.press('Escape')
  await expect(menu).toBeHidden()

  await moreActions.click()
  await expect(runningExtensions).toBeVisible()
  await KeyBoard.press('ArrowDown')
  await KeyBoard.press('Enter')
  await expect(menu).toBeHidden()
  await expect(Locator('.RunningExtensions')).toBeVisible()
}
