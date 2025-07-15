import { test, expect } from '@jest/globals'
import { restoreState } from '../src/parts/RestoreState/RestoreState.ts'

test('restoreState returns empty search value when savedState is null', () => {
  const result = restoreState(null)
  expect(result).toEqual({ deltaY: 0, searchValue: '' })
})

test('restoreState returns empty search value when savedState is undefined', () => {
  const result = restoreState(undefined)
  expect(result).toEqual({ deltaY: 0, searchValue: '' })
})

test('restoreState returns empty search value when savedState is not an object', () => {
  const result = restoreState('not an object')
  expect(result).toEqual({ deltaY: 0, searchValue: '' })
})

test('restoreState returns empty search value when savedState has no searchValue property', () => {
  const result = restoreState({ otherProperty: 'value' })
  expect(result).toEqual({ deltaY: 0, searchValue: '' })
})

test('restoreState returns empty search value when searchValue is not a string', () => {
  const result = restoreState({ deltaY: 0, searchValue: 123 })
  expect(result).toEqual({ deltaY: 0, searchValue: '' })
})

test('restoreState returns correct search value when savedState is valid', () => {
  const result = restoreState({ deltaY: 0, searchValue: 'test search' })
  expect(result).toEqual({ deltaY: 0, searchValue: 'test search' })
})
