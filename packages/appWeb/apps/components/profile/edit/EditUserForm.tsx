import * as React from 'react'
import * as t from 'tcomb-form'
import { TranslationFunction } from '@app/tools'
import I18n from '@web/server/i18n'
const withTranslation = I18n.withTranslation

const Form = t.form.Form

interface IEditUserFormProps {
  form: any
  value: any
  onChange: any
}

interface IEditUserFormWithTranslationProps {
  t: TranslationFunction
}

type EditUserFormPropsWithTranslation = IEditUserFormProps & IEditUserFormWithTranslationProps

@(withTranslation('common') as any)
export class EditUserForm extends React.Component<IEditUserFormProps, {}> {
  /**
   * ## render
   *
   * setup all the fields using the props and default messages
   *
   */
  render() {
    const { t: trans } = this.props as EditUserFormPropsWithTranslation
    const username = {
      label: trans('editUser.displayName'),
      editable: !this.props.form.isFetching,
      hasError: this.props.form.fields.usernameHasError,
      error: trans(this.props.form.fields.usernameErrorMsg),
      attrs: {
        placeholder: trans('editUser.displayNamePlaceHolder')
      }
    }
    const email = {
      keyboardType: 'email-address',
      editable: !this.props.form.isFetching,
      hasError: this.props.form.fields.emailHasError,
      error: trans(this.props.form.fields.emailErrorMsg)
    }
    const editUserForm = t.struct({
      username: t.String,
      email: t.String
    })
    const options = {
      fields: {
        username,
        email
      }
    }
    /**
     * ### Return
     * returns the Form component with the correct structures
     */
    return (
      <Form
        ref="form"
        type={editUserForm}
        options={options}
        value={this.props.value}
        onChange={this.props.onChange}
      />
    )
  }
}
