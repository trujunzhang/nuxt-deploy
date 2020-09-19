import { ImagesSlideShowViewHelper } from '../imagesSlideShowViewHelper'
import { Photos } from '@app/library' //  '@app/libs'

import * as Types from '@app/types'

describe('methods correctly in the ImagesSlideShowViewHelper', () => {
  test('get slideObject for Images Slide Show', () => {
    const objectId = 'zis2vkx9G2'
    const listPhotosDict: IListPhotosDict<string> = {
      zis2vkx9G2:
        'http://res.cloudinary.com/di3fvexj8/image/upload/s--F_wZB3xc--/c_fill,f_auto,h_348,q_auto,w_348/v1/politicl/o_zhkvq8'
    }
    const slideObject = ImagesSlideShowViewHelper.generateSlideShowObject({
      listPhotosDict,
      objectSchemaName: Types.model.PARSE_USERS,
      forObject: {
        id: objectId
      }
    })

    const expectedSlideObject = {
      emptyList: false,
      photoUrl: listPhotosDict[objectId],
      placeholder: Photos.config.placeHolderSmallImage[Types.model.PARSE_USERS]
    }

    expect(slideObject).toEqual(expectedSlideObject)
  })
})
