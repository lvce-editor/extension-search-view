import { VirtualDomElements } from '@lvce-editor/virtual-dom-worker'
import type { VirtualDomNode } from '../VirtualDomNode/VirtualDomNode.ts'
import type { VisibleItem } from '../VisibleItem/VisibleItem.ts'
import * as AriaRoleDescription from '../AriaRoleDescription/AriaRoleDescription.ts'
import * as AriaRoles from '../AriaRoles/AriaRoles.ts'
import * as ClassNames from '../ClassNames/ClassNames.ts'
import * as GetExtensionActionsVirtualDom from '../GetExtensionActionsVirtualDom/GetExtensionActionsVirtualDom.ts'
import { getExtensionStatisticsVirtualDom } from '../GetExtensionStatisticsVirtualDom/GetExtensionStatisticsVirtualDom.ts'
import * as MergeClassNames from '../MergeClassNames/MergeClassNames.ts'
import { text } from '../VirtualDomHelpers/VirtualDomHelpers.ts'

const listItemDetail: VirtualDomNode = {
  childCount: 3,
  className: ClassNames.ExtensionListItemDetail,
  type: VirtualDomElements.Div,
}
const listItemName: VirtualDomNode = {
  childCount: 1,
  className: ClassNames.ExtensionListItemName,
  type: VirtualDomElements.Div,
}

const listItemDescription: VirtualDomNode = {
  childCount: 1,
  className: ClassNames.ExtensionListItemDescription,
  type: VirtualDomElements.Div,
}

const getListItemFooter = (hasStatistics: boolean): VirtualDomNode => {
  return {
    childCount: hasStatistics ? 3 : 2,
    className: ClassNames.ExtensionListItemFooter,
    type: VirtualDomElements.Div,
  }
}

const listItemAuthorName: VirtualDomNode = {
  childCount: 1,
  className: ClassNames.ExtensionListItemAuthorName,
  type: VirtualDomElements.Div,
}

const getClassName = (focused: boolean, disabled: boolean): string => {
  return MergeClassNames.mergeClassNames(
    ClassNames.ExtensionListItem,
    focused ? ClassNames.ExtensionActive : '',
    disabled ? ClassNames.ExtensionListItemDisabled : '',
  )
}

const getId = (focused: boolean): string | undefined => {
  if (focused) {
    return `ExtensionActive`
  }
  return undefined
}

const getStatisticsVirtualDom = (hasStatistics: boolean, downloadCount: string, rating: string): readonly VirtualDomNode[] => {
  if (!hasStatistics) {
    return []
  }
  return getExtensionStatisticsVirtualDom(downloadCount, rating)
}

export const getExtensionListItemVirtualDom = (extension: VisibleItem): readonly VirtualDomNode[] => {
  const {
    builtin = false,
    description,
    disabled = false,
    downloadCount = 'n/a',
    focused,
    icon,
    id,
    name,
    posInSet,
    publisher,
    rating = 'n/a',
    setSize,
    status,
  } = extension
  const actionsDom = GetExtensionActionsVirtualDom.getExtensionActionsVirtualDom(id, builtin, disabled, status)
  const hasStatistics = !builtin
  const dom: readonly VirtualDomNode[] = [
    {
      ariaPosInSet: posInSet,
      ariaRoleDescription: AriaRoleDescription.Extension,
      ariaSetSize: setSize,
      childCount: 2,
      className: getClassName(focused, disabled),
      id: getId(focused),
      role: AriaRoles.ListItem,
      type: VirtualDomElements.Div,
    },
    {
      childCount: 0,
      className: ClassNames.ExtensionListItemIcon,
      role: AriaRoles.None,
      src: icon,
      type: VirtualDomElements.Img,
    },
    listItemDetail,
    listItemName,
    text(name),
    listItemDescription,
    text(description),
    getListItemFooter(hasStatistics),
    listItemAuthorName,
    text(publisher),
    ...getStatisticsVirtualDom(hasStatistics, downloadCount, rating),
    ...actionsDom,
  ]
  return dom
}
