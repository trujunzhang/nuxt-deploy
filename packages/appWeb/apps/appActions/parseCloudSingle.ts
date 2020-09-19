import { ParseObjects } from '@appModels/index'

import * as Types from '@app/types'

const cloudMethods = {
  CLOUD_STATISTIC_FOR_USER_STATE: 'statisticUserState',
  CLOUD_STATISTIC_FOR_REVIEWS: 'statisticReviews',
  CLOUD_RESTAURANT_ADDRESS: 'getAddressFromLocation',
  CLOUD_INVITE_WITH_EMAILS: 'sendEmails'
}

async function _callParseCloud(params: IWebParseSingleInvokeParseCloudMethodParams) {
  const { type, methodType, data, parseId } = params
  const methodName = cloudMethods[methodType]
  const nextModel = await ParseObjects.ParseCloud.run(methodName, data, {})
  const payload = {
    parseId,
    model: nextModel
  }
  const action = {
    type,
    payload
  }

  return action
}

function _callCloudStatisticMethod(params: IWebParseSingleInvokeParseCloudMethodParams) {
  return (dispatch) => {
    const action = _callParseCloud(params)
    action.then((result) => {
      dispatch(result)
    })
    return action
  }
}

/**
 * 'statisticUserState'
 * 'statisticReviews'
 * @param params
 */
export function invokeParseCloudMethod(params: IWebParseSingleInvokeParseCloudMethodParams) {
  const { methodType, data, parseId, type = Types.common.STATISTIC_CLOUD_MODEL } = params
  return _callCloudStatisticMethod({ type, methodType, data, parseId })
}
