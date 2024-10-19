import * as IpcChildType from '../IpcChildType/IpcChildType.ts'
// @ts-ignore
import { IpcChildWithModuleWorker, IpcChildWithModuleWorkerAndMessagePort } from '@lvce-editor/ipc/dist/browser.ts'

export const getModule = (method: any) => {
  switch (method) {
    case IpcChildType.ModuleWorker:
      return IpcChildWithModuleWorker
    case IpcChildType.ModuleWorkerAndMessagePort:
      return IpcChildWithModuleWorkerAndMessagePort
    default:
      throw new Error('unexpected ipc type')
  }
}
