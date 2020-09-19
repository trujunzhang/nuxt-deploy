import * as React from 'react'
import * as t from 'tcomb-form'

import { TranslationFunction } from '@app/tools'
import I18n from '@web/server/i18n'
const withTranslation = I18n.withTranslation

const Form = t.form.Form

interface IEditRestaurantFormProps {
  form: any
  value: any
  onChange: any
}

interface IEditRestaurantFormWithTranslationProps {
  t: TranslationFunction
}

type EditRestaurantFormPropsWithTranslation = IEditRestaurantFormProps &
  IEditRestaurantFormWithTranslationProps

@(withTranslation('common') as any)
export class EditRestaurantForm extends React.Component<IEditRestaurantFormProps, {}> {
  /**
   * ## render
   *
   * setup all the fields using the props and default messages
   *
   */
  render() {
    const { t: trans } = this.props as EditRestaurantFormPropsWithTranslation

    const displayName = {
      label: trans('editRestaurant.displayName'),
      editable: !this.props.form.isFetching,
      hasError: this.props.form.fields.displayNameHasError,
      error: trans(this.props.form.fields.displayNameErrorMsg),
      attrs: {
        placeholder: trans('editRestaurant.displayNamePlaceHolder')
      }
    }
    const editRestaurantForm = t.struct({
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
        type={editRestaurantForm}
        options={options}
        value={this.props.value}
        onChange={this.props.onChange}
      />
    )
  }
}
