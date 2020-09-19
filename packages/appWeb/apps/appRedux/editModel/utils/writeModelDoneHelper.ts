import * as Types from '@app/types'

import { RestaurantAddresHelper } from './restaurantAddresHelper'

export class WriteModelDoneHelper {
  private nextState: any
  onWriteModelDoneHook(state: any, writePayload: IWriteOnlineParseObjectsPayload) {
    const { parseId, originModel } = writePayload
    /**
     * Only for web app.
     * If the last restaurant did not contains 'address'.
     * if saved, Parse Cloud maybe has fetched 'address'.
     * So, here refresh the edit restaurant page.
     */
    if (originModel.objectSchemaName === Types.model.PARSE_RESTAURANTS) {
      // debugger
      this.nextState = RestaurantAddresHelper.updateRestaurantAddress(
        state,
        originModel as IParseModelRestaurants
      )
    } else {
      this.nextState = state
        .setIn(['form', 'originModel'], writePayload.originModel)
        .setIn(['form', 'editModelType'], Types.editModel.MODEL_FORM_TYPE_EDIT)
        .setIn(['form', 'isValid'], false)
        .setIn(['form', 'isFetching'], false)
    }
    return this.nextState
  }
}
