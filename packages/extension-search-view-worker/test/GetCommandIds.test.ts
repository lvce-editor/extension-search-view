import { expect, test } from '@jest/globals'
import * as GetCommandIds from '../src/parts/GetCommandIds/GetCommandIds.ts'

test('returns the commandIds array', () => {
  expect(GetCommandIds.getCommandIds()).toBeDefined()
})
