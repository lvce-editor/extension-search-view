import { isString } from '../IsString/IsString.ts'

export const getCategories = (extension: unknown): readonly string[] => {
  if (extension === null || typeof extension !== 'object' || !('categories' in extension) || !Array.isArray(extension.categories)) {
    return []
  }
  return extension.categories.filter(isString)
}
