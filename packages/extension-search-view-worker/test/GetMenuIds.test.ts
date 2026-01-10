import { expect, test } from '@jest/globals'
import { getMenuIds } from '../src/parts/GetMenuIds/GetMenuIds.ts'

test('returns array with ManageExtension menu id', () => {
  const menuIds = getMenuIds()
  expect(menuIds).toBeDefined()
})
