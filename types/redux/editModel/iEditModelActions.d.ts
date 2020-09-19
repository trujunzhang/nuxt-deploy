// declare interface IEditModelActions Params

declare interface IEditModelActions {
  /**
   * ## State actions
   * controls which form is displayed to the user
   */
  toggleEditModelType(
    params: IEditModelActionsToggleEditModelTypeParams
  ): IToggleEditModelTypeAction

  /**
   * ## onAuthFormFieldChange
   * Set the payload so the reducer can work on it
   */
  onEditModelFormFieldChange(
    params: IEditModelActionsOnEditModelFormFieldChangeParams
  ): IOnEditModelFormFieldChangeAction
  /**
   * ## onAuthFormFieldChange
   * Set the payload so the reducer can work on it
   */
  onRestaurantFormAddressFieldChange(
    restaurant: any
  ): {
    type: any
    payload: {
      restaurant: any
    }
  }
  onRestaurantFormAddressFieldSuccess(): {
    type: any
  }
  updateModelRequest(): {
    type: any
  }
  enableEditModelEventAction(): {
    type: any
  }
  updateCurrentRequestRecipeId(
    recipeUniqueId: any
  ): {
    type: any
    payload: {
      recipeUniqueId: any
    }
  }
  updateModelSuccess(): {
    type: any
  }
  updateModelFailure(error: any): IUpdateModelFailureAction
}
