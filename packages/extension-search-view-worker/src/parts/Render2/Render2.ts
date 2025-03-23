import * as ExtensionSearchViewStates from '../ExtensionSearchViewStates/ExtensionSearchViewStates.ts'
import * as Render from '../Render/Render.ts'

export const render2 = (uid: number): readonly any[] => {
  const { oldState, newState } = ExtensionSearchViewStates.get(uid)
  return Render.doRender(oldState, newState)
}
