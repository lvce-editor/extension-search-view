import { jest, test, expect } from '@jest/globals'
import * as RpcId from '../src/parts/RpcId/RpcId.ts'
import * as RpcRegistry from '../src/parts/RpcRegistry/RpcRegistry.ts'
import { setFocus } from '../src/parts/SetFocus/SetFocus.ts'

test('setFocus calls RPC with correct parameters', async () => {
  const mockRpc = {
    invoke: jest.fn(),
  } as any
  RpcRegistry.set(RpcId.RendererWorker, mockRpc)
  const focusId = 123
  await setFocus(focusId)
  expect(mockRpc.invoke).toHaveBeenCalledWith('Focus.setFocus', focusId)
})
