import type { RestoredState } from '../RestoredState/RestoredState.ts'
import { getSavedDeltaY, getSavedValue } from '../GetSavedValue/GetSavedValue.ts'

export const restoreState = (savedState: unknown): RestoredState => {
  const searchValue = getSavedValue(savedState)
  const savedDeltaY = getSavedDeltaY(savedState)
  return {
    deltaY: savedDeltaY,
    searchValue,
  }
}
