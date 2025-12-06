import { expect, test } from '@jest/globals'
import * as ActionType from '../src/parts/ActionType/ActionType.ts'
import * as GetActionVirtualDom from '../src/parts/GetActionVirtualDom/GetActionVirtualDom.ts'

test('returns empty array for unknown action type', () => {
  const action = {
    command: 'test-command',
    icon: 'test-icon',
    id: 'test-id',
    type: 999,
  }
  expect(GetActionVirtualDom.getActionVirtualDom(action)).toEqual([])
})

test('returns button virtual dom for button action type', () => {
  const action = {
    command: 'test-command',
    icon: 'test-icon',
    id: 'test-id',
    type: ActionType.Button,
  }
  const result = GetActionVirtualDom.getActionVirtualDom(action)
  expect(result).toBeDefined()
  expect(Array.isArray(result)).toBe(true)
})
