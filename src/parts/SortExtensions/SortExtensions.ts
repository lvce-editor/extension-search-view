import * as Arrays from '../Arrays/Arrays.ts'

const compareExtension = (extensionA: any, extensionB: any): number => {
  return extensionA.name.localeCompare(extensionB.name) || extensionA.id.localeCompare(extensionB.id)
}

export const sortExtensions = (extensions: readonly any[]): any => {
  return Arrays.toSorted(extensions, compareExtension)
}
