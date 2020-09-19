import * as React from 'react'
import * as t from 'tcomb-form'
import { TranslationFunction } from '@app/tools'
import I18n from '@web/server/i18n'
const withTranslation = I18n.withTranslation

const Form = t.form.Form

interface IEditRecipeFormProps {
  form: any
  value: any
  onChange: any
}

interface IEditRecipeFormWithTranslationProps {
  t: TranslationFunction
}

type EditRecipeFormPropsWithTranslation = IEditRecipeFormProps & IEditRecipeFormWithTranslationProps

@(withTranslation('common') as any)
export class EditRecipeForm extends React.Component<IEditRecipeFormProps, {}> {
  /**
   * ## render
   *
   * setup all the fields using the props and default messages
   *
   */
  render() {
    const { t: trans } = this.props as EditRecipeFormPropsWithTranslation
    const displayName = {
      label: trans('editRecipe.displayName'),
      editable: !this.props.form.isFetching,
      hasError: this.props.form.fields.displayNameHasError,
      error: trans(this.props.form.fields.displayNameErrorMsg),
      attrs: {
        placeholder: trans('editRecipe.displayNamePlaceHolder')
      }
    }
    const editRecipeForm = t.struct({
      displayName: t.String
    })
    const options: any = {
      fields: {
        displayName
      }
    }
    /**
     * ### Return
     * returns the Form component with the correct structures
     */
    return (
      <Form
        ref="form"
        type={editRecipeForm}
        options={options}
        value={this.props.value}
        onChange={this.props.onChange}
      />
    )
  }
}
