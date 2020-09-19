import { MomentUtils } from '@app/tools'

export class Recipes {
  static config = {}

  static getUpdatedAtFormat(recipe) {
    const start = recipe.updatedAt
    // for example: "Saturday, 1 Jul, 12:00 am"
    const day = MomentUtils.toDateString(start, 'MM/DD/YYYY')
    return day
  }
}
