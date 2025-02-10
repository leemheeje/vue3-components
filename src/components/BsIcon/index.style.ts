import {styled} from '@vue-styled-components/core'
import {DesignConfigColor, DESIGNCONFIG_KEYNAME_COLOR, _toCSSUnit} from '@/themes/DesignConfig'

export const Wrapper = styled('span', {
  type: String,
  color: String,
  width: String,
  height: String
})`
  min-width: ${(props: Record<string, any>) => _toCSSUnit(props.width)};
  min-height: ${(props: Record<string, any>) => _toCSSUnit(props.height)};
  width: ${(props: Record<string, any>) => _toCSSUnit(props.width)};
  height: ${(props: Record<string, any>) => _toCSSUnit(props.height)};
  max-height: 100%;
  display: inline-flex;
  mask-image: ${(props: Record<string, any>) => props.type};
  mask-size: cover;
  background-image: none;
  background-color: ${(props: Record<string, any>) => {
    const _DesignConfigColor: Record<string, string> = DesignConfigColor
    const _DESIGNCONFIG_KEYNAME_COLOR: string =
      DESIGNCONFIG_KEYNAME_COLOR[props.color as keyof typeof DESIGNCONFIG_KEYNAME_COLOR]
    return _DesignConfigColor[_DESIGNCONFIG_KEYNAME_COLOR]
  }};
`
