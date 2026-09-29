import type { Test } from '@lvce-editor/test-with-playwright'
import { addLifecycleExtension, extensionId, runningExtensionSelector } from '../fixtures/sample.extension-disable-lifecycle/test.js'

export const name = 'extension-search.disable-removes-running-extension'

export const test: Test = async ({ expect, ExtensionSearch, Locator, RunningExtensions, ...api }) => {
  await addLifecycleExtension(api)
  await RunningExtensions.show()
  const runningExtensionsView = Locator('.RunningExtensions')
  const runningExtension = Locator(runningExtensionSelector, { hasText: extensionId })
  await expect(runningExtensionsView).toBeVisible()
  await expect(runningExtension).toBeVisible()

  await ExtensionSearch.open()
  await ExtensionSearch.handleInput(extensionId)
  const disableButton = Locator('.ExtensionActionButton', { hasText: 'Disable' })
  await expect(disableButton).toBeVisible()
  await disableButton.click()

  await expect(runningExtensionsView).toBeVisible()
  await expect(runningExtension).toBeHidden()

  const enableButton = Locator('.ExtensionActionButton', { hasText: 'Enable' })
  await expect(enableButton).toBeVisible()
  await enableButton.click()
}
