import { diffTree } from '@lvce-editor/virtual-dom-worker'
import type { State } from '../State/State.ts'
import { renderItems } from '../RenderItems/RenderItems.ts'

// TODO cache rendered dom so that it can be used for dom diffing
export const renderIncremental = (oldState: State, newState: State): readonly any[] => {
  const oldDom = renderItems(oldState)[1]
  const newDom = renderItems(newState)[1]
  const patches = diffTree(oldDom, newDom)
  return ['Viewlet.setPatches', newState.uid, patches]
}
