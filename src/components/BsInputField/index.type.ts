export interface Props {
  tag?: string
  name?: string
  id?: string
  type?: string
  theme?: 'theme-1' | 'theme-2'
  useFilter?: string
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
