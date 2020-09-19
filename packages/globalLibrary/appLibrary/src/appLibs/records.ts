import * as Types from '@app/types'

// import { ParseObjects } from '@appModels/index'

import { AppConstants } from '@app/types'

export class Records {
  static toFirstUpperString(name) {
    return name.charAt(0).toUpperCase() + name.slice(1)
  }

  // static setParseObjectFieldWithoutDataBySchema(
  //   objectSchemaName: string,
  //   instance,
  //   parseInstanceId: string
  // ) {
  //   const instanceWithoutData = ParseObjects.getInstanceWithoutData(
  //     objectSchemaName,
  //     parseInstanceId
  //   )
  //   const parseType = AppConstants.realmTypes[objectSchemaName]
  //   instance.set(parseType, instanceWithoutData)
  // }
}
