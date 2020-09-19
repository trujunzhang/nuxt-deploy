import * as React from 'react'
import * as Types from '@app/types'
import { AppConstants } from '@app/types'
import { AppLinks, AppTable, TopRightButtonsGroup } from '@appUtils/index'
import { Link, Router } from '@web/server/routes'
import { connect } from 'react-redux'
import { showAppOverlay } from '@appActions/index' // from '@web/actions'

interface IF8SinglePageHeaderButtonsSectionStateProps {
  currentUser: IParseModelUsers
}

interface IF8SinglePageHeaderButtonsSectionDispatchProps {
  showAppOverlayAction: any
}

interface IF8SinglePageHeaderButtonsSectionProps
  extends IF8SinglePageHeaderButtonsSectionStateProps,
  IF8SinglePageHeaderButtonsSectionDispatchProps {
  objectSchemaName: string
  forObject: any
  showEdit: boolean
}

interface IF8SinglePageHeaderButtonsSectionState {
  modelType: string
}

function mapDispatchToProps(dispatch) {
  return {
    // Edit Model
    showAppOverlayAction: (object) => dispatch(showAppOverlay(object))
  }
}

function mapStateToProps(store) {
  return {
    currentUser: store.authSession.user
  }
}

class F8SinglePageHeaderButtonsSection extends React.Component<
  IF8SinglePageHeaderButtonsSectionProps,
  IF8SinglePageHeaderButtonsSectionState
  > {
  constructor(props: IF8SinglePageHeaderButtonsSectionProps, context) {
    super(props)

    const modelType: string = AppConstants.realmTypes[props.objectSchemaName]
    this.state = {
      modelType
    }
  }

  renderWriteAReview() {
    const { forObject } = this.props
    const { modelType } = this.state
    return (
      <Link prefetch route={AppLinks.getNewReviewLink(modelType, forObject)}>
        <a className="ybtn ybtn--primary war-button">
          <span
            id="icon_24X24"
            className="icon icon--24-star icon--size-24 icon--currentColor u-space-r-half icon--fallback-inverted">
            <svg className="icon_svg">
              <path d="M12 1.5l2.61 6.727 6.89.53-5.278 4.688 1.65 7.055L12 16.67 6.13 20.5l1.648-7.055L2.5 8.757l6.89-.53L12 1.5z" />
            </svg>
          </span>
          {'Write a Review'}
        </a>
      </Link>
    )
  }

  onButtonPress(buttonObject: ITopRightButtonItem) {
    if (!!this.props.currentUser) {
      Router.pushRoute(buttonObject.linkUrl).then(() => window.scrollTo(0, 0))
    } else {
      AppTable.showLoginUI(this.props, true, true)
    }
  }

  renderButtonByType(buttonType: string) {
    const buttonObject: ITopRightButtonItem = TopRightButtonsGroup.generateButtonSVGView({
      buttonType,
      modelType: this.state.modelType,
      forObject: this.props.forObject
    })
    return (
      <a
        className="ybtn ybtn--small"
        onClick={() => {
          this.onButtonPress(buttonObject)
        }}>
        <span id="icon_18X18" className="icon icon--size-18 icon--currentColor">
          <svg className="icon_svg">
            <path d={buttonObject.svg} />
          </svg>
        </span>
        <span className="js-popup-link-text">{buttonObject.title}</span>
      </a>
    )
  }

  renderRightButtonForReview() {
    const buttonObject: ITopRightButtonItem = TopRightButtonsGroup.generateButtonSVGView({
      buttonType: Types.rightButtons.RIGHT_BUTTON_GROUP_ADD_REVIEW,
      modelType: this.state.modelType,
      forObject: this.props.forObject
    })

    switch (this.props.objectSchemaName) {
      case Types.model.PARSE_RESTAURANTS:
      case Types.model.PARSE_EVENTS: {
        return (
          <a
            className="ybtn ybtn--primary war-button"
            onClick={() => {
              this.onButtonPress(buttonObject)
            }}>
            <span id="icon_24X24" className="icon icon--size-24 icon--currentColor">
              <svg className="icon_svg">
                <path d={buttonObject.svg} />
              </svg>
            </span>
            <span className="js-popup-link-text">{buttonObject.title}</span>
          </a>
        )
      }
    }
    return null
  }

  renderRightButtonsGroup() {
    switch (this.props.objectSchemaName) {
      case Types.model.PARSE_RESTAURANTS:
        return (
          <span className="ybtn-group clearfix">
            {this.renderButtonByType(Types.rightButtons.RIGHT_BUTTON_GROUP_ADD_EVENT)}
            {this.renderButtonByType(Types.rightButtons.RIGHT_BUTTON_GROUP_ADD_RECIPE)}
          </span>
        )
      case Types.model.PARSE_EVENTS:
        return (
          <span className="ybtn-group clearfix">
            {this.renderButtonByType(Types.rightButtons.RIGHT_BUTTON_GROUP_MANAGER_ORDERED_USERS)}
          </span>
        )
      case Types.model.PARSE_RECIPES:
        // return (
        //   <span className='ybtn-group clearfix'>
        //     {this.renderButtonForAddPhoto()}
        //   </span>
        // )
        break
    }
    return null
  }

  render() {
    return (
      <div className="biz-page-actions nowrap">
        {this.renderRightButtonForReview()}
        {this.renderRightButtonsGroup()}
      </div>
    )
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(F8SinglePageHeaderButtonsSection)
