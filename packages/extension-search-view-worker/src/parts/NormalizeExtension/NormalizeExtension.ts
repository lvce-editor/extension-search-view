import type { ExtensionListItem } from '../ExtensionListItem/ExtensionListItem.ts'

export const normalizeExtension = (extension: any): ExtensionListItem => {
  const { id, name, description, uri } = extension
  return {
    id,
    name,
    description,
    uri,
    author: '',
    icon: '',
  }
}
