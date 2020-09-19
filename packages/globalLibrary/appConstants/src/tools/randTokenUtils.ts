import { RandToken } from '../vendor/node-rand-token'

export class RandTokenUtils {
  static secret(length) {
    const token = new RandToken().generate(length)
    return token
  }
}
