import {styled} from '@vue-styled-components/core'
import {_toCSSUnit, _toGetBackgroundSVG} from '@/themes/DesignConfig'

export const Wrapper = styled.span`
  min-width: ${(props: Record<string, any>) => _toCSSUnit(props.width)};
  min-height: ${(props: Record<string, any>) => _toCSSUnit(props.height)};
  width: ${(props: Record<string, any>) => _toCSSUnit(props.width)};
  height: ${(props: Record<string, any>) => _toCSSUnit(props.height)};
  max-height: 100%;
  display: inline-flex;
  mask-image: ${(props: Record<string, any>) => props.type};
  mask-size: cover;
  background-image: none;
  background-color: ${(props: Record<string, any>) => props.color};
`
