import { focusIndex } from '../FocusIndex/FocusIndex.ts'
import * as OpenUri from '../OpenUri/OpenUri.ts'

export const handleClick = async (state: any, index: number): Promise<any> => {
  const { items, minLineY } = state
  const actualIndex = index + minLineY
  const extension = items[actualIndex]
  const uri = `extension-detail://${extension.id}`
  await OpenUri.openUri(uri)
  return focusIndex(state, actualIndex)
}
