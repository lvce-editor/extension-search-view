import * as IpcState from '../IpcState/IpcState.ts'
import * as JsonRpc from '../JsonRpc/JsonRpc.ts'

export const listen = (ipc: any) => {
  IpcState.set(ipc)
}
