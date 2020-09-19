import { ParseModels, ParseObjects } from '@appModels/index' //from '@app/library' //  '@app/models'
import * as Types from '@app/types'

import { WebParseDatabaseUtils, ParseFirstObjectHelper, RecorderUtils } from '@appDatabase/index' //'@app/library' //  '@app/database'

export class WriteOnlineParseObjects {
  private editModelType: string
  private objectSchemaName: string
  private onlineParseObject: IParseObjectWithNull = null
  private originalModel: any = null
  private isNewOnlineParseObject: boolean = false

  constructor(params: IWriteOnlineParseObjectsParams) {
    const { editModelType, objectSchemaName } = params
    this.editModelType = editModelType
    this.objectSchemaName = objectSchemaName
  }

  private createNewParseObject() {
    this.isNewOnlineParseObject = true
    this.onlineParseObject = ParseObjects.createParseInstance(this.objectSchemaName)
  }

  /**
   *  Ready to write the online parse object.
   *   1. If it is new object, create a new parse instance.
   *   2. If it already exist, then query it.
   * @param model
   */
  private async writeBeforeHook(model: IParseBaseModel) {
    switch (this.editModelType) {
      case Types.editModel.MODEL_FORM_TYPE_NEW:
        this.createNewParseObject()
        break
      case Types.editModel.MODEL_FORM_TYPE_EDIT:
        this.onlineParseObject = await ParseFirstObjectHelper.getFirstOnlineParseInstance({
          objectSchemaName: this.objectSchemaName,
          localRealmModelObject: model
        })
        if (!this.onlineParseObject) {
          this.createNewParseObject()
        }
        break

      default:
        throw new Error('No matched editModelType to get the OnlineParseObject!')
    }

    if (this.onlineParseObject === undefined) {
      throw new Error('Not found online parse object to save!')
    }
  }

  private async setParseObjectProperties(model: IParseBaseModel, onlineParseObject: IParseObject) {
    if (this.isNewOnlineParseObject) {
      await WebParseDatabaseUtils.newOnlineParseInstance({
        objectSchemaName: this.objectSchemaName,
        onlineParseObject,
        parseModel: model
      })
    } else {
      await WebParseDatabaseUtils.updateOnlineParseInstance({
        objectSchemaName: this.objectSchemaName,
        onlineParseObject,
        parseModel: model
      })
    }
    // step1: save the online object.
    await onlineParseObject.save()
  }

  async write(model: IParseBaseModel) {
    await this.writeBeforeHook(model)

    if (!!this.onlineParseObject) {
      // Step1: Set the properties for the parse object, then save it.
      await this.setParseObjectProperties(model, this.onlineParseObject)

      // Step2: save it's recorder.
      await RecorderUtils.updateParseRecorder(this.objectSchemaName, this.onlineParseObject)

      // Step3: convert the parse object to the parse model.
      this.originalModel = ParseModels.parseOnlineParseObject(
        this.objectSchemaName,
        this.onlineParseObject
      )
    } else {
      throw new Error('not found the onlineParseObject before saving it!')
    }
  }

  /**
   * Sometime, only need to get the online parse object.
   */
  getOnlineParseObject() {
    return this.onlineParseObject
  }

  end() {
    const payload: IWriteOnlineParseObjectsPayload = {
      parseId: this.originalModel.id,
      originModel: this.originalModel
    }

    return {
      type: Types.editModelAction.WRITE_MODEL_DONE,
      payload
    }
  }
}
