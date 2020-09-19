import { equalToRelationObject } from './utils/parseQuery'

import * as Types from '@app/types'

export class RecipesParameters {
  query: IParseQuery

  constructor(query) {
    this.query = query
  }

  addParameters(terms: IParseQueryRecipesTerm) {
    const { restaurantId, recipeIds, recipeUniquIds, creatorId } = terms
    if (!!restaurantId) {
      equalToRelationObject({
        query: this.query,
        objectSchemaName: Types.model.PARSE_RESTAURANTS,
        terms: {
          singleObjectId: restaurantId
        }
      })
    }
    if (!!recipeIds) {
      this.query.containedIn('objectId', recipeIds)
    }
    if (!!recipeUniquIds) {
      this.query.containedIn('uniqueId', recipeUniquIds)
    }
    if (!!creatorId) {
      equalToRelationObject({
        query: this.query,
        objectSchemaName: Types.model.PARSE_USERS,
        terms: {
          singleObjectId: creatorId
        },
        fieldName: 'creator'
      })
    }
    return this
  }

  end() {
    return this.query
  }
}
