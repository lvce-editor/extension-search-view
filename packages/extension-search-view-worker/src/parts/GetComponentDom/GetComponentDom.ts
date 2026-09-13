import { getComponentState } from '../GetComponentState/GetComponentState.ts'
import { renderItems2 } from '../RenderItems2/RenderItems2.ts'

export const getComponentDom = (uid: number): readonly any[] => {
  const state = getComponentState(uid)
  return renderItems2(state)[2]
}
