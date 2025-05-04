import { expect, jest, test } from '@jest/globals'
import * as ParentRpc from '../src/parts/ParentRpc/ParentRpc.ts'
import { setFocus } from '../src/parts/SetFocus/SetFocus.ts'

test('setFocus calls RPC with correct parameters', async () => {
  const mockRpc = {
    invoke: jest.fn(),
  } as any
  ParentRpc.set(mockRpc)
  const focusId = 123
  await setFocus(focusId)
  expect(mockRpc.invoke).toHaveBeenCalledWith('Focus.setFocus', focusId)
})
