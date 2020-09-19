import * as React from 'react'
import * as t from 'tcomb-form'
import { TranslationFunction } from '@app/tools'
import I18n from '@web/server/i18n'
const withTranslation = I18n.withTranslation

const Form = t.form.Form
// const eventWantPlaceHolder = I18n.

const myDescriptionTemplate = t.form.Form.templates.textbox.clone({
  // override just the input default implementation (labels, help, error will be preserved)
  renderInput: (locals: any) => {
    return (
      <textarea
        className="review-textarea expanded placeholder"
        placeholder={locals.attrs.placeholder}
        id="description"
        onChange={(e: any) => {
          locals.onChange(e.target.value)
        }}
        value={locals.value}
        name="description"
      />
    )
  }
})

interface IEditEventFormProps {
  form: any
  value: any
  onChange: any
}

interface IEditEventFormWithTranslationProps {
  t: TranslationFunction
}

type EditEventFormPropsWithTranslation = IEditEventFormProps & IEditEventFormWithTranslationProps

interface IEditEventFormState {}

@(withTranslation('common') as any)
export class EditEventForm extends React.Component<IEditEventFormProps, IEditEventFormState> {
  /**
   * ## render
   *
   * setup all the fields using the props and default messages
   *
   */
  render() {
    const { t: trans } = this.props as EditEventFormPropsWithTranslation

    const displayName = {
      label: trans('editEvent.displayName'),
      editable: !this.props.form.isFetching,
      hasError: this.props.form.fields.displayNameHasError,
      error: trans(this.props.form.fields.displayNameErrorMsg),
      attrs: {
        placeholder: trans('editEvent.displayNamePlaceHolder')
      }
    }
    const eventWhat = {
      label: trans('editEvent.eventWhat'),
      editable: !this.props.form.isFetching,
      hasError: this.props.form.fields.eventWhatHasError,
      error: trans(this.props.form.fields.eventWhatErrorMsg),
      template: myDescriptionTemplate,
      attrs: {
        placeholder: trans('editEvent.eventWhatPlaceHolder')
      }
    }
    const editEventForm = t.struct({
      displayName: t.String,
      eventWhat: t.String
    })
    const options: any = {
      fields: {
        displayName,
        eventWhat
      }
    }
    /**
     * ### Return
     * returns the Form component with the correct structures
     */
    return (
      <Form
        ref="form"
        type={editEventForm}
        options={options}
        value={this.props.value}
        onChange={this.props.onChange}
      />
    )
  }
}
