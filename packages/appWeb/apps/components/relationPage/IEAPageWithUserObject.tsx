import * as Telescope from '@appComponents/index'
import * as React from 'react'
import { withRouter } from 'next/router'
import * as Types from '@app/types'
import { FilterPosts, FilterRoutes } from '@appFilter/index'
import { AppLinks, PageFormHelper } from '@appUtils/index'
import { Router } from '@web/server/routes'
import { routePage } from '@web/server/routesModels/utils'
import { loadUserProfilePage } from '@web/actions'
import { connect } from 'react-redux'

interface IIEAPageWithUserObjectStateProps {
  currentUser: ParseModelUsersWithNull
  detailedModelsOverlay: any
  listContainerTasks: IListContainerTasks
}

interface IIEAPageWithUserObjectDispatchProps {
  loadUserProfilePageAction: any
}

interface IIEAPageWithUserObjectProps
  extends IIEAPageWithUserObjectStateProps,
  IIEAPageWithUserObjectDispatchProps { }

interface IIEAPageWithUserObjectWithRouterProps {
  router: IWebAppRouterProps
}

type IEAPageWithUserObjectPropsWithRouter = IIEAPageWithUserObjectProps &
  IIEAPageWithUserObjectWithRouterProps

interface IIEAPageWithUserObjectState {
  routePageType: string
  forUserId: string
  forUserObject: ParseModelUsersWithNull
}

function mapStateToProps(store, ownProps) {
  return {
    detailedModelsOverlay: store.detailedModelsOverlay,
    listContainerTasks: store.listContainerTasks,
    currentUser: store.authSession.user
  }
}

function mapDispatchToProps(dispatch) {
  return {
    // Model
    loadUserProfilePageAction: (parseId) => dispatch(loadUserProfilePage(parseId))
  }
}

@(withRouter as any)
class IEAPageWithUserObject extends React.Component<
IIEAPageWithUserObjectProps,
IIEAPageWithUserObjectState
> {
  constructor(props: IIEAPageWithUserObjectProps, context) {
    super(props)

    const forUserId = FilterRoutes.getUserQueryId(props as IEAPageWithUserObjectPropsWithRouter)

    this.state = {
      forUserId,
      routePageType: PageFormHelper.getCurrentRoutePageType(
        props as IEAPageWithUserObjectPropsWithRouter
      ),
      forUserObject: null
    }
  }

  componentWillReceiveProps(nextProps: IIEAPageWithUserObjectProps) {
    const nextRoutePageType = PageFormHelper.getCurrentRoutePageType(
      nextProps as IEAPageWithUserObjectPropsWithRouter
    )
    this.setState({
      routePageType: nextRoutePageType
    })
    const { forUserId } = this.state

    const nextForObject = FilterPosts.getModelByObjectId(
      nextProps,
      forUserId,
      this.state.forUserObject
    )

    if (!this.state.forUserObject) {
      this.setState({
        forUserObject: nextForObject
      })
    }
  }

  componentDidMount() {
    const { forUserId: parseId } = this.state
    this.props.loadUserProfilePageAction(parseId)
  }

  onCancelPress = () => {
    const { forUserObject } = this.state
    if (!!forUserObject) {
      const nextLink = AppLinks.getEventLink(forUserObject)
      Router.pushRoute(nextLink)
    }
  }

  render() {
    const { forUserObject, forUserId, routePageType } = this.state

    // console.log(
    //   'forUserObject : ',
    //   forUserObject,
    //   ' , forUserId : ',
    //   forUserId,
    //   ' , routePageType: ',
    //   routePageType
    // )

    if (!!forUserObject) {
      switch (routePageType) {
        case routePage.USER_PROFILE_EDIT_PAGE: {
          return <Telescope.IEAEditUserLayout userProfile={forUserObject} />
        }
        case routePage.USER_PROFILE_SINGLE_PAGE:
        case routePage.USER_PROFILE_REVIEWS_LIST_PAGE:
        case routePage.USER_PROFILE_EVENTS_LIST_PAGE:
        case routePage.USER_PROFILE_RECIPES_LIST_PAGE: {
          return (
            <Telescope.IEAPageWithStatistic
              objectSchemaName={Types.model.PARSE_EVENTS}
              forObject={forUserObject}
              pageStatisticType={Types.pageStatisticType.PAGE_WITH_STATISTIC_FOR_USER_PROFILE}
            />
          )
        }
        case routePage.USER_PROFILE_ONE_PHOTO_PAGE: {
          return <Telescope.IEAUserProfilePhotosLayout userProfile={forUserObject} />
        }
        default: {
          throw new Error(`Not found routePageType to render! ${routePageType}`)
        }
      }
    }
    return <Telescope.F8LoadingView loadingClass="placeholder_1WOC3" />
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(IEAPageWithUserObject)
