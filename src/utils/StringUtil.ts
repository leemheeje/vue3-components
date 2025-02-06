import _ from 'lodash'

export default class StringUtil {
  static getUUID() {
    return _.uniqueId('_uid_')
  }
  static isHtmlCode(s: string) {
    return /<\/?[a-z][\s\S]*>/i.test(s)
  }
  static isEqual(a: any, _a: any) {
    return _.isEqual(a, _a)
  }
  static setPriceComma(str: string) {
    return str ? str.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',') : '0'
  }
  static isEmpty(o: string) {
    return _.isEmpty(o)
  }
}
