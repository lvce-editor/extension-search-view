import { expect, jest, test } from '@jest/globals'
import * as RendererWorker from '../src/parts/RendererWorker/RendererWorker.ts'
import { setFocus } from '../src/parts/SetFocus/SetFocus.ts'

test('setFocus calls RPC with correct parameters', async () => {
  const mockRpc = {
    invoke: jest.fn(),
  } as any
  RendererWorker.set(mockRpc)
  const focusId = 123
  await setFocus(focusId)
  expect(mockRpc.invoke).toHaveBeenCalledWith('Focus.setFocus', focusId)
})
