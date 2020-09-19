import * as Telescope from '@appComponents/index'
import * as React from 'react'
import * as Types from '@app/types'
import { AppConstants } from '@app/types'

import {
  loadEventPage,
  loadOrderedRecipePage,
  loadRestaurantPage,
  loadReviewPage
} from '@web/actions'

import { PageFormHelper } from '@appUtils/index'
import { FilterPosts } from '@appFilter/index'
import { connect } from 'react-redux'
import { withRouter } from 'next/router'
import { routePage } from '@web/server/routesModels/utils'

interface IIEAPageWithModelTypeObjectStateProps {
  detailedModelsOverlay: any
}

interface IIEAPageWithModelTypeObjectDispatchProps {
  loadRestaurantPageAction: any
  loadEventPageAction: any
  loadOrderedRecipePageAction: any
  loadReviewPageAction: any
}

interface IIEAPageWithModelTypeObjectProps
  extends IIEAPageWithModelTypeObjectStateProps,
  IIEAPageWithModelTypeObjectDispatchProps {
  params: any
}

interface IIEAPageWithModelTypeObjectState {
  forObject: IParseModelRestaurants | IParseModelRecipes | null
  routePageType: string
  modelType: string
  forObjectUniqueId: string
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
    detailedModelsOverlay: store.detailedModelsOverlay
  }
}

interface IIEAPageWithModelTypeObjectWithRouterProps {
  router: IWebAppRouterProps
}

type IEAPageWithModelTypeObjectPropsWithRouter = IIEAPageWithModelTypeObjectProps &
  IIEAPageWithModelTypeObjectWithRouterProps

@(withRouter as any)
class IEAPageWithModelTypeObject extends React.Component<
IIEAPageWithModelTypeObjectProps,
IIEAPageWithModelTypeObjectState
> {
  constructor(props: IIEAPageWithModelTypeObjectProps, context) {
    super(props)

    const { router } = this.props as IEAPageWithModelTypeObjectPropsWithRouter
    const {
      forObjectUniqueId,
      modelType
    } = router.query as IRouterForObjectUniqueIdWithModelTypePattern
    this.state = {
      forObjectUniqueId,
      // Page models
      modelType,
      forObject: null,
      // Common
      routePageType: PageFormHelper.getCurrentRoutePageType(
        props as IEAPageWithModelTypeObjectPropsWithRouter
      )
    }
  }

  componentWillReceiveProps(nextProps: IIEAPageWithModelTypeObjectProps) {
    const forObject = FilterPosts.getModelByObjectId(
      nextProps,
      this.state.forObjectUniqueId,
      this.state.forObject
    )
    this.setState({
      // Page models
      forObject
    })
  }

  componentDidMount() {
    const { forObjectUniqueId, modelType } = this.state
    switch (AppConstants.realmObjects[modelType].objectSchemaName) {
      case Types.model.PARSE_RESTAURANTS: {
        this.props.loadRestaurantPageAction(forObjectUniqueId)
        break
      }
      case Types.model.PARSE_EVENTS: {
        this.props.loadEventPageAction(forObjectUniqueId)
        break
      }
      case Types.model.PARSE_RECIPES: {
        this.props.loadOrderedRecipePageAction(forObjectUniqueId)
        break
      }
    }
  }

  render() {
    const { routePageType, forObject } = this.state
    if (!!forObject) {
      switch (routePageType) {
        case routePage.ORGANIZATION_NEW_REVIEW:
        case routePage.ORGANIZATION_EDIT_REVIEW:
          return <Telescope.IEAPageWithReviewObject forObject={forObject} />
      }
    }
    return <Telescope.F8LoadingView loadingClass="placeholder_1WOC3" />
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(IEAPageWithModelTypeObject)
