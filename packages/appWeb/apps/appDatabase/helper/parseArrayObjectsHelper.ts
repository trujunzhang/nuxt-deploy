import { RecipeUniqueIdsHelper } from '@appModels/index'
import { ParseUtils } from '@appParse/index'

export class ParseArrayObjectsHelper {
  /**
   *  Get the first online user parse instance.
   *
   * @param recipeUniqueIdsAsString - Realm Recipe model's uniqueId joined with ';'.
   */
  static async getRecipesParseObjectsForPeopleInEvent(
    recipeUniqueIdsAsString: string
  ): Promise<IParseObject[]> {
    const recipeUniquIds: string[] = RecipeUniqueIdsHelper.getRecipeUniqueIdsArrayFromString(
      recipeUniqueIdsAsString
    )
    const terms = {
      recipeUniquIds
    }
    const query = ParseUtils.getRecipesParameters(terms)
    const result: IParseObject[] = await query.find({
      useMasterKey: true
    })
    return result
  }
}
