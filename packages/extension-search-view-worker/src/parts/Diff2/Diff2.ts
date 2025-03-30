import * as Diff from '../Diff/Diff.ts'
import * as ExtensionSearchViewStates from '../ExtensionSearchViewStates/ExtensionSearchViewStates.ts'

export const diff2 = (uid: number): readonly number[] => {
  const { oldState, newState } = ExtensionSearchViewStates.get(uid)
  const diffResult = Diff.diff(oldState, newState)
  return diffResult
}
