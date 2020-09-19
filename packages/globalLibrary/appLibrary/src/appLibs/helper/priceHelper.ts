export class PriceHelper {
  static fixPriceAsString(price: string) {
    return price.replace('$', '').replace(',', '')
  }
}
