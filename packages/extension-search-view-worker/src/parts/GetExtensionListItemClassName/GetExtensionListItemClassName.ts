import * as ClassNames from '../ClassNames/ClassNames.ts'
import * as MergeClassNames from '../MergeClassNames/MergeClassNames.ts'

export const getExtensionListItemClassName = (focused: boolean, disabled: boolean): string => {
  return MergeClassNames.mergeClassNames(
    ClassNames.ExtensionListItem,
    focused ? ClassNames.ExtensionActive : '',
    disabled ? ClassNames.ExtensionListItemDisabled : '',
  )
}
