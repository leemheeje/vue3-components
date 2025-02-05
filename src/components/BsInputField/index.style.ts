import {styled, css} from '@vue-styled-components/core'
import {
  DesignConfigTypography,
  DesignConfigColor,
  DESIGNCONFIG_KEYNAME_TYPO,
  DESIGNCONFIG_KEYNAME_COLOR,
  DESIGNCONFIG_ICON_MAP,
  _toGetBackgroundSVG,
  _toCSSParse,
  _toCSSUnit
} from '@/themes/DesignConfig'

const IS_READONLY = 'is-readonly'
const IS_DISABLED = 'is-disabled'
const IS_CONFIRM = 'is-confirm'
const IS_ERROR = 'is-error'
const IS_FOCUS = 'is-focus'
const THEME_2 = 'theme-2'

export const Wrapper = styled.span``
export const InputInnerSectionArea = styled('div', {
  class: String
})`
  display: flex;
  align-items: center;
  gap: ${_toCSSUnit('10px')};
  border-radius: ${_toCSSUnit('4px')};
  padding: 0 ${_toCSSUnit('16px')};
  overflow: hidden;
  ${(props) => {
    const style = {
      background: DesignConfigColor[DESIGNCONFIG_KEYNAME_COLOR['Gray/White']],
      'border-width': _toCSSUnit('1px'),
      'border-style': 'solid',
      'border-color': DesignConfigColor[DESIGNCONFIG_KEYNAME_COLOR['Gray/Lightgray_02']]
    }
    const _is = (s: string) => props.class?.includes(s)
    if (_is(IS_DISABLED) || _is(IS_READONLY)) {
      style['background'] = DesignConfigColor[DESIGNCONFIG_KEYNAME_COLOR['Gray/Lightgray_03']]
      style['border-color'] = DesignConfigColor[DESIGNCONFIG_KEYNAME_COLOR['Gray/Lightgray_02']]
    } else if (_is(IS_FOCUS)) {
      style['border-color'] = DesignConfigColor[DESIGNCONFIG_KEYNAME_COLOR['Primary/Primary_01']]
    } else if (_is(IS_ERROR)) {
      style['border-color'] = DesignConfigColor[DESIGNCONFIG_KEYNAME_COLOR['Warning/Point_Red']]
    } else if (_is(IS_CONFIRM)) {
      style['border-color'] = DesignConfigColor[DESIGNCONFIG_KEYNAME_COLOR['Primary/Primary_01']]
    }

    return css`
      ${_toCSSParse(style)}
    `
  }}
  [data-theme="${THEME_2}"] & {
    border-left-color: transparent;
    border-right-color: transparent;
    border-top-color: transparent;
    border-radius: 0px;
    padding: 0;
  }
`
export const InputField = styled.input`
  margin: 0;
  padding: 0;
  appearance: none;
  border: none;
  width: 100%;
  background: transparent;
  height: ${_toCSSUnit('48px')};
  ${css`
    ${_toCSSParse(DesignConfigTypography[DESIGNCONFIG_KEYNAME_TYPO['Body1/Regular']])}
  `} &::placeholder {
    color: ${DesignConfigColor[DESIGNCONFIG_KEYNAME_COLOR['Gray/Darkgray_06']]};
  }
  &:focus {
    outline: none;
  }
`

export const InputSectionLeftArea = styled.div`
  margin-left: 0;
  margin-right: auto;
  display: flex;
  align-items: center;
  gap: ${_toCSSUnit('8px')};
`

export const InputSectionRightArea = styled.div`
  margin-left: auto;
  margin-right: 0;
  display: flex;
  align-items: center;
  gap: ${_toCSSUnit('8px')};
`
export const InputValueTimerange = styled.div`
  white-space: nowrap;
  color: ${DesignConfigColor[DESIGNCONFIG_KEYNAME_COLOR['Primary/Primary_01']]};
  ${css`
    ${_toCSSParse(DesignConfigTypography[DESIGNCONFIG_KEYNAME_TYPO['Body2/Regular']])}
  `}
`

export const InputValueResetButton = styled.button`
  width: ${_toCSSUnit('20px')};
  height: ${_toCSSUnit('20px')};
  cursor: pointer;
  border: none;
  background: no-repeat center center;
  background-size: 100%;
  background-image: ${_toGetBackgroundSVG(
    DESIGNCONFIG_ICON_MAP['icon_cancel_fill'],
    DesignConfigColor[DESIGNCONFIG_KEYNAME_COLOR['Gray/Darkgray_06']]
  )};
`

export const InputOuterSectionArea = styled.div`
  display: flex;
  align-items: flex-start;
  flex-direction: column;
  margin-top: ${_toCSSUnit('6px')};
  background: ${(props) => props.theme.primaryColor};
`

// input외부 텍스트 스타일
const textMasseageStyle = css`
  ${_toCSSParse(DesignConfigTypography[DESIGNCONFIG_KEYNAME_TYPO['Body2/Regular']])}
`
export const InputSupportMasseage = styled.div`
  ${textMasseageStyle}
  color: ${DesignConfigColor[DESIGNCONFIG_KEYNAME_COLOR['Gray/Darkgray_05']]};
`
export const InputErrorMasseage = styled.div`
  ${textMasseageStyle}
  color: ${DesignConfigColor[DESIGNCONFIG_KEYNAME_COLOR['Warning/Point_Red']]};
`
export const InputConfirmMasseage = styled.div`
  ${textMasseageStyle}
  color: ${DesignConfigColor[DESIGNCONFIG_KEYNAME_COLOR['Primary/Primary_01']]};
`
