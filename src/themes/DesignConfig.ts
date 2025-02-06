import _ from 'lodash'
import * as KeyNamegroup from '@/themes/common/keynameGroup'
import iconMapGroup from '@/themes/common/iconMapGroup'

export interface Type {
  colorSet: object
  typography: Record<string, any>
}

export const DESIGNCONFIG_KEYNAME_TYPO = KeyNamegroup.DESIGNCONFIG_KEYNAME_TYPO
export const DESIGNCONFIG_KEYNAME_COLOR = KeyNamegroup.DESIGNCONFIG_KEYNAME_COLOR
export const DESIGNCONFIG_ICON_MAP = iconMapGroup

export const _toCSSUnit = (s: string) =>
  _.replace(s, /(\d+(\.\d+)?)px/g, (__, v) => {
    if (v === '1') {
      // return `1px`
      return `calc(var(--ui-basic-component-fontsize) / 16 * ${v})`
    } else {
      return `calc(var(--ui-basic-component-fontsize) / 16 * ${v})`
    }
  })
export const _toCSSParse = (params: Record<string, any>) =>
  _.join(
    _.map(params, (v: string, k: any) => `${k}: ${v};`),
    ''
  )

export const _toGetBackgroundSVG = (s: string, c?: string) => {
  const reg = new RegExp(/#([0-9a-fA-F]{3,6})\b/g)
  const _v = `data:image/svg+xml;utf8`
  const _c = c || '#000'
  const _s = s.replace(reg, _c).replace(reg, '%23$1')
  return `url('${_v},${_s}')`
}

export default class DesignConfig {
  static colorSet = {
    primary: '#3498db',
    error: '#e74c3c',
    warning: '#f1c40f',
    success: '#2ecc71',
    background: '#ecf0f1',
    text: '#2c3e50'
  }
  static typographyParams = (params: Record<string, any>) => ({
    ...{
      'font-family': 'Pretendard',
      'font-size': _toCSSUnit('22px'),
      'font-weight': 400,
      'line-height': _toCSSUnit('35.2px'),
      'text-align': 'left',
      'text-underline-position': 'from-font',
      'text-decoration-skip-ink': 'none'
    },
    ...params
  })
  static typography = {
    [DESIGNCONFIG_KEYNAME_TYPO['H1/Bold']]: this.typographyParams({
      'font-size': _toCSSUnit('22px'),
      'line-height': _toCSSUnit('35.2px'),
      'font-weight': 700
    }),
    [DESIGNCONFIG_KEYNAME_TYPO['T1/Bold']]: this.typographyParams({
      'font-size': _toCSSUnit('18px'),
      'line-height': _toCSSUnit('28.8px'),
      'font-weight': 700
    }),
    [DESIGNCONFIG_KEYNAME_TYPO['T1/Medium']]: this.typographyParams({
      'font-size': _toCSSUnit('18px'),
      'line-height': _toCSSUnit('28.8px'),
      'font-weight': 500
    }),
    [DESIGNCONFIG_KEYNAME_TYPO['T2/Semibold']]: this.typographyParams({
      'font-size': _toCSSUnit('16px'),
      'line-height': _toCSSUnit('25.6px'),
      'font-weight': 600
    }),
    [DESIGNCONFIG_KEYNAME_TYPO['T2/Medium']]: this.typographyParams({
      'font-size': _toCSSUnit('16px'),
      'font-weight': 500,
      'line-height': _toCSSUnit('25.6px')
    }),
    [DESIGNCONFIG_KEYNAME_TYPO['Body1/Bold']]: this.typographyParams({
      'font-size': _toCSSUnit('14px'),
      'font-weight': 700,
      'line-height': _toCSSUnit('22.4px')
    }),
    [DESIGNCONFIG_KEYNAME_TYPO['Body1/Semibold']]: this.typographyParams({
      'font-size': _toCSSUnit('14px'),
      'font-weight': 600,
      'line-height': _toCSSUnit('22.4px')
    }),
    [DESIGNCONFIG_KEYNAME_TYPO['Body1/Medium']]: this.typographyParams({
      'font-size': _toCSSUnit('14px'),
      'font-weight': 500,
      'line-height': _toCSSUnit('22.4px')
    }),
    [DESIGNCONFIG_KEYNAME_TYPO['Body1/Regular']]: this.typographyParams({
      'font-size': _toCSSUnit('14px'),
      'font-weight': 400,
      'line-height': _toCSSUnit('22.4px')
    }),
    [DESIGNCONFIG_KEYNAME_TYPO['Body2/Bold']]: this.typographyParams({
      'font-size': _toCSSUnit('13px'),
      'font-weight': 700,
      'line-height': _toCSSUnit('18.2px')
    }),
    [DESIGNCONFIG_KEYNAME_TYPO['Body2/Semibold']]: this.typographyParams({
      'font-size': _toCSSUnit('13px'),
      'font-weight': 600,
      'line-height': _toCSSUnit('18.2px')
    }),
    [DESIGNCONFIG_KEYNAME_TYPO['Body2/Medium']]: this.typographyParams({
      'font-size': _toCSSUnit('13px'),
      'font-weight': 500,
      'line-height': _toCSSUnit('18.2px')
    }),
    [DESIGNCONFIG_KEYNAME_TYPO['Body2/Regular']]: this.typographyParams({
      'font-size': _toCSSUnit('13px'),
      'font-weight': 400,
      'line-height': _toCSSUnit('18.2px')
    }),
    [DESIGNCONFIG_KEYNAME_TYPO['Caption1/Medium']]: this.typographyParams({
      'font-size': _toCSSUnit('12px'),
      'font-weight': 500,
      'line-height': _toCSSUnit('16.7px')
    })
  }
  static color = {
    [DESIGNCONFIG_KEYNAME_COLOR['Gray/Black']]: '#000000',
    [DESIGNCONFIG_KEYNAME_COLOR['Gray/Darkgray_01']]: '#212121',
    [DESIGNCONFIG_KEYNAME_COLOR['Gray/Darkgray_02']]: '#454545',
    [DESIGNCONFIG_KEYNAME_COLOR['Gray/Darkgray_03']]: '#535353',
    [DESIGNCONFIG_KEYNAME_COLOR['Gray/Darkgray_04']]: '#646464',
    [DESIGNCONFIG_KEYNAME_COLOR['Gray/Darkgray_05']]: '#767676',
    [DESIGNCONFIG_KEYNAME_COLOR['Gray/Darkgray_06']]: '#999999',
    [DESIGNCONFIG_KEYNAME_COLOR['Gray/Lightgray_01']]: '#CCCCCC',
    [DESIGNCONFIG_KEYNAME_COLOR['Gray/Lightgray_02']]: '#E1E1E1',
    [DESIGNCONFIG_KEYNAME_COLOR['Gray/Lightgray_03']]: '#F0F0F0',
    [DESIGNCONFIG_KEYNAME_COLOR['Gray/Lightgray_04']]: '#F7F7F7',
    [DESIGNCONFIG_KEYNAME_COLOR['Gray/Lightgray_05']]: '#FAFAFA',
    [DESIGNCONFIG_KEYNAME_COLOR['Gray/White']]: '#FFFFFF',
    [DESIGNCONFIG_KEYNAME_COLOR['Primary/Primary_01']]: '#2196F3',
    [DESIGNCONFIG_KEYNAME_COLOR['Primary/Primary_02']]: '#2196F3',
    [DESIGNCONFIG_KEYNAME_COLOR['Primary/Primary_03']]: '#2196F3',
    [DESIGNCONFIG_KEYNAME_COLOR['Primary/Primary_04']]: '#2196F3',
    [DESIGNCONFIG_KEYNAME_COLOR['Primary/Primary_05']]: '#E5F4FF',
    [DESIGNCONFIG_KEYNAME_COLOR['Warning/Point_Red']]: '#FA2828'
  }
}
export const DesignConfigTypography = DesignConfig.typography
export const DesignConfigColor = DesignConfig.color
