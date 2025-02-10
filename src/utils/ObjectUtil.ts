import _ from 'lodash'

export default class ObjectUtil {
  static isLastIndex(a: any[], index: number) {
    return index === a.length - 1
  }
  static isEqual(a: any, _a: any) {
    return _.isEqual(a, _a)
  }
  static isEmpty(o: Record<string, any> | Record<string, any>[]) {
    return _.isEmpty(o)
  }
}
