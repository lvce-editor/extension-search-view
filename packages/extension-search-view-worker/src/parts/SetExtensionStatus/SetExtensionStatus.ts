import type { ExtensionListItem } from '../ExtensionListItem/ExtensionListItem.ts'
import type { State } from '../State/State.ts'
import * as ExtensionStatus from '../ExtensionStatus/ExtensionStatus.ts'

const updateStatus = (extension: ExtensionListItem, id: string, status: ExtensionStatus.ExtensionStatus): ExtensionListItem => {
  if (extension.id !== id) {
    return extension
  }
  return {
    ...extension,
    disabled: status === ExtensionStatus.Disabled,
    status,
  }
}

export const setExtensionStatus = (state: State, id: string, status: string): State => {
  if (!ExtensionStatus.isExtensionStatus(status)) {
    throw new TypeError(`Invalid extension status: ${status}`)
  }
  return {
    ...state,
    allExtensions: state.allExtensions.map((extension) => updateStatus(extension, id, status)),
    items: state.items.map((extension) => updateStatus(extension, id, status)),
  }
}
