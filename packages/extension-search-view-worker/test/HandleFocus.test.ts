import { expect, jest, test } from '@jest/globals'
import { createDefaultState } from '../src/parts/CreateDefaultState/CreateDefaultState.ts'
import { handleFocus } from '../src/parts/HandleFocus/HandleFocus.ts'
import { RendererWorker } from '../src/parts/RpcId/RpcId.ts'
import * as RpcRegistry from '../src/parts/RpcRegistry/RpcRegistry.ts'

test('handleFocus invokes RPC focus method', async () => {
  const mockFn = jest.fn()
  const mockRpc = {
    invoke: mockFn,
  } as any
  RpcRegistry.set(RendererWorker, mockRpc)
  const state = createDefaultState()
  expect(await handleFocus(state)).toBe(state)
  expect(mockFn).toHaveBeenCalledTimes(1)
  expect(mockFn).toHaveBeenCalledWith('Focus.setFocus', 15)
})
