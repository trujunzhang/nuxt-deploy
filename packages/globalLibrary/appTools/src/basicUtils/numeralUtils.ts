import numeral from 'numeral'

export class NumeralUtils {
  static newInstance(value?: any) {
    return numeral(value)
  }

  /**
   * Format a number by format.
   * @example
   * Giving format:
   *    var value = NumeralUtils.format('12345','0,0'); // => '12,2345'
   * @example
   * Using default format:
   *    var value = NumeralUtils.format('123',''); // => '123'
   */
  static format(value: any, inputString: any) {
    return numeral(value).format(inputString)
  }

  static reset() {
    numeral.reset()
  }
}
