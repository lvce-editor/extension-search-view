import * as ParentRpc from '../ParentRpc/ParentRpc.ts'

export const openUri = async (uri: string): Promise<void> => {
  return ParentRpc.invoke('Main.openUri', uri)
}
