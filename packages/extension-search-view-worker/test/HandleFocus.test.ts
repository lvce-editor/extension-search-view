import { expect, jest, test } from '@jest/globals'
import { createDefaultState } from '../src/parts/CreateDefaultState/CreateDefaultState.ts'
import { handleFocus } from '../src/parts/HandleFocus/HandleFocus.ts'
import * as RendererWorker from '../src/parts/RendererWorker/RendererWorker.ts'

test.skip('handleFocus invokes RPC focus method', async () => {
  const mockFn = jest.fn()
  const mockRpc = {
    invoke: mockFn,
  } as any
  RendererWorker.set(mockRpc)
  const state = createDefaultState()
  expect(await handleFocus(state)).toBe(state)
  expect(mockFn).toHaveBeenCalledTimes(1)
  expect(mockFn).toHaveBeenCalledWith('Focus.setFocus', 15)
})
