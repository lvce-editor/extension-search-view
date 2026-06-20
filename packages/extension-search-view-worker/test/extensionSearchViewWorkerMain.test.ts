import { expect, test } from '@jest/globals'
import { mockWorkerGlobalRpc } from '@lvce-editor/rpc'

test('main', async () => {
  const { dispose, start } = mockWorkerGlobalRpc()
  start()
  const module = await import('../src/extensionSearchViewWorkerMain.ts')
  expect(Object.keys(module)).toHaveLength(0)
  dispose()
})
