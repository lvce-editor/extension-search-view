import { expect, test } from '@jest/globals'
import { ExtensionHost, RendererWorker } from '@lvce-editor/rpc-registry'
import { initializeExtensionHostWorker } from '../src/parts/InitializeExtensionHostWorker/InitializeExtensionHostWorker.ts'

test('initializeExtensionHostWorker creates RPC and sets it to ExtensionHostWorker', async () => {
  using mockRpc = RendererWorker.registerMockRpc({
    'SendMessagePortToExtensionHostWorker.sendMessagePortToExtensionHostWorker'() {},
  })
  await initializeExtensionHostWorker()
  expect(mockRpc.invocations.length).toBeGreaterThan(0)
  expect(mockRpc.invocations[0][0]).toBe('SendMessagePortToExtensionHostWorker.sendMessagePortToExtensionHostWorker')
  await ExtensionHost.dispose()
})
