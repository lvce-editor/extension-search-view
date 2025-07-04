import * as Assert from '../Assert/Assert.ts'
import * as RendererWorker from '../RendererWorker/RendererWorker.ts'

export const show = async (x: number, y: number, id: number): Promise<void> => {
  Assert.number(x)
  Assert.number(y)
  Assert.number(id)
  await RendererWorker.invoke('ContextMenu.show', x, y, id)
}
