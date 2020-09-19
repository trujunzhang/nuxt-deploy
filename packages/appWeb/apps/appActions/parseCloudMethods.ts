import { CommonHelper } from '@appActionUtils/index'

import { ParseObjects } from '@appModels/index'
import * as Types from '@app/types'

/**
 * Promise: Call Parse Cloud Method to send invite email.
 *
 * @param {string} templateType
 * @param {string} toEmail
 * @param params
 * @returns Promise: {Promise<{type: string}>}
 * @private
 */
async function _callCloudSendEmailMethod(templateType: string, toEmail: string, params: any) {
  await CommonHelper.sendEmailByType(templateType, toEmail, params)
  const action = {
    type: Types.cloud.EMAIL_SEND_CLOUD_MODEL
  }
  return Promise.resolve(action)
}

/**
 * Action: Call Parse Cloud Method to send invite email.
 *
 * @param {string} templateType
 * @param {string} toEmail
 * @param params
 * @returns action: {(dispatch) => Promise<Promise<{type: string}>>}
 */
export function callCloudSendEmailMethod(templateType: string, toEmail: string, params: any) {
  return (dispatch) => {
    const action = _callCloudSendEmailMethod(templateType, toEmail, params)
    action.then((result: any) => {
      dispatch(result)
    })
    return action
  }
}

async function _callCloudInviteEmailMethod(params, toEmailsObject) {
  const { emails } = toEmailsObject
  if (emails['0'] !== '') {
    await ParseObjects.ParseCloud.run('sendEmails', {
      variables: params,
      templateName: 'invite_friends',
      toEmail: emails['0']
    })
  }
  if (emails['1'] !== '') {
    await ParseObjects.ParseCloud.run('sendEmails', {
      variables: params,
      templateName: 'invite_friends',
      toEmail: emails['1']
    })
  }
  if (emails['2'] !== '') {
    await ParseObjects.ParseCloud.run('sendEmails', {
      variables: params,
      templateName: 'invite_friends',
      toEmail: emails['2']
    })
  }
  const action = {
    type: Types.common.EMAIL_SEND_CLOUD_MODEL
  }
  return Promise.resolve(action)
}

export function callCloudInviteEmailMethod(params, toEmailsObject) {
  return (dispatch) => {
    const action = _callCloudInviteEmailMethod(params, toEmailsObject)
    action.then((result) => {
      dispatch(result)
    })
    return action
  }
}
