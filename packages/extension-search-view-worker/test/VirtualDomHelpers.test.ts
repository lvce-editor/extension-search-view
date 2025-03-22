import { test, expect } from '@jest/globals'
import * as VirtualDomElements from '../src/parts/VirtualDomElements/VirtualDomElements.ts'
import * as VirtualDomHelpers from '../src/parts/VirtualDomHelpers/VirtualDomHelpers.ts'

test('text - should create text virtual dom node', () => {
  const actual = VirtualDomHelpers.text('test text')
  expect(actual).toEqual({
    type: VirtualDomElements.Text,
    text: 'test text',
    childCount: 0,
  })
})
