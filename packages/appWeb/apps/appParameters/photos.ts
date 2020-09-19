import { AppConstants } from '@app/types'
import { ParseObjects } from '@appModels/index'

import { equalToRelationObject } from './utils/parseQuery'
import * as Types from '@app/types'

export class PhotosParameters {
  query: IParseQuery

  constructor(query) {
    this.query = query
  }

  addParameters(terms: IParseQueryPhotoTerm) {
    const { photoParamsType } = terms
    switch (photoParamsType) {
      case Types.common.PHOTOS_TERMS_PARAM_NORMAL:
        this.queryPhotoNormal(terms)
        break
      case Types.common.PHOTOS_TERMS_PARAM_FOR_EDIT_RECIPE:
        this.queryPhotoForEditRecipe(terms)
        break
      case Types.common.PHOTOS_TERMS_PARAM_FOR_SLIDE_SHOW:
        this.queryPhotoForSlideShow(terms)
        break
    }
    return this
  }

  queryPhotoForSlideShow(terms: IParseQueryPhotoTerm) {
    const { objectSchemaName, forObjectUniqueId } = terms
    const photoType = AppConstants.realmTypes[objectSchemaName]
    this.query.equalTo('photoType', photoType)
    const instanceWithoutData = ParseObjects.getInstanceWithoutData(
      objectSchemaName,
      forObjectUniqueId
    )
    this.query.equalTo(photoType, instanceWithoutData)
  }

  queryPhotoForEditRecipe(terms: IParseQueryPhotoTerm) {
    const { objectSchemaName, forObjectUniqueId } = terms
    // const instanceWithoutData = ParseObjects.getInstanceWithoutData(objectSchemaName, forObjectUniqueId)
    // this.query.equalTo('restaurant', instanceWithoutData)

    equalToRelationObject({
      query: this.query,
      objectSchemaName: Types.model.PARSE_RESTAURANTS,
      terms: {
        singleUniqueId: forObjectUniqueId
      }
    })
  }

  queryPhotoNormal(terms: IParseQueryPhotoTerm) {
    const { objectSchemaName, forObjectUniqueId, creatorId, withoutPhotoType } = terms
    if (!!creatorId) {
      const instanceWithoutData = ParseObjects.getInstanceWithoutData(objectSchemaName, creatorId)
      this.query.equalTo('creator', instanceWithoutData)
    } else if (!!objectSchemaName) {
      const photoType = AppConstants.realmTypes[objectSchemaName]
      if (!withoutPhotoType && objectSchemaName !== Types.model.PARSE_USERS) {
        this.query.equalTo('photoType', photoType)
      }
      if (!!forObjectUniqueId) {
        this.queryRelation(terms)
      }
    }
  }

  private queryRelation(terms: IParseQueryPhotoTerm) {
    const { objectSchemaName, forObjectUniqueId } = terms

    equalToRelationObject({
      query: this.query,
      objectSchemaName,
      terms: {
        singleUniqueId: forObjectUniqueId
      }
    })
  }

  end() {
    return this.query
  }
}
