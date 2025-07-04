import { test } from '@jest/globals'
import { mockWorkerGlobalRpc } from '@lvce-editor/rpc'

test('main', async () => {
  const { start, dispose } = mockWorkerGlobalRpc()
  start()
  await import('../src/extensionSearchViewWorkerMain.ts')
  dispose()
})
