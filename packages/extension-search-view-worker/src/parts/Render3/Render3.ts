import * as ApplyRender from '../ApplyRender/ApplyRender.ts'
import * as ExtensionSearchViewStates from '../ExtensionSearchViewStates/ExtensionSearchViewStates.ts'

export const render3 = (uid: number, diffResult: readonly number[]): readonly any[] => {
  const { oldState, newState } = ExtensionSearchViewStates.get(uid)
  const commands = ApplyRender.applyRender(oldState, newState, diffResult)
  ExtensionSearchViewStates.set(uid, newState, newState)
  return commands
}
