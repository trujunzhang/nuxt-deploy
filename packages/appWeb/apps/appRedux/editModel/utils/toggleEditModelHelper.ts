import { defaultEditModelFormRecord, EditFormRecord } from '../editModelInitialState'

export class ToggleEditModelHelper {
  static toggle(state: any, payload: IEditModelActionsToggleEditModelTypeParams) {
    const nextState: any = new EditFormRecord(defaultEditModelFormRecord)
      .setIn(['form', 'state'], payload.tag)
      .setIn(['form', 'originModel'], payload.model)
      .setIn(['form', 'editModelType'], payload.editModelType)
      .setIn(['form', 'error'], null)

    nextState
      .setIn(['form', 'fields', 'displayName'], '')
      .setIn(['form', 'fields', 'displayNameHasError'], false)
      .setIn(['form', 'fields', 'displayNameErrorMsg'], '')

    return nextState
  }
}
