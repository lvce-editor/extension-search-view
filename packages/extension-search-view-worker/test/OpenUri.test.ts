import { expect, jest, test } from '@jest/globals'
import * as OpenUri from '../src/parts/OpenUri/OpenUri.ts'
import * as ParentRpc from '../src/parts/ParentRpc/ParentRpc.ts'

test('openUri calls Main.openUri with correct parameters', async () => {
  const uri = 'https://example.com'
  const mockFn = jest.fn()
  const mockRpc = {
    invoke: mockFn,
  } as any
  ParentRpc.set(mockRpc)
  await OpenUri.openUri(uri)
  expect(mockFn).toHaveBeenCalledWith('Main.openUri', uri)
})
