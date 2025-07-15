import { commandMapRef } from '../CommandMapRef/CommandMapRef.ts'

const toCommandId = (key: string) => {
  const dotIndex = key.indexOf('.')
  return key.slice(dotIndex + 1)
}

export const getCommandIds = (): readonly string[] => {
  const keys = Object.keys(commandMapRef)
  const ids = keys.map(toCommandId)
  return ids
}
