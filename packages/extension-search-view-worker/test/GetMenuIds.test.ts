import { expect, test } from '@jest/globals'
import { MenuEntryId } from '@lvce-editor/constants'
import { getMenuIds } from '../src/parts/GetMenuIds/GetMenuIds.ts'

test('returns array with ManageExtension menu id', () => {
  const menuIds = getMenuIds()
  expect(menuIds).toEqual([MenuEntryId.ManageExtension])
})
