import {styled, css} from '@vue-styled-components/core'
import {THEME_KEYNAME} from '@/constants/components/BsCheckbox/index'
import {
  _toCSSUnit,
  _toGetBackgroundSVG,
  DESIGNCONFIG_ICON_MAP,
  DesignConfigColor,
  DESIGNCONFIG_KEYNAME_COLOR,
  _toCSSParse,
  DesignConfigTypography,
  DESIGNCONFIG_KEYNAME_TYPO
} from '@/themes/DesignConfig'

const IS_DISABLED = 'is-disabled'
const THEME_1 = THEME_KEYNAME.THEME_1
const THEME_2 = THEME_KEYNAME.THEME_2
const THEME_3 = THEME_KEYNAME.THEME_3
const THEME_4 = THEME_KEYNAME.THEME_4
const THEME_5 = THEME_KEYNAME.THEME_5
const THEME_6 = THEME_KEYNAME.THEME_6
const CHECKBOX_THEME_1 = THEME_KEYNAME.CHECKBOX_THEME_1
const USE_THEME_6_CHECKICON = 'use-theme-6-checkicon'

const checkIconCSS = css`
  content: '';
  display: block;
  width: ${_toCSSUnit('20px')};
  height: ${_toCSSUnit('20px')};
  background: no-repeat center center;
  background-size: 100%;
`

export const Wrapper = styled.span`
  position: relative;
  * {
    box-sizing: border-box;
  }
  display: inline-flex;
`
export const InputLabelText = styled.div`
  color: ${DesignConfigColor[DESIGNCONFIG_KEYNAME_COLOR['Gray/Darkgray_02']]};
  ${css`
    ${_toCSSParse(DesignConfigTypography[DESIGNCONFIG_KEYNAME_TYPO['Body1/Medium']])}
  `}
`
export const InputLabel = styled.label`
  ${Wrapper}[data-theme="${THEME_1}"] &,
  ${Wrapper}[data-theme="${THEME_2}"] &,
  ${Wrapper}[data-theme="${THEME_3}"] &,
  ${Wrapper}[data-theme="${THEME_4}"] &,
  ${Wrapper}[data-theme="${THEME_5}"] & {
    display: inline-flex;
    min-width: ${_toCSSUnit('24px')};
    min-height: ${_toCSSUnit('24px')};
    padding-left: ${_toCSSUnit('24px')};
    ${InputLabelText} {
      padding-left: ${_toCSSUnit('8px')};
    }
  }
  ${Wrapper}[data-theme="${THEME_6}"] & {
    display: inline-flex;
    padding-left: ${_toCSSUnit('30px')};
    padding-right: ${_toCSSUnit('30px')};
    align-items: center;
    justify-content: center;
    min-height: ${_toCSSUnit('48px')};
    border-radius: ${_toCSSUnit('4px')};
    border: ${_toCSSUnit('1px')} solid ${DesignConfigColor[DESIGNCONFIG_KEYNAME_COLOR['Gray/Lightgray_01']]};
    ${InputLabelText} {
      ${css`
        ${_toCSSParse(DesignConfigTypography[DESIGNCONFIG_KEYNAME_TYPO['Body1/Semibold']])}
      `}
      color: ${DesignConfigColor[DESIGNCONFIG_KEYNAME_COLOR['Gray/Darkgray_05']]};
    }
  }
  ${Wrapper}[data-theme="${CHECKBOX_THEME_1}"] & {
    display: inline-flex;
    align-items: center;
    justify-content: flex-start;
    min-width: ${_toCSSUnit('52px')};
    width: ${_toCSSUnit('52px')};
    height: ${_toCSSUnit('32px')};
    padding-left: ${_toCSSUnit('3px')};
    padding-right: ${_toCSSUnit('3px')};
    border-radius: ${_toCSSUnit('32px')};
    background-color: ${DesignConfigColor[DESIGNCONFIG_KEYNAME_COLOR['Gray/Lightgray_01']]};
    &:before {
      content: '';
      width: ${_toCSSUnit('26px')};
      height: ${_toCSSUnit('26px')};
      display: block;
      border-radius: 50%;
      background: ${DesignConfigColor[DESIGNCONFIG_KEYNAME_COLOR['Gray/White']]};
    }
    ${InputLabelText} {
      opacity: 0;
      width: 0;
      height: 0;
      line-height: 0;
      position: absolute;
      left: 0;
      top: 0;
    }
  }
  ${Wrapper}.${IS_DISABLED} & {
    opacity: 0.5;
  }
`

