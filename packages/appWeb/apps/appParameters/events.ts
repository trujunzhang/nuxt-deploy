import * as Types from '@app/types'

import { equalToRelationObject } from './utils/parseQuery'

export class EventsParameters {
  query: IParseQuery

  constructor(query) {
    this.query = query
  }

  addParameters(terms: IParseQueryEventsTerm) {
    const { userId, restaurantId } = terms

    if (!!userId) {
      equalToRelationObject({
        query: this.query,
        objectSchemaName: Types.model.PARSE_USERS,
        terms: {
          singleObjectId: userId
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
    return this
  }

  end() {
    return this.query
  }
}
