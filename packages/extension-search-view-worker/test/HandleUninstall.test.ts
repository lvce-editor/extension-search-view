import { expect, test } from '@jest/globals'
import * as CreateDefaultState from '../src/parts/CreateDefaultState/CreateDefaultState.ts'
import * as HandleUninstall from '../src/parts/HandleUninstall/HandleUninstall.ts'

test('handleUninstall returns state', async () => {
  const state = CreateDefaultState.createDefaultState()
  const id = 'test-id'

  const result = await HandleUninstall.handleUninstall(state, id)
  expect(result).toBe(state)
})
