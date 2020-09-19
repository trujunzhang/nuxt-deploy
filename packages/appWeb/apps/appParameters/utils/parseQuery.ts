import { ParseObjects } from '@appModels/index'
import { AppConstants } from '@app/types'
import { ParseSingleHelper } from './parseSingleHelper'

export function equalToRelationObject(params: IParseQueryEqualToRelationObjectParams) {
  const { query, objectSchemaName, terms, fieldName = null } = params

  const relationQueryBySchema = ParseObjects.getQueryByObjectSchemaName(objectSchemaName)
  const relationQuery = ParseSingleHelper.getParseSingleParameters(relationQueryBySchema, terms)

  let modelType = AppConstants.realmTypes[objectSchemaName]
  if (!!fieldName) {
    modelType = fieldName
  }
  query.matchesQuery(modelType, relationQuery)
}

export function containInRelationObject(params: IParseQueryEqualToRelationObjectParams) {
  const { query, objectSchemaName, terms, fieldName = null } = params

  const relationQueryBySchema = ParseObjects.getQueryByObjectSchemaName(objectSchemaName)
  const relationQuery = ParseSingleHelper.getParseSingleParameters(relationQueryBySchema, terms)

  let modelType = AppConstants.realmTypes[objectSchemaName]
  if (!!fieldName) {
    modelType = fieldName
  }
  query.matchesQuery(modelType, relationQuery)
}
