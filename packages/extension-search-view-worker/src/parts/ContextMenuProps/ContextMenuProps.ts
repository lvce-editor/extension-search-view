import type { MenuEntryId } from '@lvce-editor/constants'
import type * as MenuEntryIdLocal from '../MenuEntryId/MenuEntryId.ts'

export interface ContextMenuPropsBase {
  readonly menuId: number
}

export interface ContextMenuPropsExplorer extends ContextMenuPropsBase {
  readonly menuId: typeof MenuEntryId.ManageExtension
}

export interface ContextMenuPropsExtensionSearchFilter extends ContextMenuPropsBase {
  readonly menuId: typeof MenuEntryIdLocal.ExtensionSearchFilter
}

export type ContextMenuProps = ContextMenuPropsExplorer | ContextMenuPropsExtensionSearchFilter
