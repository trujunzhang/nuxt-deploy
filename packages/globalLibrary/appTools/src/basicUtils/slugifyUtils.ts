import slugify from 'slugify'

export class SlugifyUtils {
  static toSlugifyString(value: string) {
    // const s=  slugify(value, '_')
    const s = slugify(value, '_')
    return s
  }
}
