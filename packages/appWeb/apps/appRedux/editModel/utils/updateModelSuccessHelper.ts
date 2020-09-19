export class UpdateModelSuccessHelper {
  private nextState: any
  onUpdateModelSuccessHook(state: any) {
    this.nextState = state.setIn(['form', 'isFetching'], false).setIn(['form', 'isValid'], false)
    // .setIn(['form', 'fields', 'displayName'], '')
    return this.nextState
  }
}
