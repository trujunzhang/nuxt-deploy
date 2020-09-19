import * as Types from '@app/types'
import { containInRelationObject, equalToRelationObject } from './utils/parseQuery'

export class PeopleInEventParameters {
  query: IParseQuery

  constructor(query) {
    this.query = query
  }

  addParameters(terms) {
    const { userId, eventId, restaurantId, recipeUniqueId } = terms
    if (!!userId) {
      equalToRelationObject({
        query: this.query,
        objectSchemaName: Types.model.PARSE_USERS,
        terms: {
          singleObjectId: userId
        }
      })
    }
    if (!!eventId) {
      equalToRelationObject({
        query: this.query,
        objectSchemaName: Types.model.PARSE_EVENTS,
        terms: {
          singleObjectId: eventId
        }
      })
    }
    if (!!restaurantId) {
      equalToRelationObject({
        query: this.query,
        objectSchemaName: Types.model.PARSE_RESTAURANTS,
        terms: {
          singleObjectId: restaurantId
        }
      })
    }
    if (!!recipeUniqueId) {
      containInRelationObject({
        query: this.query,
        objectSchemaName: Types.model.PARSE_RECIPES,
        terms: {
          singleUniqueId: recipeUniqueId
        },
        fieldName: 'recipes'
      })
    }
    return this
  }

  end() {
    return this.query
  }
}
