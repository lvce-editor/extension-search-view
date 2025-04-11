import * as Assert from '../Assert/Assert.ts'
import * as ParentRpc from '../ParentRpc/ParentRpc.ts'

export const show = async (x: number, y: number, id: number): Promise<void> => {
  Assert.number(x)
  Assert.number(y)
  Assert.number(id)
  await ParentRpc.invoke('ContextMenu.show', x, y, id)
}
