import { expect, test } from '@jest/globals'
import { RendererWorker } from '@lvce-editor/rpc-registry'
import { sendMessagePortToExtensionHostWorker } from '../src/parts/SendMessagePortToExtensionHostWorker/SendMessagePortToExtensionHostWorker.ts'

test('sendMessagePortToExtensionHostWorker calls RPC with correct parameters', async () => {
  const mockRpc = RendererWorker.registerMockRpc({
    'SendMessagePortToExtensionHostWorker.sendMessagePortToExtensionHostWorker'() {},
  })
  // @ts-ignore
  const port = { postMessage: (): void => {} }
  await sendMessagePortToExtensionHostWorker(port)
  expect(mockRpc.invocations).toEqual([
    ['SendMessagePortToExtensionHostWorker.sendMessagePortToExtensionHostWorker', port, 'HandleMessagePort.handleMessagePort2', 0],
  ])
})
