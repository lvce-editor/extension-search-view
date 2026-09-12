import { ViewletCommand } from '@lvce-editor/constants'
import * as ApplyRender from '../ApplyRender/ApplyRender.ts'
import * as Diff2 from '../Diff2/Diff2.ts'
import * as ExtensionSearchViewStates from '../ExtensionSearchViewStates/ExtensionSearchViewStates.ts'
import * as RendererProcess from '../RendererProcess/RendererProcess.ts'

export const render3 = async (uid: number, diffResult: readonly number[]): Promise<readonly any[]> => {
  const { newState, oldState } = ExtensionSearchViewStates.get(uid)
  // Commands can update state while the renderer worker is sending the diff back.
  const currentDiffResult = [...new Set([...Diff2.diff2(uid), ...diffResult])]
  ExtensionSearchViewStates.set(uid, newState, newState)
  const commands = ApplyRender.applyRender(oldState, newState, currentDiffResult)
  if (!RendererProcess.isConnected()) {
    return commands
  }
  const rendererWorkerCommands = commands.filter((command) => command[0] === ViewletCommand.SetFocusContext)
  const rendererProcessCommands = commands.filter((command) => command[0] !== ViewletCommand.SetFocusContext)
  const transactionId = await RendererProcess.invoke('Viewlet.queueCommands', uid, rendererProcessCommands)
  return [...rendererWorkerCommands, ['Viewlet.commitPending', uid, transactionId]]
}
