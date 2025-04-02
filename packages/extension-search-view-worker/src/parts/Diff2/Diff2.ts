import * as DiffModules from '../DiffModules/DiffModules.ts'
import * as ExtensionSearchViewStates from '../ExtensionSearchViewStates/ExtensionSearchViewStates.ts'

export const diff2 = (uid: number): readonly number[] => {
  const { oldState, newState } = ExtensionSearchViewStates.get(uid)
  const diffResult: number[] = []
  for (let i = 0; i < DiffModules.modules.length; i++) {
    const fn = DiffModules.modules[i]
    if (!fn(oldState, newState)) {
      diffResult.push(DiffModules.numbers[i])
    }
  }
  return diffResult
}
