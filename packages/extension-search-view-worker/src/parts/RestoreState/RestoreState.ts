import type { RestoredState } from '../RestoredState/RestoredState.ts'

const getSavedValue = (savedState: unknown): string => {
  if (savedState && typeof savedState === 'object' && 'searchValue' in savedState && typeof savedState.searchValue === 'string') {
    return savedState.searchValue
  }
  return ''
}

export const restoreState = (savedState: unknown): RestoredState => {
  const searchValue = getSavedValue(savedState)
  return {
    searchValue,
  }
}
