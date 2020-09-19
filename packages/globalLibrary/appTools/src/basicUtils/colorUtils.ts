// import { Color } from 'color'
const Color = require('color')

class ColorHelper {
  private obj: any
  private model: any
  private instance: any
  constructor(obj: any, model?: any) {
    this.obj = obj
    this.model = model

    this.instance = Color(obj, model)
  }

  darken(ratio: number) {
    this.instance.darken(ratio)

    return this
  }

  hex(val?: any) {
    return this.instance.hex(val)
  }
}

export const ColorUtils = (obj: any, model?: any) => {
  return Color(obj, model)
  // return new ColorHelper(obj, model)
}
