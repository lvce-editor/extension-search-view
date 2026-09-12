import { expect, jest, test } from '@jest/globals'
import { createMockRpc } from '@lvce-editor/rpc'
import { createDefaultState } from '../src/parts/CreateDefaultState/CreateDefaultState.ts'
import * as Diff2 from '../src/parts/Diff2/Diff2.ts'
import * as DiffType from '../src/parts/DiffType/DiffType.ts'
import * as ExtensionSearchViewStates from '../src/parts/ExtensionSearchViewStates/ExtensionSearchViewStates.ts'
import * as FocusId from '../src/parts/FocusId/FocusId.ts'
import * as InputSource from '../src/parts/InputSource/InputSource.ts'
import * as Render3 from '../src/parts/Render3/Render3.ts'
import * as RendererProcess from '../src/parts/RendererProcess/RendererProcess.ts'
import * as WhenExpression from '../src/parts/WhenExpression/WhenExpression.ts'

test('returns empty array when diffResult is empty', async () => {
  const uid = 1
  const state: ReturnType<typeof createDefaultState> = createDefaultState()
  ExtensionSearchViewStates.set(uid, state, state)
  const diffResult: readonly number[] = []
  const result = await Render3.render3(uid, diffResult)
  expect(result).toEqual([])
})

test('returns commands array when diffResult contains RenderSearchValue', async () => {
  const uid = 2
  const oldState: ReturnType<typeof createDefaultState> = createDefaultState()
  const newState: ReturnType<typeof createDefaultState> = {
    ...oldState,
    searchValue: 'test',
  }
  ExtensionSearchViewStates.set(uid, oldState, newState)
  const diffResult: readonly number[] = [DiffType.RenderSearchValue]
  const result = await Render3.render3(uid, diffResult)
  expect(Array.isArray(result)).toBe(true)
  expect(result).toEqual([
    ['Viewlet.setValueByName', 0, 'extensions', 'test'],
    ['Viewlet.send', 0, 'setTitle', 'Extensions: Marketplace'],
  ])
})

test('returns commands array when diffResult contains multiple render types', async () => {
  const uid = 3
  const oldState: ReturnType<typeof createDefaultState> = createDefaultState()
  const newState: ReturnType<typeof createDefaultState> = {
    ...oldState,
    message: 'test message',
    searchValue: 'test',
  }
  ExtensionSearchViewStates.set(uid, oldState, newState)
  const diffResult: readonly number[] = [DiffType.RenderSearchValue, DiffType.RenderMessage]
  const result = await Render3.render3(uid, diffResult)
  expect(Array.isArray(result)).toBe(true)
  expect(result).toHaveLength(4)
})

test('updates ExtensionSearchViewStates with newState', async () => {
  const uid = 4
  const oldState: ReturnType<typeof createDefaultState> = createDefaultState()
  const newState: ReturnType<typeof createDefaultState> = {
    ...oldState,
    searchValue: 'updated',
  }
  ExtensionSearchViewStates.set(uid, oldState, newState)
  const diffResult: readonly number[] = [DiffType.RenderSearchValue]
  await Render3.render3(uid, diffResult)
  const { newState: updatedNewState, oldState: updatedOldState } = ExtensionSearchViewStates.get(uid)
  expect(updatedNewState).toBe(newState)
  expect(updatedOldState).toBe(newState)
})

test('queues renderer commands and returns a lightweight commit marker', async () => {
  const queueCommands = jest.fn((_uid: number, _commands: readonly unknown[]) => 17)
  RendererProcess.set(createMockRpc({ commandMap: { 'Viewlet.queueCommands': queueCommands } }))
  const uid = 5
  const oldState = createDefaultState()
  const newState = { ...oldState, searchValue: 'test' }
  ExtensionSearchViewStates.set(uid, oldState, newState)

  const result = await Render3.render3(uid, [DiffType.RenderSearchValue])

  expect(queueCommands).toHaveBeenCalledWith(uid, [
    ['Viewlet.setValueByName', 0, 'extensions', 'test'],
    ['Viewlet.send', 0, 'setTitle', 'Extensions: Marketplace'],
  ])
  expect(result).toEqual([['Viewlet.commitPending', uid, 17]])
})

test('leaves focus context management with the renderer worker', async () => {
  const queueCommands = jest.fn((_uid: number, _commands: readonly unknown[]) => 23)
  RendererProcess.set(createMockRpc({ commandMap: { 'Viewlet.queueCommands': queueCommands } }))
  const uid = 6
  const oldState = createDefaultState()
  const newState = { ...oldState, focus: FocusId.List, uid }
  ExtensionSearchViewStates.set(uid, oldState, newState)

  const result = await Render3.render3(uid, [DiffType.RenderFocusContext])

  expect(queueCommands).toHaveBeenCalledWith(uid, [
    ['Viewlet.setPatches', uid, []],
    ['Viewlet.focusSelector', uid, '.ListItems'],
  ])
  expect(result).toEqual([
    ['Viewlet.setFocusContext', uid, WhenExpression.FocusExtensions],
    ['Viewlet.commitPending', uid, 23],
  ])
})

test('renders updates that arrive after the renderer worker computed the diff', async () => {
  const queueCommands = jest.fn((_uid: number, _commands: readonly unknown[]) => 29)
  RendererProcess.set(createMockRpc({ commandMap: { 'Viewlet.queueCommands': queueCommands } }))
  const uid = 7
  const oldState = { ...createDefaultState(), uid }
  ExtensionSearchViewStates.set(uid, oldState, oldState)
  const diffResult = Diff2.diff2(uid)
  const update = ExtensionSearchViewStates.wrapAsyncCommand(async (context) => {
    await context.updateState((state) => ({ ...state, inputSource: InputSource.Script, searchValue: '@enabled ' }))
  })
  await update(uid)

  await Render3.render3(uid, diffResult)

  expect(queueCommands).toHaveBeenCalledWith(uid, [
    ['Viewlet.setValueByName', uid, 'extensions', '@enabled '],
    ['Viewlet.send', 0, 'setTitle', 'Extensions: Enabled'],
  ])
})
