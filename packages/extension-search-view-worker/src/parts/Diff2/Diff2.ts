import * as DiffModules from '../DiffModules/DiffModules.ts'
import * as ExtensionSearchViewStates from '../ExtensionSearchViewStates/ExtensionSearchViewStates.ts'

export const diff2 = (uid: number): readonly number[] => {
  return ExtensionSearchViewStates.diff(uid, DiffModules.modules, DiffModules.numbers)
}
