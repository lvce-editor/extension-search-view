import type { StateHandler } from '../StateHandler/StateHandler.ts'
import type { UidStateHandler } from '../UidStateHandler/UidStateHandler.ts'
import * as ExtensionSearchViewStates from '../ExtensionSearchViewStates/ExtensionSearchViewStates.ts'

export const wrapCommand = (fn: StateHandler): UidStateHandler => {
  const wrapped = async (uid: number, ...args: readonly any[]): Promise<void> => {
    const { newState } = ExtensionSearchViewStates.get(uid)
    const newerState = await fn(newState, ...args)
    ExtensionSearchViewStates.set(uid, newState, newerState)
  }
  return wrapped
}
