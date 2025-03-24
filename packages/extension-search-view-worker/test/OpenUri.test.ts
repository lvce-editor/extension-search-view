import { expect, test, jest } from '@jest/globals'
import * as OpenUri from '../src/parts/OpenUri/OpenUri.ts'
import * as RpcId from '../src/parts/RpcId/RpcId.ts'
import * as RpcRegistry from '../src/parts/RpcRegistry/RpcRegistry.ts'

test('openUri calls Main.openUri with correct parameters', async () => {
  const uri = 'https://example.com'
  const mockFn = jest.fn()
  const mockRpc = {
    invoke: mockFn,
  } as any
  RpcRegistry.set(RpcId.RendererWorker, mockRpc)
  await OpenUri.openUri(uri)
  expect(mockFn).toHaveBeenCalledWith('Main.openUri', uri)
})
