import * as Telescope from '@appComponents/index'
import * as React from 'react'
import { withRouter } from 'next/router'
import * as Types from '@app/types'
import { AppConstants } from '@app/types'
import { routePage } from '@web/server/routesModels/utils'
import { PageFormHelper } from '@appUtils/index'
import { invokeParseCloudMethod } from '@appActions/index' // from '@web/actions'
import { FilterPosts } from '@appFilter/index'
import { connect } from 'react-redux'

interface IIEAPageWithStatisticStateProps {
  editModel: IEditModelState
  detailedModelsOverlay: any
  listContainerTasks: IListContainerTasks
}

interface IIEAPageWithStatisticDispatchProps {
  invokeParseCloudMethodAction: InvokeParseCloudMethodActionForStatisticReviewFun
  invokeUserParseCloudMethodAction: InvokeParseCloudMethodActionForRevieForUserFun
}

interface IIEAPageWithStatisticProps
  extends IIEAPageWithStatisticStateProps,
  IIEAPageWithStatisticDispatchProps {
  forObject: IParseModelRestaurants | IParseModelEvents | IParseModelRecipes | IParseModelUsers
  objectSchemaName: string
  pageStatisticType: string
}

interface IIEAPageWithStatisticWithRouterProps {
  router: IWebAppRouterProps
}

type IEAPageWithStatisticPropsWithRouter = IIEAPageWithStatisticProps &
  IIEAPageWithStatisticWithRouterProps

interface IIEAPageWithStatisticState {
  cloudStatistic: ReviewStatisticResultWithNull | UserStatisticResultWithNull
  routePageType: string
}

function mapDispatchToProps(dispatch) {
  return {
    // List
    invokeParseCloudMethodAction: (data: IStatisticReviewParams, parseId) =>
      dispatch(
        invokeParseCloudMethod({
          methodType: Types.common.CLOUD_STATISTIC_FOR_REVIEWS,
          data,
          parseId
        })
      ),
    invokeUserParseCloudMethodAction: (data: IFilterReviewForUserParams, parseId) =>
      dispatch(
        invokeParseCloudMethod({
          methodType: Types.common.CLOUD_STATISTIC_FOR_USER_STATE,
          data,
          parseId
        })
      )
  }
}

function mapStateToProps(store, ownProps) {
  return {
    editModel: store.editModel,
    detailedModelsOverlay: store.detailedModelsOverlay,
    listContainerTasks: store.listContainerTasks
  }
}

@(withRouter as any)
class IEAPageWithStatistic extends React.Component<
IIEAPageWithStatisticProps,
IIEAPageWithStatisticState
> {
  constructor(props: IIEAPageWithStatisticProps, context) {
    super(props)

    const routePageType = PageFormHelper.getCurrentRoutePageType(
      props as IEAPageWithStatisticPropsWithRouter
    )

    // console.log('Detailed restaurant!', routePageType)

    this.state = {
      cloudStatistic: null,
      // Common
      routePageType
    }
  }

  componentWillReceiveProps(nextProps: IIEAPageWithStatisticProps) {
    const newRoutePageType = PageFormHelper.getCurrentRoutePageType(
      nextProps as IEAPageWithStatisticPropsWithRouter
    )

    const { uniqueId: parseId } = this.props.forObject
    const nextCloudStatistic = FilterPosts.getModelByObjectId(
      nextProps,
      parseId,
      this.state.cloudStatistic,
      'statistic'
    )

    // console.log('Detailed restaurant in render!, newPageForm: ', newPageForm)

    this.setState({
      // Detailed object
      cloudStatistic: nextCloudStatistic,
      // Common
      routePageType: newRoutePageType
    })
  }

  componentDidMount() {
    const { objectSchemaName, pageStatisticType } = this.props
    const { uniqueId: parseId } = this.props.forObject
    switch (pageStatisticType) {
      case Types.pageStatisticType.PAGE_WITH_STATISTIC_FOR_USER_PROFILE: {
        this.props.invokeUserParseCloudMethodAction(
          {
            userId: parseId
          },
          parseId
        )
        break
      }
      default: {
        this.props.invokeParseCloudMethodAction(
          {
            reviewType: AppConstants.realmTypes[objectSchemaName],
            forObjectUniqueId: parseId
          },
          parseId
        )
        break
      }
    }
  }

  render() {
    const { routePageType, cloudStatistic } = this.state
    const { objectSchemaName, forObject } = this.props

    // console.log('Detailed restaurant in render!', routePageType)

    if (!!cloudStatistic) {
      switch (routePageType) {
        // =======================
        // Restaurants
        // =======================
        case routePage.RESTAURANT_SINGLE_PAGE:
        case routePage.RESTAURANT_ONE_PHOTO_PAGE: {
          return (
            <Telescope.IEAPageWithPhotosList
              objectSchemaName={objectSchemaName}
              forObject={forObject as IParseModelRestaurants}
              reviewStatistic={cloudStatistic}
            />
          )
        }
        // =======================
        // Events
        // =======================
        case routePage.EVENT_SINGLE_PAGE: {
          return (
            <Telescope.IEAEventsLayout
              reviewStatistic={cloudStatistic as IReviewStatisticResult}
              forObject={forObject as IParseModelEvents}
            />
          )
        }
        // =======================
        // Recipes
        // =======================
        case routePage.RECIPE_SINGLE_PAGE:
        case routePage.RECIPE_ONE_PHOTO_PAGE: {
          return (
            <Telescope.IEAPageWithPhotosList
              objectSchemaName={objectSchemaName}
              forObject={forObject as IParseModelRecipes}
              reviewStatistic={cloudStatistic}
            />
          )
        }
        // =======================
        // Users
        // =======================
        case routePage.USER_PROFILE_SINGLE_PAGE:
        case routePage.USER_PROFILE_REVIEWS_LIST_PAGE:
        case routePage.USER_PROFILE_EVENTS_LIST_PAGE:
        case routePage.USER_PROFILE_RECIPES_LIST_PAGE: {
          return (
            <Telescope.UsersSingle
              routePageType={routePageType}
              userStatistic={cloudStatistic as IUserStatisticResult}
              userProfile={forObject as IParseModelUsers}
            />
          )
        }
      }
    }
    return <Telescope.F8LoadingView loadingClass="placeholder_1WOC3" />
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(IEAPageWithStatistic)
