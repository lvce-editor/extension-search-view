import * as ApplyRender from '../ApplyRender/ApplyRender.ts'
import * as ExtensionSearchViewStates from '../ExtensionSearchViewStates/ExtensionSearchViewStates.ts'

export const render3 = (uid: number, diffResult: readonly number[]): readonly any[] => {
  const { newState, oldState } = ExtensionSearchViewStates.get(uid)
  ExtensionSearchViewStates.set(uid, newState, newState)
  const commands = ApplyRender.applyRender(oldState, newState, diffResult)
  return commands
}
