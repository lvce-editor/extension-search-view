import { ExtensionHost } from '@lvce-editor/rpc-registry'

export const getRuntimeStatus: typeof ExtensionHost.getRuntimeStatus = ExtensionHost.getRuntimeStatus
export const invoke: typeof ExtensionHost.invoke = ExtensionHost.invoke
export const set: typeof ExtensionHost.set = ExtensionHost.set
