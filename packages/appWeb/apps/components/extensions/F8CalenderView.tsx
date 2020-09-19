import * as React from 'react'
import { MomentUtils } from '@app/tools'
import Datetime from 'react-datetime'

const format = 'YYYY-MM-DD HH:mm:ss'

interface IF8CalenderViewProps {
  field: any
  forObject: any
  actions: any
  editModel: any
}

interface IF8CalenderViewState {
  field: any
  value: any
}

export class F8CalenderView extends React.Component<IF8CalenderViewProps, IF8CalenderViewState> {
  constructor(props: IF8CalenderViewProps, context) {
    super(props)
    const { field, forObject } = props
    const value = {}
    value[field] = forObject[field] || new Date()
    this.state = {
      field,
      value
    }
    props.actions.onEditModelFormFieldChange({
      field,
      value: value[field],
      ignoreValidation: true
    })
  }

  /**
   * ### componentWillReceiveProps
   * As the properties are validated they will be set here.
   */
  componentWillReceiveProps(nextProps: IF8CalenderViewProps) {
    const newValue = {}
    newValue[this.state.field] = nextProps.editModel.form.fields[this.state.field]
    this.setState({
      value: newValue
    })
  }

  /**
   * ### onChange
   *
   * As the user enters keys, this is called for each key stroke.
   * Rather then publish the rules for each of the fields, I find it
   * better to display the rules required as long as the field doesn't
   * meet the requirements.
   * *Note* that the fields are validated by the authReducer
   */
  onChange(value) {
    const newValue = {}
    newValue[this.state.field] = value.toDate()
    this.props.actions.onEditModelFormFieldChange({
      field: this.state.field,
      value: value.toDate(),
      ignoreValidation: false
    })
    this.setState({
      value: newValue
    })
  }

  render() {
    const currentDate: any = MomentUtils.createMomentInstance(this.state.value[this.state.field])
    return (
      <Datetime
        defaultValue={currentDate}
        onChange={(newValue) => {
          this.onChange(newValue)
        }}
      />
    )
  }
}
