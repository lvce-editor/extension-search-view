export const getSavedValue = (savedState: unknown): string => {
  if (savedState && typeof savedState === 'object' && 'searchValue' in savedState && typeof savedState.searchValue === 'string') {
    return savedState.searchValue
  }
  return ''
}

export const getSavedDeltaY = (savedState: unknown): number => {
  if (
    savedState &&
    typeof savedState === 'object' &&
    'deltaY' in savedState &&
    typeof savedState.deltaY === 'number' &&
    !Number.isNaN(savedState.deltaY)
  ) {
    return savedState.deltaY
  }
  return 0
}
