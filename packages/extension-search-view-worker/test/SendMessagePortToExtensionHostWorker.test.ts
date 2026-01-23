import { expect, test } from '@jest/globals'
import { RendererWorker } from '@lvce-editor/rpc-registry'
import { sendMessagePortToExtensionHostWorker } from '../src/parts/SendMessagePortToExtensionHostWorker/SendMessagePortToExtensionHostWorker.ts'

interface MessagePort {
  postMessage(message: unknown): void
}

test('sendMessagePortToExtensionHostWorker calls RPC with correct parameters', async () => {
  using mockRpc = RendererWorker.registerMockRpc({
    'SendMessagePortToExtensionHostWorker.sendMessagePortToExtensionHostWorker'() {},
  })
  const port: MessagePort = { postMessage: (): void => {} }
  await sendMessagePortToExtensionHostWorker(port)
  expect(mockRpc.invocations).toEqual([
    ['SendMessagePortToExtensionHostWorker.sendMessagePortToExtensionHostWorker', port, 'HandleMessagePort.handleMessagePort2', 0],
  ])
})
