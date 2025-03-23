import * as ParentRpc from '../ParentRpc/ParentRpc.ts'

export const setFocus = async (focusId: number): Promise<void> => {
  await ParentRpc.invoke('Focus.setFocus', focusId)
}
