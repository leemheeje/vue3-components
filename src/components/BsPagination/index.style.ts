import {styled, css} from '@vue-styled-components/core'
import {
  _toCSSParse,
  _toCSSUnit,
  DesignConfigTypography,
  DESIGNCONFIG_KEYNAME_TYPO,
  DesignConfigColor,
  DESIGNCONFIG_KEYNAME_COLOR,
  _toGetBackgroundSVG,
  DESIGNCONFIG_ICON_MAP
} from '@/themes/DesignConfig'
import iconMapGroup from '@/themes/common/iconMapGroup'
import {THEME_KEYNAME} from '@/constants/components/BsPagination/index'

const THEME_1 = THEME_KEYNAME.THEME_1
const THEME_2 = THEME_KEYNAME.THEME_2
const IS_ACTIVE = 'is-active'

export const Wrapper = styled.div`
  display: flex;
  justify-content: center;
`
export const BsPaginationInner = styled.div`
  display: flex;
  align-items: flex-start;
  gap: ${_toCSSUnit('10px')};
`
export const BsPaginationItem = styled.div``
export const BsPaginationButtonCss = css`
  box-sizing: border-box;
  min-width: ${_toCSSUnit('32px')};
  height: ${_toCSSUnit('32px')};
  display: flex;
  align-items: center;
  justify-content: center;
  white-space: nowrap;
  border: ${_toCSSUnit('1px')} solid transparent;
  background: transparent no-repeat center center;
  background-size: ${_toCSSUnit('24px')};
  ${css`
    ${_toCSSParse(DesignConfigTypography[DESIGNCONFIG_KEYNAME_TYPO['Body1/Bold']])}
  `};
  color: ${DesignConfigColor[DESIGNCONFIG_KEYNAME_COLOR['Gray/Darkgray_01']]};
  border-radius: ${_toCSSUnit('4px')};
  ${Wrapper}[data-theme="${THEME_1}"] & {
    border-color: ${DesignConfigColor[DESIGNCONFIG_KEYNAME_COLOR['Gray/Lightgray_02']]};
    &.${IS_ACTIVE} {
      border-color: ${DesignConfigColor[DESIGNCONFIG_KEYNAME_COLOR['Primary/Primary_01']]};
      color: ${DesignConfigColor[DESIGNCONFIG_KEYNAME_COLOR['Primary/Primary_01']]};
    }
  }
  ${Wrapper}[data-theme="${THEME_2}"] & {
    &.${IS_ACTIVE} {
      border-color: ${DesignConfigColor[DESIGNCONFIG_KEYNAME_COLOR['Primary/Primary_01']]};
      background-color: ${DesignConfigColor[DESIGNCONFIG_KEYNAME_COLOR['Primary/Primary_01']]};
      color: ${DesignConfigColor[DESIGNCONFIG_KEYNAME_COLOR['Gray/White']]};
    }
  }

  ${(props) => {
    const getIcons = (t: string, c: string) => {
      const _t = t as keyof typeof iconMapGroup
      const _c = c as keyof typeof DESIGNCONFIG_KEYNAME_COLOR
      return _toGetBackgroundSVG(DESIGNCONFIG_ICON_MAP[_t], DesignConfigColor[DESIGNCONFIG_KEYNAME_COLOR[_c]])
    }
    const disabledBackgroundColor = DesignConfigColor[DESIGNCONFIG_KEYNAME_COLOR['Gray/Lightgray_03']]
    const disabledBorderColor = DesignConfigColor[DESIGNCONFIG_KEYNAME_COLOR['Gray/Lightgray_02']]

    if (props.type === 'prev') {
      return `
        background-image: ${getIcons('icon_arrow_s_before_line', 'Gray/Darkgray_01')};
         [data-theme="${THEME_1}"] &:disabled{
            background-color: ${disabledBackgroundColor};
            border-color: ${disabledBorderColor};
            background-image: ${getIcons('icon_arrow_s_before_line', 'Gray/Darkgray_06')};
        }
         [data-theme="${THEME_2}"] &:disabled{
            background-image: ${getIcons('icon_arrow_s_before_line', 'Gray/Darkgray_06')};
        }
        `
    }
    if (props.type === 'dprev') {
      return `
       background-image: ${getIcons('icon_arrow_double_left_line', 'Gray/Darkgray_01')};
         [data-theme="${THEME_1}"] &:disabled{
            background-color: ${disabledBackgroundColor};
            border-color: ${disabledBorderColor};
            background-image: ${getIcons('icon_arrow_double_left_line', 'Gray/Darkgray_06')};
        }
        [data-theme="${THEME_2}"] &:disabled{
            background-image: ${getIcons('icon_arrow_double_left_line', 'Gray/Darkgray_06')};
        }
        `
    }
    if (props.type === 'next') {
      return `
      background-image: ${getIcons('icon_arrow_s_next_line', 'Gray/Darkgray_01')};
        [data-theme="${THEME_1}"] &:disabled{
            background-color: ${disabledBackgroundColor};
            border-color: ${disabledBorderColor};
            background-image: ${getIcons('icon_arrow_s_next_line', 'Gray/Darkgray_06')};
        }
        [data-theme="${THEME_2}"] &:disabled{
            background-image: ${getIcons('icon_arrow_s_next_line', 'Gray/Darkgray_06')};
        }
        `
    }
    if (props.type === 'dnext') {
      return `
      background-image: ${getIcons('icon_arrow_double_right_line', 'Gray/Darkgray_01')};
         [data-theme="${THEME_1}"] &:disabled{
            background-color: ${disabledBackgroundColor};
            border-color: ${disabledBorderColor};
            background-image: ${getIcons('icon_arrow_double_right_line', 'Gray/Darkgray_06')};
        }
         [data-theme="${THEME_2}"] &:disabled{
            background-image: ${getIcons('icon_arrow_double_right_line', 'Gray/Darkgray_06')};
        }
        `
    }
  }}
`
export const BsPaginationButton = styled('button', {
  type: String
})`
  cursor: pointer;
  ${BsPaginationButtonCss}
`
export const BsPaginationisMore = styled.span`
  ${BsPaginationButtonCss}
`