export const InputCheckUI = styled.span`
  position: absolute;
  left: 0;
  top: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  min-width: ${_toCSSUnit('24px')};
  width: ${_toCSSUnit('24px')};
  height: ${_toCSSUnit('24px')};
  border: ${_toCSSUnit('1px')} solid;
  ${Wrapper}[data-theme="${THEME_1}"] &,
  ${Wrapper}[data-theme="${THEME_2}"] &,
  ${Wrapper}[data-theme="${THEME_3}"] & {
    &:before {
      ${checkIconCSS}
      background-image: ${_toGetBackgroundSVG(DESIGNCONFIG_ICON_MAP['icon_check_line'], '#fff')};
    }
  }
  ${Wrapper}[data-theme="${THEME_1}"] & {
    border-radius: ${_toCSSUnit('4px')};
    border-color: ${DesignConfigColor[DESIGNCONFIG_KEYNAME_COLOR['Gray/Lightgray_01']]};
  }
  ${Wrapper}[data-theme="${THEME_2}"] & {
    border-color: transparent;
    &:before {
      background-image: ${_toGetBackgroundSVG(
        DESIGNCONFIG_ICON_MAP['icon_check_line'],
        DesignConfigColor[DESIGNCONFIG_KEYNAME_COLOR['Gray/Lightgray_01']]
      )};
    }
  }
  ${Wrapper}[data-theme="${THEME_3}"] & {
    border-radius: 50%;
    border-color: ${DesignConfigColor[DESIGNCONFIG_KEYNAME_COLOR['Gray/Lightgray_01']]};
  }
  ${Wrapper}[data-theme="${THEME_4}"] &,
  ${Wrapper}[data-theme="${THEME_5}"] & {
    border-radius: 50%;
    border-color: ${DesignConfigColor[DESIGNCONFIG_KEYNAME_COLOR['Gray/Lightgray_01']]};
    &:before {
      content: '';
      display: block;
      border-radius: 50%;
      width: ${_toCSSUnit('8px')};
      height: ${_toCSSUnit('8px')};
      background: transparent;
    }
  }
`

export const InputCheckbox = styled.input.attrs(() => ({
  type: 'checkbox'
}))`
  width: 0px;
  height: 0px;
  position: absolute;
  left: 0;
  top: 0;
  overflow: hidden;
  line-height: 0;
  &:checked + ${InputLabel} ${InputCheckUI} {
    background-color: ${DesignConfigColor[DESIGNCONFIG_KEYNAME_COLOR['Primary/Primary_01']]};
    border-color: ${DesignConfigColor[DESIGNCONFIG_KEYNAME_COLOR['Primary/Primary_01']]};
  }
  ${Wrapper}[data-theme="${THEME_2}"] &:checked + ${InputLabel} ${InputCheckUI} {
    background-color: transparent;
    border-color: transparent;
    &:before {
      background-image: ${_toGetBackgroundSVG(
        DESIGNCONFIG_ICON_MAP['icon_check_line'],
        DesignConfigColor[DESIGNCONFIG_KEYNAME_COLOR['Primary/Primary_01']]
      )};
    }
  }
  ${Wrapper}[data-theme="${THEME_4}"] &:checked + ${InputLabel} ${InputCheckUI} {
    &:before {
      background-color: ${DesignConfigColor[DESIGNCONFIG_KEYNAME_COLOR['Gray/White']]};
    }
  }
  ${Wrapper}[data-theme="${THEME_5}"] &:checked + ${InputLabel} ${InputCheckUI} {
    border-color: ${DesignConfigColor[DESIGNCONFIG_KEYNAME_COLOR['Primary/Primary_01']]};
    background-color: transparent;
    &:before {
      width: ${_toCSSUnit('12px')};
      height: ${_toCSSUnit('12px')};
      background-color: ${DesignConfigColor[DESIGNCONFIG_KEYNAME_COLOR['Primary/Primary_01']]};
    }
  }

  ${Wrapper}[data-theme="${THEME_6}"] &:checked + ${InputLabel} {
    border-color: ${DesignConfigColor[DESIGNCONFIG_KEYNAME_COLOR['Primary/Primary_01']]};
    background-color: ${DesignConfigColor[DESIGNCONFIG_KEYNAME_COLOR['Primary/Primary_05']]};
    ${InputLabelText} {
      color: ${DesignConfigColor[DESIGNCONFIG_KEYNAME_COLOR['Primary/Primary_01']]};
    }
  }
  ${Wrapper}[data-theme="${CHECKBOX_THEME_1}"] &:checked + ${InputLabel} {
    background-color: ${DesignConfigColor[DESIGNCONFIG_KEYNAME_COLOR['Primary/Primary_01']]};
    justify-content: flex-end;
  }
  ${Wrapper}.${USE_THEME_6_CHECKICON}[data-theme="${THEME_6}"] &:checked + ${InputLabel} {
    ${InputLabelText} {
      display: inline-flex;
      gap: ${_toCSSUnit('8px')};
      align-items: center;
      &:before {
        ${checkIconCSS}
        background-image:
          ${_toGetBackgroundSVG(
          DESIGNCONFIG_ICON_MAP['icon_check_line'],
          DesignConfigColor[DESIGNCONFIG_KEYNAME_COLOR['Primary/Primary_01']]
        )};
      }
    }
  }
`
