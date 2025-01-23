import _ from 'lodash'

export interface Type {
  colorSet: object
  typography: Record<string, any>
}
export const _toEm = (s: string) =>
  _.replace(s, /(\d+(\.\d+)?)px/g, (__, v) => {
    if (v === '1') {
      return `1px`
    } else {
      return `calc(var(--ui-basic-component-fontsize) / 16 * ${v})`
    }
  })
export const _toCss = (params: Record<string, any>) =>
  _.join(
    _.map(params, (v: string, k: any) => `${k}: ${v};`),
    ''
  )
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
      'font-size': _toEm('22px'),
      'font-weight': 400,
      'line-height': _toEm('35.2px'),
      'text-align': 'left',
      'text-underline-position': 'from-font',
      'text-decoration-skip-ink': 'none'
    },
    ...params
  })
  static typography = {
    'H1/Bold': this.typographyParams({
      'font-size': _toEm('22px'),
      'line-height': _toEm('35.2px'),
      'font-weight': 700
    }),
    'T1/Bold': this.typographyParams({
      'font-size': _toEm('18px'),
      'line-height': _toEm('28.8px'),
      'font-weight': 700
    }),
    'T1/Medium': this.typographyParams({
      'font-size': _toEm('18px'),
      'line-height': _toEm('28.8px'),
      'font-weight': 500
    }),
    'T2/Semibold': this.typographyParams({
      'font-size': _toEm('16px'),
      'line-height': _toEm('25.6px'),
      'font-weight': 600
    }),
    'T2/Medium': this.typographyParams({
      'font-size': _toEm('16px'),
      'font-weight': 500,
      'line-height': _toEm('25.6px')
    }),
    'Body1/Bold': this.typographyParams({
      'font-size': _toEm('14px'),
      'font-weight': 700,
      'line-height': _toEm('22.4px')
    }),
    'Body1/Semibold': this.typographyParams({
      'font-size': _toEm('14px'),
      'font-weight': 600,
      'line-height': _toEm('22.4px')
    }),
    'Body1/Medium': this.typographyParams({
      'font-size': _toEm('14px'),
      'font-weight': 500,
      'line-height': _toEm('22.4px')
    }),
    'Body1/Regular': this.typographyParams({
      'font-size': _toEm('14px'),
      'font-weight': 400,
      'line-height': _toEm('22.4px')
    }),
    'Body2/Bold': this.typographyParams({
      'font-size': _toEm('13px'),
      'font-weight': 700,
      'line-height': _toEm('18.2px')
    }),
    'Body2/Semibold': this.typographyParams({
      'font-size': _toEm('13px'),
      'font-weight': 600,
      'line-height': _toEm('18.2px')
    }),
    'Body2/Medium': this.typographyParams({
      'font-size': _toEm('13px'),
      'font-weight': 500,
      'line-height': _toEm('18.2px')
    }),
    'Body2/Regular': this.typographyParams({
      'font-size': _toEm('13px'),
      'font-weight': 400,
      'line-height': _toEm('18.2px')
    }),
    'Caption1/Medium': this.typographyParams({
      'font-size': _toEm('12px'),
      'font-weight': 500,
      'line-height': _toEm('16.7px')
    })
  }
  static color = {
    'Gray/Black': '#000000',
    'Gray/Darkgray_01': '#212121',
    'Gray/Darkgray_02': '#454545',
    'Gray/Darkgray_03': '#535353',
    'Gray/Darkgray_04': '#646464',
    'Gray/Darkgray_05': '#767676',
    'Gray/Darkgray_06': '#999999',
    'Gray/Lightgray_01': '#CCCCCC',
    'Gray/Lightgray_02': '#E1E1E1',
    'Gray/Lightgray_03': '#F0F0F0',
    'Gray/Lightgray_04': '#F7F7F7',
    'Gray/Lightgray_05': '#FAFAFA',
    'Gray/White': '#FFFFFF',
    'Primary/Primary_01': '#2196F3',
    'Warning/Point_Red': '#FA2828'
  }
}
