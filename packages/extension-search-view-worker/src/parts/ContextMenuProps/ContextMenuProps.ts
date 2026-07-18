import type { MenuEntryId } from '@lvce-editor/constants'

export interface ContextMenuPropsBase {
  readonly menuId: number
}

export interface ContextMenuPropsExplorer extends ContextMenuPropsBase {
  readonly builtin: boolean
  readonly disabled: boolean
  readonly menuId: typeof MenuEntryId.ManageExtension
  readonly status: string | undefined
}

export interface ContextMenuPropsExtensionSearchFilter extends ContextMenuPropsBase {
  readonly menuId: typeof MenuEntryId.ExtensionSearchFilter
}

export type ContextMenuProps = ContextMenuPropsExplorer | ContextMenuPropsExtensionSearchFilter
