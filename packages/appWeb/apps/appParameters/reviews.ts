import { AppConstants } from '@app/types'

import { equalToRelationObject } from './utils/parseQuery'

import { StatusConstants } from '@app/types'
import * as Types from '@app/types'

export class ReviewsParameters {
  query: IParseQuery

  constructor(query: IParseQuery) {
    this.query = query
  }

  addSortParameters(terms: IParseQueryReviewsTerm) {
    const { sort_by } = terms
    if (!!sort_by) {
      const sortTag = StatusConstants.getSortTag(sort_by)
      switch (sortTag) {
        case Types.common.REVIEW_SORT_NORMAL:
          // Here, sorted by default.
          break
        case Types.common.REVIEW_SORT_NEWEST:
          this.query.descending('updatedAt')
          break
        case Types.common.REVIEW_SORT_OLDEST:
          this.query.ascending('updatedAt')
          break
        case Types.common.REVIEW_SORT_HIGHEST:
          this.query.descending('rate')
          break
        case Types.common.REVIEW_SORT_LOWEST:
          this.query.ascending('rate')
          break
      }
    }
  }

  addParameters(terms: IParseQueryReviewsTerm) {
    const { relatedObjectSchemaName, forObject } = terms

    const reviewType = AppConstants.realmTypes[relatedObjectSchemaName]
    this.addSortParameters(terms)

    switch (relatedObjectSchemaName) {
      case Types.model.PARSE_USERS: {
        equalToRelationObject({
          query: this.query,
          objectSchemaName: Types.model.PARSE_USERS,
          terms: {
            singleObjectId: (forObject as IParseModelUsers).id
          },
          fieldName: 'creator'
        })
        break
      }
      default: {
        this.query.equalTo('reviewType', reviewType)
        const objectSchemaName = relatedObjectSchemaName
        equalToRelationObject({
          query: this.query,
          objectSchemaName,
          terms: {
            singleUniqueId: forObject.uniqueId
          }
        })
        break
      }
    }

    return this
  }

  end() {
    return this.query
  }
}
