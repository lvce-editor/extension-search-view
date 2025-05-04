import { beforeEach, expect, jest, test } from '@jest/globals'
import * as ParentRpc from '../src/parts/ParentRpc/ParentRpc.ts'

beforeEach(() => {
  jest.resetAllMocks()
})

const mockRpc = {
  invoke: jest.fn(),
} as any

test('invoke - calls rpc.invoke with correct arguments', async () => {
  mockRpc.invoke.mockResolvedValue(42)
  ParentRpc.set(mockRpc)
  // @ts-ignore
  const result = await ParentRpc.invoke('test.method', 1, 'abc')
  expect(mockRpc.invoke).toHaveBeenCalledWith('test.method', 1, 'abc')
  expect(result).toBe(42)
})

test('invoke - handles error from rpc', async () => {
  mockRpc.invoke.mockRejectedValue(new Error('test error'))
  ParentRpc.set(mockRpc)
  // @ts-ignore
  await expect(ParentRpc.invoke('test.method')).rejects.toThrow('test error')
})

test('invoke - throws if rpc is not set', () => {
  // @ts-ignore
  ParentRpc.set(undefined)
  // @ts-ignore
  expect(() => ParentRpc.invoke('test.method')).toThrow()
})
