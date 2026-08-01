import { isString } from '../IsString/IsString.ts'

export const getCategories = (extension: any): readonly string[] => {
  if (!extension || !extension.categories || !Array.isArray(extension.categories)) {
    return []
  }
  return extension.categories.filter(isString)
}
