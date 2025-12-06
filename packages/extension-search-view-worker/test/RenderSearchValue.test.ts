import { expect, test } from '@jest/globals'
import { createDefaultState } from '../src/parts/CreateDefaultState/CreateDefaultState.ts'
import * as InputName from '../src/parts/InputName/InputName.ts'
import * as RenderSearchValue from '../src/parts/RenderSearchValue/RenderSearchValue.ts'

test('returns method call array with empty search value', () => {
  const state = createDefaultState()
  const result = RenderSearchValue.renderSearchValue(state)
  expect(result).toEqual(['Viewlet.setValueByName', state.uid, InputName.Extensions, state.searchValue])
})

test('returns method call array with search value', () => {
  const state = { ...createDefaultState(), searchValue: 'test query' }
  const result = RenderSearchValue.renderSearchValue(state)
  expect(result).toEqual(['Viewlet.setValueByName', state.uid, InputName.Extensions, 'test query'])
})

test('returns method call array with different uid', () => {
  const state = { ...createDefaultState(), searchValue: 'search', uid: 123 }
  const result = RenderSearchValue.renderSearchValue(state)
  expect(result).toEqual(['Viewlet.setValueByName', 123, InputName.Extensions, 'search'])
})
