import { getSavedDeltaY, getSavedValue } from '../GetSavedValue/GetSavedValue.ts'
import type { RestoredState } from '../RestoredState/RestoredState.ts'

export const restoreState = (savedState: unknown): RestoredState => {
  const searchValue = getSavedValue(savedState)
  const savedDeltaY = getSavedDeltaY(savedState)
  return {
    searchValue,
    deltaY: savedDeltaY,
  }
}
