export interface Props {
  tag?: string
  name?: string
  id?: string
  theme?: 'theme-1' | 'theme-2'
  inputFilter?: string
  readonly?: boolean
  disabled?: boolean
  isError?: boolean
  isConfirm?: boolean
  placeholder?: string
  errorMessage?: string
  confirmMessage?: string
  customStyle?: any
  timeRange?: string
  useLengthCheck?: boolean
  maxlength?: string | number
  modelValue?: string
}
