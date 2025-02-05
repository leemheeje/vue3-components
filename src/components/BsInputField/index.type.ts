export interface Props {
  tag?: string
  name?: string
  theme?: 'theme-1' | 'theme-2'
  isFocus?: boolean
  isReadonly?: boolean
  isDiabled?: boolean
  isError?: boolean
  isConfirm?: boolean
  placeholder?: string
  errorMessage?: string
  confirmMessage?: string
  customStyle?: any
  timeRange?: string
  modelValue: string
}
