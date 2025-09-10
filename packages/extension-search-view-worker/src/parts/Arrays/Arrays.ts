export const toSorted = (array: readonly any[], compare: any): any[] => {
  return array.toSorted(compare)
}

export const isLastIndex = (array: readonly any[], index: number): boolean => {
  return index === array.length - 1
}

export const lastIndex = (array: readonly any[]): number => {
  return array.length - 1
}
