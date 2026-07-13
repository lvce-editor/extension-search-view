interface LoadState {
  readonly promise: Promise<void>
  readonly resolve: () => void
  readonly token: number
}

const loadStates = new Map<number, LoadState>()
const tokenGenerator = { value: 0 }

export const cancel = (uid: number): void => {
  const loadState = loadStates.get(uid)
  if (!loadState) {
    return
  }
  loadStates.delete(uid)
  loadState.resolve()
}

export const create = (uid: number): void => {
  cancel(uid)
  const { promise, resolve } = Promise.withResolvers<void>()
  const token = ++tokenGenerator.value
  loadStates.set(uid, { promise, resolve, token })
}

export const finish = (uid: number, token: number | undefined): void => {
  const loadState = loadStates.get(uid)
  if (!loadState || loadState.token !== token) {
    return
  }
  loadStates.delete(uid)
  loadState.resolve()
}

export const getToken = (uid: number): number | undefined => {
  return loadStates.get(uid)?.token
}

export const wait = (uid: number): Promise<void> => {
  return loadStates.get(uid)?.promise || Promise.resolve()
}
