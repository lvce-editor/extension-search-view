import type { State } from '../State/State.ts'
import type { VisibleItem } from '../VisibleItem/VisibleItem.ts'
import { getVisibleItem } from '../GetVisibleItem/GetVisibleItem.ts'

export const getVisible = (state: State): readonly VisibleItem[] => {
  const { deltaY, focusedIndex, itemHeight, items, maxLineY, minLineY } = state
  const setSize = items.length
  const visible = []
  const relative = deltaY % itemHeight
  for (let i = minLineY; i < maxLineY; i++) {
    const item = items[i]
    visible.push(getVisibleItem(item, setSize, itemHeight, minLineY, relative, i, focusedIndex))
  }
  return visible
}
