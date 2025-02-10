import {ALIGN_KEYNAME} from '@/constants/components/BsModal/index'
export interface Props {
  modelValue: boolean
  teleportTo?: string
  useDimm?: boolean
  headerText?: string
  buttonLayout?: string
  buttons?: Record<string, any>[]
  align?: keyof typeof ALIGN_KEYNAME
}
