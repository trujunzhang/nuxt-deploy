import * as Telescope from '@appComponents/index'
import * as React from 'react'

import { PageFormHelper } from '@appUtils/index'
import { NewParseObjectGenerator } from '@appDatabase/index' // '@app/library' //  '@app/database'
import { AppConstants } from '@app/types'

import {
  loadEventPage,
  loadOrderedRecipePage,
  loadRestaurantPage,
  loadReviewPage
} from '@web/actions'

import { FilterPosts } from '@appFilter/index'
import { connect } from 'react-redux'
import { withRouter } from 'next/router'
import { routePage } from '@web/server/routesModels/utils'

interface IIEAPageWithReviewObjectStateProps {
  detailedModelsOverlay: any
  currentUser: ParseModelUsersWithNull
}

interface IIEAPageWithReviewObjectDispatchProps {
  loadRestaurantPageAction: any
  loadEventPageAction: any
  loadOrderedRecipePageAction: any
  loadReviewPageAction: any
}

interface IIEAPageWithReviewObjectProps
  extends IIEAPageWithReviewObjectStateProps,
  IIEAPageWithReviewObjectDispatchProps {
  forObject: any
}

interface IIEAPageWithReviewObjectState {
  reviewType: string
  review: ParseModelReviewWithNull
  routePageType: string
  reviewUniqueId: string
}

function mapDispatchToProps(dispatch) {
  return {
    loadRestaurantPageAction: (parseId) => dispatch(loadRestaurantPage(parseId)),
    loadEventPageAction: (parseId) => dispatch(loadEventPage(parseId)),
    loadOrderedRecipePageAction: (parseId) => dispatch(loadOrderedRecipePage(parseId)),
    loadReviewPageAction: (parseId) => dispatch(loadReviewPage(parseId))
  }
}

function mapStateToProps(store) {
  return {
    detailedModelsOverlay: store.detailedModelsOverlay,
    currentUser: store.authSession.user
  }
}

interface IIEAPageWithReviewObjectWithRouterProps {
  router: IWebAppRouterProps
}

type IEAPageWithReviewObjectPropsWithRouter = IIEAPageWithReviewObjectProps &
  IIEAPageWithReviewObjectWithRouterProps

@(withRouter as any)
class IEAPageWithReviewObject extends React.Component<
IIEAPageWithReviewObjectProps,
IIEAPageWithReviewObjectState
> {
  constructor(props: IIEAPageWithReviewObjectProps, context) {
    super(props)

    const { router } = this.props as IEAPageWithReviewObjectPropsWithRouter
    const {
      reviewUniqueId,
      modelType
    } = router.query as IRouterOrganizationPageGetDetailedReviewLinkPattern
    const routePageType = PageFormHelper.getCurrentRoutePageType(
      props as IEAPageWithReviewObjectPropsWithRouter
    )
    let review: ParseModelReviewWithNull = null
    switch (routePageType) {
      case routePage.ORGANIZATION_NEW_REVIEW: {
        const { currentUser, forObject } = props
        review = NewParseObjectGenerator.generateNewReviewParseObject({
          currentUser,
          forItem: forObject,
          objectSchemaName: AppConstants.realmObjects[modelType].objectSchemaName,
          rate: 0,
          body: ''
        })
        break
      }
    }
    this.state = {
      reviewUniqueId,
      // Page models
      reviewType: modelType,
      review,
      // Common
      routePageType
    }
  }

  componentWillReceiveProps(nextProps: IIEAPageWithReviewObjectProps) {
    const review = FilterPosts.getModelByObjectId(
      nextProps,
      this.state.reviewUniqueId,
      this.state.review
    )
    this.setState({
      // Page models
      review
    })
  }

  componentDidMount() {
    const { reviewUniqueId, routePageType } = this.state
    switch (routePageType) {
      case routePage.ORGANIZATION_EDIT_REVIEW: {
        this.props.loadReviewPageAction(reviewUniqueId)
        break
      }
    }
  }

  render() {
    const { routePageType, review, reviewType } = this.state
    if (!!review) {
      switch (routePageType) {
        case routePage.ORGANIZATION_NEW_REVIEW:
        case routePage.ORGANIZATION_EDIT_REVIEW:
          return (
            <Telescope.IEAEditReviewLayout
              reviewType={reviewType}
              routePageType={routePageType}
              review={review}
              forObject={this.props.forObject}
            />
          )
      }
    }
    return <Telescope.F8LoadingView loadingClass="placeholder_1WOC3" />
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(IEAPageWithReviewObject)
