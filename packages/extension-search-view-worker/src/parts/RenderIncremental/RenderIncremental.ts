import { ViewletCommand } from '@lvce-editor/constants'
import { diffTree } from '@lvce-editor/virtual-dom-worker'
import type { State } from '../State/State.ts'
import { renderItems2 } from '../RenderItems2/RenderItems2.ts'

// TODO cache rendered dom so that it can be used for dom diffing
export const renderIncremental = (newState: State, oldState: State): readonly any[] => {
  const oldDom = renderItems2(oldState)[2]
  const newDom = renderItems2(newState)[2]
  const patches = diffTree(oldDom, newDom)
  return [ViewletCommand.SetPatches, newState.uid, patches]
}
