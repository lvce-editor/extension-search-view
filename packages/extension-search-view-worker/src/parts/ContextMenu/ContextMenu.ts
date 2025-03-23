import * as Assert from '../Assert/Assert.ts'

export const show = async (x: number, y: number, id: number): Promise<void> => {
  Assert.number(x)
  Assert.number(y)
  Assert.number(id)
  // TODO
}
