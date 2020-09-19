import * as React from 'react'

import OnClickOut from 'react-onclickoutside'
import * as Telescope from '@appComponents/index'

import { TranslationFunction } from '@app/tools'
import I18n from '@web/server/i18n'
const withTranslation = I18n.withTranslation

const classNames = require('classnames')

interface IEditReviewFormProps {
  reviewRating: number
  actions: any
  form: any
}

interface IEditReviewFormState {
  hasFormFocus: boolean
}

interface IEditReviewFormWithTranslationProps {
  t: TranslationFunction
}

type EditReviewFormPropsWithTranslation = IEditReviewFormProps & IEditReviewFormWithTranslationProps

@(withTranslation('common') as any)
@(OnClickOut as any)
export class EditReviewForm extends React.Component<IEditReviewFormProps, IEditReviewFormState> {
  private reviewBodyRef: any

  constructor(props: IEditReviewFormProps, context) {
    super(props)
    this.state = {
      hasFormFocus: false
    }
  }

  handleClickOutside(e) {
    this.setState({ hasFormFocus: false })
    this.reviewBodyRef.blur()
  }

  onReviewBodyChanged(e) {
    const value = e.target.value
    this.props.actions.onEditModelFormFieldChange({
      field: 'reviewBody',
      value,
      ignoreValidation: false
    })
  }

  onRateStarPressAfterHook = () => {
    this.setState({
      hasFormFocus: true
    })
  }

  /**
   * ## render
   *
   * setup all the fields using the props and default messages
   *
   */
  render() {
    const { reviewRating, actions } = this.props
    const reviewBody = this.props.form.fields.reviewBody

    const formClass = classNames('rating-and-comment', 'pseudo-input', '', {
      focused: this.state.hasFormFocus
    })
    const { t: trans } = this.props as EditReviewFormPropsWithTranslation
    const currentReviewBodyPlaceHolder = this.state.hasFormFocus
      ? ''
      : trans('editReview.reviewBodyPlaceHolder')
    /**
     * ### Return
     * returns the Form component with the correct structures
     */
    return (
      <div className={formClass}>
        <Telescope.ReviewTopRating
          reviewRating={reviewRating}
          actions={actions}
          onRateStarPressAfterHook={this.onRateStarPressAfterHook}
        />

        <div className="review-widget">
          <textarea
            ref={(target) => {
              this.reviewBodyRef = target
            }}
            onFocus={() => {
              this.setState({ hasFormFocus: true })
            }}
            className="review-textarea expanded placeholder"
            placeholder={currentReviewBodyPlaceHolder}
            id="review-text"
            onChange={this.onReviewBodyChanged.bind(this)}
            value={reviewBody}
            name="review-text"
          />
        </div>
      </div>
    )
  }
}
