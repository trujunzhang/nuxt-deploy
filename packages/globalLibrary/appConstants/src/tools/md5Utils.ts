const md5 = require('blueimp-md5') // should use 'require'.

export class Md5Utils {
  static getMd5String(value: string, toLowerCase: boolean = false) {
    const nextString = toLowerCase ? value.toLowerCase() : value
    return md5(nextString)
  }
}
