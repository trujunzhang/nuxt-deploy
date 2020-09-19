import * as React from 'react'
import { Reviews } from '@app/library' //  '@app/libs'

import { TranslationFunction } from '@app/tools'
import I18n from '@web/server/i18n'
const withTranslation = I18n.withTranslation

interface IReviewTopRatingProps {
  reviewRating: number
  actions: any
  onRateStarPressAfterHook: () => any
}

interface IReviewTopRatingState {
  rateStarHoverIndex: number
  rateStarSelectIndex: any
}

interface IReviewTopRatingWithTranslationProps {
  t: TranslationFunction
}

type ReviewTopRatingPropsWithTranslation = IReviewTopRatingProps &
  IReviewTopRatingWithTranslationProps

@(withTranslation('common') as any)
export class ReviewTopRating extends React.Component<IReviewTopRatingProps, IReviewTopRatingState> {
  constructor(props: IReviewTopRatingProps, context) {
    super(props)
    const { reviewRating } = props
    this.state = {
      rateStarHoverIndex: reviewRating,
      rateStarSelectIndex: reviewRating
    }
  }

  onRateStarPress = (index) => {
    this.setState({
      rateStarSelectIndex: index
      //   hasFormFocus: true
    })
    this.props.actions.onEditModelFormFieldChange({
      field: 'reviewRating',
      value: index,
      ignoreValidation: false
    })
  }

  onMouseLeaveHandler = () => {
    this.setState({
      rateStarHoverIndex: -1
    })
  }

  onMouseEnterHandler = (index) => {
    this.setState({
      rateStarHoverIndex: index
    })
  }

  render() {
    const { rateStarHoverIndex, rateStarSelectIndex } = this.state
    const currentRateIndex = rateStarHoverIndex !== -1 ? rateStarHoverIndex : rateStarSelectIndex
    return (
      <div className="arrange arrange--middle">
        <div className="arrange_unit arrange_unit--fill">
          <div className="clearfix">
            <fieldset className="star-selector js-star-selector">
              <ul
                className={`star-selector_stars i-selector-stars js-star-selector_stars i-selector-stars--extra-large-${currentRateIndex}`}>
                {[1, 2, 3, 4, 5].map((item, index) => {
                  return (
                    <li
                      key={index}
                      onMouseEnter={() => this.onMouseEnterHandler(index + 1)}
                      onMouseLeave={this.onMouseLeaveHandler}
                      onClick={() => this.onRateStarPress(index + 1)}
                      className="star-selector_star js-star-selector_star show-tooltip"
                    />
                  )
                })}
              </ul>
              <p className="star-selector_description js-star-selector_description">
                {Reviews.RATE_STAR_LABELS[currentRateIndex]}
              </p>
            </fieldset>
          </div>
        </div>
      </div>
    )
  }
}
