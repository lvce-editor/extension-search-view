import { expect, test } from '@jest/globals'
import { ExtensionManagementWorker, RendererWorker } from '@lvce-editor/rpc-registry'
import { initializeExtensionManagementWorker } from '../src/parts/InitializeExtensionManagementWorker/InitializeExtensionManagementWorker.ts'

test('initializeExtensionManagementWorker connects only to extension management', async () => {
  using rendererRpc = RendererWorker.registerMockRpc({
    'SendMessagePortToExtensionHostWorker.sendMessagePortToExtensionManagementWorker'() {},
  })

  await initializeExtensionManagementWorker()

  expect(rendererRpc.invocations).toEqual([
    ['SendMessagePortToExtensionHostWorker.sendMessagePortToExtensionManagementWorker', expect.anything(), 'Extensions.handleMessagePort', 0],
  ])
  await ExtensionManagementWorker.dispose()
})
