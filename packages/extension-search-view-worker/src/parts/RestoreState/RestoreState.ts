import type { RestoredState } from '../RestoredState/RestoredState.ts'
import { getSavedValue } from '../GetSavedValue/GetSavedValue.ts'

export const restoreState = (savedState: unknown): RestoredState => {
  const searchValue = getSavedValue(savedState)
  return {
    searchValue,
  }
}
