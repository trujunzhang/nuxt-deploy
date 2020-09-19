import { ParseObjects } from '@appModels/index' //from '@app/library' //  '@app/models'
import { Photos } from '@app/library' //  '@app/libs'
import { RecorderUtils } from '@appDatabase/index' //'@app/library' //  '@app/database'
import * as Types from '@app/types'

export class OwnPhotoForRecipe {
  async change(params: IOwnPhotoForRecipeChangeParams) {
    const { recipeUniqueId, photoId } = params
    // step1: get photo.
    const photo = await ParseObjects.getQueryByObjectSchemaName(Types.model.PARSE_PHOTOS).get(
      photoId
    )
    const isOwner = Photos.isPhotoParseObjectOwnRecipe(recipeUniqueId, photo)
    if (isOwner) {
      photo.set('photoType', 'restaurant')
      photo.set('recipe', null)
    } else {
      photo.set('photoType', 'recipe')
      photo.set(
        'recipe',
        ParseObjects.getInstanceWithoutData(Types.model.PARSE_RECIPES, recipeUniqueId)
      )
    }
    // step2: update photo.
    await photo.save()
    // step3: update the recorder
    await RecorderUtils.updateParseRecorder(Types.model.PARSE_PHOTOS, photo)
  }

  end() {
    return {
      type: Types.editModelAction.SAVE_MODEL_REQUEST
    }
  }
}
