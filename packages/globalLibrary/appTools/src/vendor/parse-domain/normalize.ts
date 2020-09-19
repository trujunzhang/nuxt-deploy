export class Normalize {
  static url(url: string) {
    if (!url || typeof url !== 'string') {
      return null
    }

    return url.trim().toLowerCase()
  }

  static options(options: any) {
    const normalized = !options || typeof options !== 'object' ? Object.create(null) : options

    if ('privateTlds' in normalized === false) {
      normalized.privateTlds = false
    }
    if ('customTlds' in normalized && normalized.customTlds instanceof RegExp === false) {
      normalized.customTlds = new RegExp('\\.(' + normalized.customTlds.join('|') + ')$')
    }

    return normalized
  }
}
