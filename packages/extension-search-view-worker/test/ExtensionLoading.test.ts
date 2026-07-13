import { expect, test } from '@jest/globals'
import * as ExtensionLoading from '../src/parts/ExtensionLoading/ExtensionLoading.ts'

test('finishing an old load does not finish a replacement view load', () => {
  const uid = 1
  ExtensionLoading.create(uid)
  const oldToken = ExtensionLoading.getToken(uid)
  ExtensionLoading.create(uid)
  const newToken = ExtensionLoading.getToken(uid)

  ExtensionLoading.finish(uid, oldToken)

  expect(ExtensionLoading.getToken(uid)).toBe(newToken)
  ExtensionLoading.finish(uid, newToken)
  expect(ExtensionLoading.getToken(uid)).toBeUndefined()
})

test('cancel finishes the current load', async () => {
  const uid = 2
  ExtensionLoading.create(uid)
  const pendingLoad = ExtensionLoading.wait(uid)

  ExtensionLoading.cancel(uid)

  await expect(pendingLoad).resolves.toBeUndefined()
  await expect(ExtensionLoading.wait(uid)).resolves.toBeUndefined()
})
