declare interface ITableModelTypePayload {
  tag: string
  tableQuery: IEditParseQueryProps
}

// declare interface I Payload {
// declare interface I Payload {
// declare interface I Payload {
// declare interface I Payload {

declare interface IOnEditModelFormFieldChangePayload {
  field: string
  value: string
  ignoreValidation: boolean
}

declare interface IEditModelActionsToggleEditModelTypeParams {
  tag: string
  model: any
  editModelType: string
}

declare interface IEditModelActionsOnEditModelFormFieldChangeParams {
  field: any
  value: any
  ignoreValidation: boolean
}

// =====================================
// Actions =============================
// =====================================
// declare interface I  Action extends IAction {
// declare interface I  Action extends IAction {
// declare interface I  Action extends IAction {

declare interface IToggleEditModelTypeAction extends IAction {
  type: string
  payload: IEditModelActionsToggleEditModelTypeParams
}

declare interface IOnEditModelFormFieldChangeAction extends IAction {
  type: string
  payload: IOnEditModelFormFieldChangePayload
}

declare interface IChangeTablePaginationIndexAction extends IAction {
  payload: {
    newPaginationIndex: number
  }
}

declare interface IChangeTableStatusAction extends IAction {
  payload: {
    newStatus: string
  }
}

declare interface IChangeTableDateSelectorAction extends IAction {
  payload: {
    newDate: string
  }
}

declare interface IChangeTableSearchAction extends IAction {
  payload: {
    newSearch: string
  }
}

declare interface ITableModelTypeAction extends IAction {
  payload: ITableModelTypePayload
}

/**
 * ## State actions
 * controls which form is displayed to the user
 */
declare interface ItoggleTableModelTypeAction extends IAction {
  payload: {
    tag: string
    tableQuery: any
  }
}

/**
 * ## State actions
 * controls which form is displayed to the user
 */
declare interface IToggleArticleEditModelTypeAction extends IAction {
  payload: ITableSubmitArticlesPayload
}

/**
 *
 * ## State actions
 * controls which form is displayed to the user
 */
declare interface IToggleSingleEditModelAction extends IAction {
  payload: {
    tag: string
    modelType: string
  }
}

declare interface IResetEditModelAction extends IAction {
  payload: {
    newStatus: string
  }
}

declare interface IToggleAllSelectRowsAction extends IAction {}

declare interface IToggleSelectedRowsAction extends IAction {
  payload: {
    position: number
    rowObjectId: string
  }
}

declare interface ISetEditSelectedRowAction extends IAction {
  payload: {
    editProps: object
    objectSchemaName: string
  }
}

declare interface ICancelSelectedRowAction extends IAction {}

declare interface ISetSelectedRowsActionEditAction extends IAction {
  payload: {
    newValue: true
  }
}

declare interface ICancelSelectedRowEditAction extends IAction {
  payload: {
    newValue: false
  }
}

declare interface ISetTableActionTypeAction extends IAction {
  payload: {
    newActionType: string
  }
}

declare interface ISetTableUserRoleActionTypeAction extends IAction {
  payload: {
    newActionType: string
  }
}

/**
 * ## Login actions
 */
declare interface IUpdateModelRequestAction extends IAction {}

declare interface IUpdateModelSuccessAction extends IAction {}

declare interface IUpdateModelFailureAction extends IAction {
  payload: any
}
