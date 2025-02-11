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
  static getByteSize(str: string) {
    let byteSize = 0
    for (let i = 0; i < str.length; i++) {
      const charCode = str.charCodeAt(i)
      if (charCode <= 0x7f) {
        byteSize += 1
      } else if (charCode <= 0x7ff) {
        byteSize += 2
      } else if (charCode >= 0xd800 && charCode <= 0xdbff) {
        byteSize += 4
        i++
      } else {
        byteSize += 3
      }
    }
    return byteSize
  }
}
