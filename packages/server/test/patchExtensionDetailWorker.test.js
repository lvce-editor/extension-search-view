import assert from 'node:assert/strict'
import test from 'node:test'
import { patchExtensionDetailWorker } from '../src/patchExtensionDetailWorker.js'

test('marks extensions with a builtin id as builtin', () => {
  const content = `
const first = extension?.isBuiltin || extension?.builtin || false;
const second = extension?.isBuiltin || extension?.builtin || false;
const isBuiltin = extension?.builtin;
`
  const expected = `
const first = extension?.isBuiltin || extension?.builtin || extension?.id?.startsWith('builtin') || false;
const second = extension?.isBuiltin || extension?.builtin || extension?.id?.startsWith('builtin') || false;
const isBuiltin = extension?.builtin || extension?.id?.startsWith('builtin');
`

  assert.equal(patchExtensionDetailWorker(content), expected)
})

test('is idempotent', () => {
  const content = `
const first = extension?.isBuiltin || extension?.builtin || extension?.id?.startsWith('builtin') || false;
const isBuiltin = extension?.builtin || extension?.id?.startsWith('builtin');
`

  assert.equal(patchExtensionDetailWorker(content), content)
})

test('throws when the builtin expressions cannot be found', () => {
  assert.throws(() => patchExtensionDetailWorker('const isBuiltin = false;'), {
    message: 'extension detail builtin expression not found',
  })
})
