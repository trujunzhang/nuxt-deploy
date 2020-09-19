import * as React from 'react'
import * as Types from '@app/types'
import { TextFieldRowHelper } from '@app/library' //  '@app/libs'

const classNames = require('classnames')

interface ITextFieldRowProps {
  rowType: string
  authModel: IAuthModelState
  actions: any
  rowTitle?: string
}

interface ITextFieldRowWithNavigationProps {
  navigation: ISingletonNavigation
}

type TextFieldRowPropsWithNavigation = ITextFieldRowProps & ITextFieldRowWithNavigationProps

interface ITextFieldRowState {
  secureTextEntry: boolean
}

export class TextFieldRow extends React.Component<ITextFieldRowProps, ITextFieldRowState> {
  constructor(props, context) {
    super(props)

    this.state = {
      secureTextEntry: true
    }
  }

  onAccessoryPress() {
    this.setState(({ secureTextEntry }) => ({ secureTextEntry: !secureTextEntry }))
  }

  renderPasswordAccessory() {
    const { secureTextEntry } = this.state

    const name = secureTextEntry ? 'visibility' : 'visibility-off'

    return null
  }

  render() {
    const { secureTextEntry } = this.state
    const name = secureTextEntry ? 'visibility' : 'visibility-off'

    const { rowType } = this.props
    const model: ITextFieldRow = TextFieldRowHelper.DATA_ROWS[rowType]

    const inputClass = classNames(
      'textInput',
      'textInput--large',
      'u-marginBottom0',
      'textInput--underlined',
      'textInput--signin',
      `js-${model.name}`
    )

    switch (rowType) {
      case Types.input.INPUT_PASSWORD:
        return (
          <div className="overlay-content">
            {!!this.props.rowTitle && <div className="u-paddingTop10">{this.props.rowTitle}</div>}
            <div className="inputGroup u-marginBottom0">
              <input
                type={model.type}
                name={model.name}
                id={model.id}
                className={inputClass}
                placeholder={model.labelId}
                value={this.props.authModel.form.fields[model.field]}
                onChange={(e) => {
                  this.props.actions.onAuthFormFieldChange(model.field, e.target.value)
                }}
              />
            </div>
          </div>
        )
      default:
        return (
          <div className="overlay-content">
            {!!this.props.rowTitle && <div className="u-paddingTop10">{this.props.rowTitle}</div>}
            <div className="inputGroup u-marginBottom0">
              <input
                type={model.type}
                name={model.name}
                id={model.id}
                className={inputClass}
                placeholder={model.labelId}
                value={this.props.authModel.form.fields[model.field]}
                onChange={(e) => {
                  this.props.actions.onAuthFormFieldChange(model.field, e.target.value)
                }}
              />
            </div>
          </div>
        )
    }
  }
}
