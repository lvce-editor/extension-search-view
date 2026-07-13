interface LoadState {
  readonly promise: Promise<void>
  readonly resolve: () => void
}

const loadStates = new Map<number, LoadState>()

export const create = (uid: number): void => {
  loadStates.get(uid)?.resolve()
  const { promise, resolve } = Promise.withResolvers<void>()
  loadStates.set(uid, { promise, resolve })
}

export const finish = (uid: number): void => {
  const loadState = loadStates.get(uid)
  if (!loadState) {
    return
  }
  loadStates.delete(uid)
  loadState.resolve()
}

export const wait = (uid: number): Promise<void> => {
  return loadStates.get(uid)?.promise || Promise.resolve()
}
