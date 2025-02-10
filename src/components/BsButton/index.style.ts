import {css, styled} from '@vue-styled-components/core'
import {DesignConfigColor, DESIGNCONFIG_KEYNAME_COLOR, _toCSSUnit} from '@/themes/DesignConfig'
import {Wrapper as IconCSS} from '@/components/BsIcon/index.style'
import {COLOR_KEYNAME} from '@/constants/components/BsButton/index'
import {RouterLink} from 'vue-router'

const THEME_DEFAULT = 'theme-default'
const THEME_DEFAULT_OUTLINE = 'theme-default-outline'
const THEME_PILLS = 'theme-pills'
const THEME_PILLS_OUTLINE = 'theme-pills-outline'
const THEME_TEXT = 'theme-text'
const SIZE_DEFAULT = 'size-default'
const SIZE_LARGE = 'size-large'
const SIZE_MEDIUM = 'size-medium'

const heightSizeDefault = 48
const heightSizeLarge = 52
const heightSizeMedium = 52

export const buttonCSS = css`
  appearance: none;
  background: none;
  border: none;
  padding: 0;
  margin: 0;
  font: inherit;
  color: inherit;
  text-align: inherit;
  outline: none;
  cursor: pointer;
  &[data-theme='${THEME_DEFAULT}'],
  &[data-theme='${THEME_DEFAULT_OUTLINE}'],
  &[data-theme='${THEME_PILLS}'],
  &[data-theme='${THEME_PILLS_OUTLINE}'] {
    border: ${_toCSSUnit('1px')} solid;
    padding-left: ${_toCSSUnit('30px')};
    padding-right: ${_toCSSUnit('30px')};
    &[data-size='${SIZE_DEFAULT}'] {
      height: ${_toCSSUnit(`${heightSizeDefault}px`)};
    }
    &[data-size='${SIZE_LARGE}'] {
      height: ${_toCSSUnit(`${heightSizeLarge}px`)};
    }
    &[data-size='${SIZE_MEDIUM}'] {
      height: ${_toCSSUnit(`${heightSizeMedium}px`)};
    }
  }
  &[data-theme='${THEME_DEFAULT}'],
  &[data-theme='${THEME_DEFAULT_OUTLINE}'] {
    border-radius: ${_toCSSUnit('4px')};
  }
  &[data-theme='${THEME_PILLS}'],
  &[data-theme='${THEME_PILLS_OUTLINE}'] {
    border-radius: ${_toCSSUnit('52px')};
  }
  &[data-theme='${THEME_TEXT}'] {
    border: none;
  }
  ${Object.keys(COLOR_KEYNAME).map((k: string) => {
    const _DesignConfigColor: Record<string, string> = DesignConfigColor
    const _DESIGNCONFIG_KEYNAME_COLOR: string = DESIGNCONFIG_KEYNAME_COLOR[k as keyof typeof DESIGNCONFIG_KEYNAME_COLOR]
    return `&[data-color='${k}'] {
      color: ${_DesignConfigColor[_DESIGNCONFIG_KEYNAME_COLOR]};
      }
      &[data-theme='${THEME_DEFAULT}'][data-color='${k}'],
      &[data-theme='${THEME_PILLS}'][data-color='${k}']{
        border-color: ${_DesignConfigColor[_DESIGNCONFIG_KEYNAME_COLOR]};
        background-color: ${_DesignConfigColor[_DESIGNCONFIG_KEYNAME_COLOR]};
        ${
          k === DESIGNCONFIG_KEYNAME_COLOR['Gray/Lightgray_01'] ||
          k === DESIGNCONFIG_KEYNAME_COLOR['Gray/Lightgray_02'] ||
          k === DESIGNCONFIG_KEYNAME_COLOR['Gray/Lightgray_03'] ||
          k === DESIGNCONFIG_KEYNAME_COLOR['Gray/Lightgray_04'] ||
          k === DESIGNCONFIG_KEYNAME_COLOR['Gray/Lightgray_05'] ||
          k === DESIGNCONFIG_KEYNAME_COLOR['Gray/White']
            ? `color: ${_DesignConfigColor[DESIGNCONFIG_KEYNAME_COLOR['Gray/Darkgray_01']]}`
            : `color: #fff;`
        }
        
      }
      `
  })}
  &:disabled {
    opacity: 0.5;
  }
`
export const WrapperButton = styled.button`
  ${buttonCSS}
`
export const WrapperRouterLink = styled(RouterLink)`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  text-decoration: none;
  sizing-box: border-box;
  ${buttonCSS}
  &[data-theme='${THEME_DEFAULT}'],
  &[data-theme='${THEME_DEFAULT_OUTLINE}'],
  &[data-theme='${THEME_PILLS}'],
  &[data-theme='${THEME_PILLS_OUTLINE}'] {
    &[data-size='${SIZE_DEFAULT}'] {
      height: ${_toCSSUnit(`${heightSizeDefault - 2}px`)};
    }
    &[data-size='${SIZE_LARGE}'] {
      height: ${_toCSSUnit(`${heightSizeLarge - 2}px`)};
    }
    &[data-size='${SIZE_MEDIUM}'] {
      height: ${_toCSSUnit(`${heightSizeMedium - 2}px`)};
    }
  }
`

export const ButtonInnerSectionText = styled.span`
  font-family: Pretendard;
  font-weight: 600;
  letter-spacing: -0.01em;
  text-align: center;
  text-underline-position: from-font;
  text-decoration-skip-ink: none;
  [data-size='${SIZE_DEFAULT}'] & {
    font-size: ${_toCSSUnit('14px')};
    line-height: ${_toCSSUnit('22.4px')};
  }
  [data-size='${SIZE_LARGE}'] & {
    font-size: ${_toCSSUnit('18px')};
    line-height: ${_toCSSUnit('25.2px')};
  }
  [data-size='${SIZE_MEDIUM}'] & {
    font-size: ${_toCSSUnit('16px')};
    line-height: ${_toCSSUnit('22.4px')};
  }
`
export const ButtonInnerSection = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: ${_toCSSUnit('8px')};
`
const ButtonIconCSS = css`
  display: flex;
  width: ${_toCSSUnit('20px')};
  height: ${_toCSSUnit('20px')};
  ${IconCSS} {
    min-width: 100%;
    min-height: 100%;
    width: 100%;
    height: 100%;
  }
`
export const ButtonInnerSectionLeft = styled.div`
  ${ButtonIconCSS}
`
export const ButtonInnerSectionRight = styled.div`
  ${ButtonIconCSS}
`
