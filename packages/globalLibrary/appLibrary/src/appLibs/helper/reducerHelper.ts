import * as Types from '@app/types'

export class ReducerHelper {
  // ===========================================================
  // ===========================================================
  //  *** Register ***
  // ===========================================================
  // ===========================================================
  static getSignInParameter({ authModel }): ISignInParameter {
    const { usernameOrEmail, password } = ReducerHelper.getAuthModelField({ authModel })
    return {
      usernameOrEmail,
      password
    }
  }
  static getSignUpParameter({ authModel }, needEmailVerification): ISignUpParameter {
    const { username, email, password } = ReducerHelper.getAuthModelField({ authModel })

    return {
      username,
      email,
      password,
      needEmailVerification
    }
  }

  static getForgotPasswordParameter({ authModel }): IForgotPasswordParameter {
    const { email } = ReducerHelper.getAuthModelField({ authModel })

    return {
      email
    }
  }
  // ===========================================================
  // ===========================================================
  //  *** editModel ***
  // ===========================================================
  // ===========================================================
  static getTableQuery({ editModel }): IEditModelQueryProps {
    return editModel.form.tableQuery
  }

  static getTableDateSelectors({ editModel }) {
    return ReducerHelper.getTableQuery({ editModel }).dateSelector || 'all'
  }

  static getTableSearch({ editModel }) {
    return ReducerHelper.getTableQuery({ editModel }).tableSearch
  }

  static getTableStatus({ editModel }) {
    return ReducerHelper.getTableQuery({ editModel }).queryStatus
  }

  static getTableLoginType({ editModel }) {
    return ReducerHelper.getTableQuery({ editModel }).loginType
  }

  static getTableSelectedRowId({ editModel }) {
    return editModel.form.selectedTableSingleRowId
  }

  static isOrderDesc({ editModel }, columnTag: string) {
    const orderType = ReducerHelper.getTableQuery({ editModel }).orderType
    const orderBy = ReducerHelper.getTableQuery({ editModel }).orderBy
    let currentOrderType = 'desc'
    if (columnTag === orderBy) {
      currentOrderType = orderType
    }
    return currentOrderType === 'desc'
  }

  static getTablePaginationIndex({ editModel }) {
    return ReducerHelper.getTableQuery({ editModel }).paginationIndex
  }

  static getTableSelectAction({ editModel }) {
    return editModel.form.tableSelectAction
  }

  static getCountPerPage({ editModel }) {
    return editModel.form.fields.countPerPage
  }

  static editModelDisabled({ editModel }) {
    return !editModel.form.isValid || editModel.form.isFetching
  }

  static checkDiffCountPerPage({ editModel }, { limit }) {
    return !!editModel && ReducerHelper.getCountPerPage({ editModel }) !== limit
  }

  static getUniqueIdFromEditModel({ editModel }): string {
    const { originModel } = editModel.form
    return originModel.uniqueId
  }

  static getOriginModelFromEditModel({ editModel }): string {
    const { originModel } = editModel.form
    return originModel
  }

  // ===========================================================
  // ===========================================================
  //  *** auth Session ***
  // ===========================================================
  // ===========================================================
  static hasWidgetWelcomeScreenHidden({ authSession }) {
    const { mobileWidget } = authSession
    return mobileWidget.showWelcome === false
  }

  static getAuthModelField({ authModel }) {
    return authModel.form.fields
  }
  static authModelDisabled({ authModel }) {
    return authModel.form.isFetching
  }

  static getSocialConnectedError({ authModel }) {
    return authModel.form.fields.socialConnectedError
  }

  static getAuthModelAlert({ authModel }) {
    return authModel.form.alert
  }
  static getLocation({ editModel }) {
    const latitude = editModel.form.fields.latitude
    const longitude = editModel.form.fields.longitude
    const position = [latitude, longitude]
    return position
  }

  static isNewModelFormPage({ editModel }) {
    const editModelType = ReducerHelper.getEditModelType({ editModel })

    return editModelType === Types.editModel.MODEL_FORM_TYPE_NEW
  }

  static getEditModelType({ editModel }) {
    const editModelType = editModel.form.editModelType
    return editModelType
  }

  static getNextRestaurantModel({ editModel }) {
    const originalModel = editModel.form.originModel
    const { id: parseId, uniqueId } = originalModel
    const displayName = editModel.form.fields.displayName
    const latitude = editModel.form.fields.latitude
    const longitude = editModel.form.fields.longitude
    const address = editModel.form.fields.address
    const street_number = editModel.form.fields.street_number
    const route = editModel.form.fields.route
    const locality = editModel.form.fields.locality
    const sublocality = editModel.form.fields.sublocality
    const country = editModel.form.fields.country
    const postal_code = editModel.form.fields.postal_code
    const administrative_area = editModel.form.fields.administrative_area

    const nextModel = {
      parseId,
      uniqueId,
      displayName,
      latitude,
      longitude,
      address,
      street_number,
      route,
      locality,
      sublocality,
      country,
      postal_code,
      administrative_area
    }
    return nextModel
  }
}
