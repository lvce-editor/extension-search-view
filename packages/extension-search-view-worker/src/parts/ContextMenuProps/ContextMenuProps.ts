import type { MenuEntryId } from '@lvce-editor/constants'

export interface ContextMenuPropsBase {
  readonly menuId: number
}

export interface ContextMenuPropsExplorer extends ContextMenuPropsBase {
  readonly menuId: typeof MenuEntryId.ManageExtension
}

export interface ContextMenuPropsExtensionSearchFilter extends ContextMenuPropsBase {
  readonly menuId: typeof MenuEntryId.ExtensionSearchFilter
}

export type ContextMenuProps = ContextMenuPropsExplorer | ContextMenuPropsExtensionSearchFilter
