const numeric = '0123456789'
const alphaLower = 'abcdefghijklmnopqrstuvwxyz'

export class RandToken {
  private static alphaUpper = alphaLower.toUpperCase()

  // NOTE: This is explicitly in sortable order:
  private static alphaNumeric = numeric + RandToken.alphaUpper + alphaLower

  private defaults = {
    chars: 'default',
    source: 'math'
  }
  private options: any

  private static defaultGenerator = new RandToken()

  private static defaultEpoch = 946684800000
  private static defaultPrefixLength = 8

  static suid(length, epoch, prefixLength) {
    epoch = epoch || RandToken.defaultEpoch
    prefixLength = prefixLength || RandToken.defaultPrefixLength
    return RandToken.suidPrefix(epoch, prefixLength) + RandToken.defaultGenerator.generate(length)
  }

  constructor(options = null) {
    this.options = this.buildGenerator(options)
  }

  private static suidPrefix(epoch, prefixLength) {
    let ret = this.base62(Date.now() - epoch)
    while (ret.length < prefixLength) {
      ret = '0' + ret
    }
    return ret
  }

  validateTokenChars(tokenChars) {
    // assert(tokenChars)
    // assert(typeof tokenChars === 'string')
    // assert(tokenChars.length > 0)
    // assert(tokenChars.length < 256)
  }

  private static base62(n) {
    // assert(n >= 0)
    n = Math.floor(n)
    const ret: any = []
    do {
      const index = n % 62
      ret.push(RandToken.alphaNumeric[index])
      n = Math.floor(n / 62)
    } while (n > 0)
    return ret.reverse().join('')
  }

  buildGenerator(options) {
    // assert(!options || typeof options === 'object')
    options = options || {}
    options.chars = options.chars || this.defaults.chars
    options.source = options.source || this.defaults.source

    // Allowed characters
    switch (options.chars) {
      case 'default':
        options.chars = RandToken.alphaNumeric
        break
      case 'a-z':
      case 'alpha':
        options.chars = alphaLower
        break
      case 'A-Z':
      case 'ALPHA':
        options.chars = RandToken.alphaUpper
        break
      case '0-9':
      case 'numeric':
        options.chars = numeric
        break
      case 'base32':
        options.chars = RandToken.alphaUpper + '234567'
        break
      default:
      // use the characters as is
    }
    this.validateTokenChars(options.chars)

    // Source of randomness:
    switch (options.source) {
      case 'default':
      case 'crypto':
      case 'math':
        options.source = (size) => {
          const buf = new Buffer(size)
          for (let i = 0; i < size; i++) {
            buf.writeUInt8(Math.floor(256 * Math.random()), i)
          }
          return buf
        }
        break
      default:
        // assert(typeof options.source === 'function')
        break
    }

    return options
  }

  generate(size: number, chars: string | null = null) {
    if (!!chars) {
      this.validateTokenChars(chars)
    } else {
      chars = this.options.chars
    }
    let ret = ''
    if (!!chars) {
      const max = Math.floor(256 / chars.length) * chars.length
      while (ret.length < size) {
        const buf = this.options.source(size - ret.length)
        for (let i = 0; i < buf.length; i++) {
          const x = buf.readUInt8(i)
          if (x < max) {
            ret += chars[x % chars.length]
          }
        }
      }
    }
    return ret
  }
}
