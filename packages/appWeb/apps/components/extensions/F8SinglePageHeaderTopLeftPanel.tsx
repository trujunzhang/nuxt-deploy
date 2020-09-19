import * as Telescope from '@appComponents/index'
import * as React from 'react'
import { connect } from 'react-redux'
import * as Types from '@app/types'
import { AppConstants } from '@app/types'
import { Records } from '@app/library' //  '@app/libs'
import { AppLinks } from '@appUtils/index'
import { Link } from '@web/server/routes'

interface IF8SinglePageHeaderTopLeftPaneStateProps {
  currentUser: IParseModelUsers
}

interface IF8SinglePageHeaderTopLeftPanelProps
  extends IF8SinglePageHeaderTopLeftPaneStateProps {
  objectSchemaName: string
  forObject: IParseBaseModel | IParseModelRestaurants | IParseModelRecipes
  reviewStatistic: IReviewStatisticResult
}

interface IF8SinglePageHeaderTopLeftPanelState {
  modelType: string
}

function mapDispatchToProps(dispatch) {
  return {}
}

function mapStateToProps(store) {
  return {
    currentUser: store.authSession.user
  }
}

class F8SinglePageHeaderTopLeftPanel extends React.Component<
  IF8SinglePageHeaderTopLeftPanelProps,
  IF8SinglePageHeaderTopLeftPanelState
> {
  constructor(props: IF8SinglePageHeaderTopLeftPanelProps) {
    super(props)

    const modelType: string = AppConstants.realmTypes[props.objectSchemaName]
    this.state = {
      modelType
    }
  }

  render() {
    const { reviewStatistic } = this.props
    return (
      <div className="biz-page-header-left claim-status">
        {this.renderRestaurantTitle()}

        <div className="biz-main-info embossed-text-white">
          <div className="rating-info clearfix">
            <div className="biz-rating biz-rating-very-large clearfix">
              <Telescope.F8StarIcon
                rate={reviewStatistic.reviewRating}
                iconExtension="rating-very-large"
                iconType="large"
              />
              <span className="review-count rating-qualifier">{`${
                reviewStatistic.total
              } reviews`}</span>
            </div>

            {this.renderRatingDetails()}
          </div>

          {this.renderPriceInfo()}
        </div>
      </div>
    )
  }

  renderRatingDetails() {
    return (
      <div className="rating-details">
        <Link
          prefetch
          route={AppLinks.getReviewsListLink({
            objectSchemaName: this.props.objectSchemaName,
            forObject: this.props.forObject
          })}>
          <a className="chiclet-link chiclet-link--with-text show-tooltip js-rating-details">
            <span
              id="icon_14X14"
              className="icon icon--14-histogram icon--size-14 icon--currentColor">
              <svg className="icon_svg">
                <path d="M9 11V5h2v6H9zM6 3h2v8H6V3zM3 7h2v4H3V7z" />
              </svg>
            </span>
            {'Details'}
            <span className="tooltip-wrapper">
              <span className="tooltip">{'Review details'}</span>
            </span>
          </a>
        </Link>
      </div>
    )
  }

  renderPriceInfo() {
    const { modelType } = this.state
    return (
      <div className="price-category">
        <span className="bullet-after">
          <span className="business-attribute price-range">$$</span>
        </span>
        <span className="category-str-list">
          <a>{Records.toFirstUpperString(modelType)}</a>
        </span>

        {this.renderEditButton()}
      </div>
    )
  }

  renderEditButton() {
    const { forObject, currentUser } = this.props
    if(!currentUser){
      return null;
    }
    const { modelType } = this.state
    const nextLinkPath = AppLinks.getEditLinkByModelType(modelType, forObject)
    return (
      <Link prefetch route={nextLinkPath}>
        <a className="edit-category chiclet-link chiclet-link--with-text show-tooltip">
          <span id="icon_14X14" className="icon icon--14-pencil icon--size-14 icon--currentColor">
            <svg className="icon_svg">
              <path d="M12.95 3.05c0-.512-.195-1.023-.586-1.414a1.996 1.996 0 0 0-2.83 0L8.122 3.05 2.465 8.707 1.05 12.95l4.243-1.414L10.95 5.88l1.414-1.416c.39-.39.586-.902.586-1.414zm-8.197 7.61l-2.122.71.71-2.123 5.49-5.49 1.415 1.415-5.49 5.49z" />
            </svg>
          </span>
          {'Edit'}
          <span className="tooltip-wrapper">
            <span className="tooltip">{`Edit ${modelType}`}</span>
          </span>
        </a>
      </Link>
    )
  }

  renderTitleForRecipe() {
    const { modelType } = this.state
    const forObject = this.props.forObject as IParseModelRecipes

    if (Types.model.PARSE_RECIPES === AppConstants.realmObjects[modelType].objectSchemaName) {
      return (
        <div className="u-nowrap claim-status_teaser js-claim-status-hover margin-left-6">
          <span className="category-str-list">{`$. ${forObject.price}`}</span>
        </div>
      )
    }

    return null
  }

  renderRestaurantTitle() {
    const { objectSchemaName } = this.props
    const forObject = this.props.forObject as IParseModelRestaurants
    return (
      <div className="u-space-t1">
        <h1 className="biz-page-title embossed-text-white shortenough">{forObject.displayName}</h1>
        {this.renderTitleForRecipe()}

        {objectSchemaName === Types.model.PARSE_RESTAURANTS &&
          this.renderRecipesInfoForRestaurant()}
      </div>
    )
  }

  renderRecipesInfoForRestaurant() {
    const { forObject } = this.props
    return (
      <div className="u-nowrap claim-status_teaser js-claim-status-hover">
        <span
          id="icon_18X18"
          className="icon icon--18-checkmark-badged icon--size-18 icon--blue-dark claim-status_icon u-space-r1 claim-status_icon--claimed">
          <svg className="icon_svg">
            <path d="M6 14v-2h10v2H6zM6 4h10v2H6V4zm-4 8h2v2H2v-2zm0-4h2v2H2V8zm0-4h2v2H2V4zm12 6H6V8h8v2z" />
          </svg>
        </span>
        <Link prefetch route={AppLinks.getRecipesListForRestaurantLink(forObject)}>
          {'Recipes'}
        </Link>
      </div>
    )
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(F8SinglePageHeaderTopLeftPanel)