import { expect, test } from '@jest/globals'
import { applyRender } from '../src/parts/ApplyRender/ApplyRender.ts'
import { createDefaultState } from '../src/parts/CreateDefaultState/CreateDefaultState.ts'
import * as DiffType from '../src/parts/DiffType/DiffType.ts'
import * as InputName from '../src/parts/InputName/InputName.ts'
import * as RenderMethod from '../src/parts/RenderMethod/RenderMethod.ts'

test('returns empty array when diffResult is empty', () => {
  const oldState = createDefaultState()
  const newState = createDefaultState()
  const diffResult: readonly number[] = []
  const result = applyRender(oldState, newState, diffResult)
  expect(result).toEqual([])
})

test('returns single command for RenderMessage diff type', () => {
  const oldState = createDefaultState()
  const newState = {
    ...createDefaultState(),
    message: 'test message',
  }
  const diffResult: readonly number[] = [DiffType.RenderMessage]
  const result = applyRender(oldState, newState, diffResult)
  expect(result).toEqual([[RenderMethod.SetMessage, 'test message']])
})

test('returns single command for RenderSearchValue diff type', () => {
  const oldState = createDefaultState()
  const newState = {
    ...createDefaultState(),
    searchValue: 'test search',
    uid: 1,
  }
  const diffResult: readonly number[] = [DiffType.RenderSearchValue]
  const result = applyRender(oldState, newState, diffResult)
  expect(result).toEqual([['Viewlet.setValueByName', 1, InputName.Extensions, 'test search']])
})

test('returns multiple commands for multiple diff types', () => {
  const oldState = createDefaultState()
  const newState = {
    ...createDefaultState(),
    message: 'test message',
    searchValue: 'test search',
    uid: 1,
  }
  const diffResult: readonly number[] = [DiffType.RenderMessage, DiffType.RenderSearchValue]
  const result = applyRender(oldState, newState, diffResult)
  expect(result).toEqual([
    [RenderMethod.SetMessage, 'test message'],
    ['Viewlet.setValueByName', 1, InputName.Extensions, 'test search'],
  ])
})

test('returns commands in correct order', () => {
  const oldState = createDefaultState()
  const newState = {
    ...createDefaultState(),
    message: 'test message',
    searchValue: 'test search',
    uid: 1,
  }
  const diffResult: readonly number[] = [DiffType.RenderSearchValue, DiffType.RenderMessage]
  const result = applyRender(oldState, newState, diffResult)
  expect(result).toEqual([
    ['Viewlet.setValueByName', 1, InputName.Extensions, 'test search'],
    [RenderMethod.SetMessage, 'test message'],
  ])
})
