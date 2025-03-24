import { expect, test } from '@jest/globals'
import * as GetActionVirtualDom from '../src/parts/GetActionVirtualDom/GetActionVirtualDom.ts'
import * as ActionType from '../src/parts/ActionType/ActionType.ts'

test('returns empty array for unknown action type', () => {
  const action = {
    type: 999,
    id: 'test-id',
    icon: 'test-icon',
    command: 'test-command',
  }
  expect(GetActionVirtualDom.getActionVirtualDom(action)).toEqual([])
})

test('returns button virtual dom for button action type', () => {
  const action = {
    type: ActionType.Button,
    id: 'test-id',
    icon: 'test-icon',
    command: 'test-command',
  }
  const result = GetActionVirtualDom.getActionVirtualDom(action)
  expect(result).toBeDefined()
  expect(Array.isArray(result)).toBe(true)
})
