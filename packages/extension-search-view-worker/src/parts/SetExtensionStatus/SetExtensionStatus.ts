import type { ExtensionListItem } from '../ExtensionListItem/ExtensionListItem.ts'
import type { State } from '../State/State.ts'
import * as ExtensionStatus from '../ExtensionStatus/ExtensionStatus.ts'

const updateStatus = (
  extension: ExtensionListItem,
  id: string,
  status: ExtensionStatus.ExtensionStatus,
  builtin: boolean | undefined,
): ExtensionListItem => {
  if (extension.id !== id) {
    return extension
  }
  return {
    ...extension,
    builtin: builtin ?? extension.builtin,
    disabled: status === ExtensionStatus.Disabled,
    status,
  }
}

export const setExtensionStatus = (state: State, id: string, status: string, builtin?: boolean): State => {
  if (!ExtensionStatus.isExtensionStatus(status)) {
    throw new TypeError(`Invalid extension status: ${status}`)
  }
  return {
    ...state,
    allExtensions: state.allExtensions.map((extension) => updateStatus(extension, id, status, builtin)),
    items: state.items.map((extension) => updateStatus(extension, id, status, builtin)),
  }
}
