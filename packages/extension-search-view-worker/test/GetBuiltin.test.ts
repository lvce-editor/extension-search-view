import { expect, test } from '@jest/globals'
import { getBuiltin } from '../src/parts/GetBuiltin/GetBuiltin.ts'

test.each([{ builtin: true, id: 'publisher.extension' }, { id: 'publisher.extension', isBuiltin: true }, { id: 'builtin.gpt-voice' }])(
  'returns true for builtin extension %#',
  (extension) => {
    expect(getBuiltin(extension)).toBe(true)
  },
)

test.each([null, undefined, 'builtin.extension', {}, { builtin: false }, { id: 1 }, { id: 'publisher.extension' }, { isBuiltin: false }])(
  'returns false for non-builtin extension %#',
  (extension) => {
    expect(getBuiltin(extension)).toBe(false)
  },
)
