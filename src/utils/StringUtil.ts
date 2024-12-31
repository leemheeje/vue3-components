export default class StringUtil {
  static isHtmlCode(s: string) {
    return /<\/?[a-z][\s\S]*>/i.test(s)
  }
}
