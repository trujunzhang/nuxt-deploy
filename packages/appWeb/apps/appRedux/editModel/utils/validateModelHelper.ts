import { MomentUtils } from '@app/tools'

export class ValidateModelHelper {
  static validateModelForEvent(state, originModel) {
    if (
      state.form.fields.displayName === originModel.displayName &&
      state.form.fields.eventWhat === originModel.want &&
      MomentUtils.isSame(state.form.fields.start, originModel.start) &&
      MomentUtils.isSame(state.form.fields.end, originModel.end)
    ) {
      return false
    }
    if (state.form.fields.eventWhat === '' || state.form.fields.displayName === '') {
      return false
    }
    if (state.form.fields.displayNameHasError) {
      return false
    }
    return true
  }

  static validateModelForRecipe(state, originModel) {
    if (state.form.fields.price !== originModel.price) {
      return true
    }
    if (
      state.form.fields.displayName !== '' &&
      state.form.fields.displayName !== originModel.displayName &&
      !state.form.fields.displayNameHasError
    ) {
      return true
    } else {
      return false
    }
  }
}
