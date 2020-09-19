import * as Telescope from '@appComponents/index'
import * as React from 'react'
import { withRouter } from 'next/router'
import * as Types from '@app/types'
import * as queryString from 'query-string'
import { RouteParserUtils as Route } from '@app/tools'
import { Router } from '@web/server/routes'
import { UsersPages } from '@web/server/routesModels'
import { invokeParseCloudMethod } from '@appActions/index' // from '@web/actions'
import { loadPhotosBrowser, loadUserProfilePage } from '@web/actions'
import { FilterRoutes } from '@appFilter/index'
import { AppLinks } from '@appUtils/index'
import { connect } from 'react-redux'

interface IUsersSingleStateProps {
  listContainerTasks: IListContainerTasks
  detailedModelsOverlay: any
  currentUser: ParseModelUsersWithNull
}

interface IUsersSingleDispatchProps {
  // List
  loadPhotosBrowserAction: any
  invokeUserParseCloudMethodAction: InvokeParseCloudMethodActionForRevieForUserFun
}

interface IUsersSingleProps extends IUsersSingleStateProps, IUsersSingleDispatchProps {
  routePageType: string
  userProfile: IParseModelUsers
  userStatistic: IUserStatisticResult
}

interface IUsersSingleWithRouterProps {
  router: IWebAppRouterProps
}

type UsersSinglePropsWithRouter = IUsersSingleProps & IUsersSingleWithRouterProps

interface IUsersSingleState {
  uid: string
  usersLeftMenu: IUsersLeftMenu
}

function mapDispatchToProps(dispatch) {
  return {
    // Model
    loadUserProfilePageAction: (parseId) => dispatch(loadUserProfilePage(parseId)),
    // List
    loadPhotosBrowserAction: (terms) => dispatch(loadPhotosBrowser(terms)),
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

function mapStateToProps(store) {
  return {
    listContainerTasks: store.listContainerTasks,
    detailedModelsOverlay: store.detailedModelsOverlay,
    currentUser: store.authSession.user
  }
}

@(withRouter as any)
class UsersSingle extends React.Component<IUsersSingleProps, IUsersSingleState> {
  constructor(props: IUsersSingleProps) {
    super(props)
    const uid = FilterRoutes.getUserQueryId(props as UsersSinglePropsWithRouter)
    const usersLeftMenu = AppLinks.getUsersLeftMenu(props as UsersSinglePropsWithRouter)
    this.state = {
      uid,
      // Common
      usersLeftMenu
    }
  }

  componentWillReceiveProps(nextProps: IUsersSingleProps) {
    // this.setState({
    //   userStatistic: FilterPosts.getModelByObjectId(
    //     nextProps,
    //     this.state.uid,
    //     this.state.userStatistic,
    //     'statistic'
    //   )
    // })
    // const newUid = FilterRoutes.getUserQueryId(nextProps as UsersSinglePropsWithRouter)
    // this.updateNewUserProfile(newUid)
  }

  updateNewUserProfile(newUid: string | null) {
    if (!!newUid && newUid !== '' && this.state.uid !== newUid) {
      this.setState({
        uid: newUid
        // userProfile: null
      })
      this.fetchAll(newUid)
    }
  }

  fetchAll(uID) {
    // this.props.loadUserProfilePageAction(uID)
    // this.props.invokeUserParseCloudMethodAction(
    //   {
    //     userId: uID
    //   },
    //   uID
    // )
  }

  componentDidMount() {
    // if (!!this.state.uid) {
    // this.fetchAll(this.state.uid)
    // }

    Router.onBeforeHistoryChange = (url: string) => {
      const newRouterUrl = queryString.parseUrl(url)
      const route = new Route(UsersPages.home.pattern)
      const query: any = route.match(newRouterUrl.url)
      this.updateNewUserProfile(query.uid)
    }
  }

  componentWillUnmount() {
    Router.onBeforeHistoryChange = null
  }

  renderRightPanel(userProfile: IParseModelUsers, userStatistic: IUserStatisticResult) {
    const { pageForm } = this.state.usersLeftMenu
    switch (pageForm) {
      case Types.common.LOGGED_USER_MENU_ABOUT:
        return (
          <Telescope.IEAUserProfileAboutLayout
            userProfile={userProfile}
            userStatistic={userStatistic}
          />
        )
      case Types.common.LOGGED_USER_MENU_REVIEWS:
        return (
          <Telescope.IEAUserProfileReviewsLayout
            userProfile={userProfile}
            userStatistic={userStatistic}
          />
        )
      case Types.common.LOGGED_USER_MENU_EVENTS:
        return (
          <Telescope.IEAUserProfileEventsLayout
            userProfile={userProfile}
            userStatistic={userStatistic}
          />
        )
      case Types.common.LOGGED_USER_MENU_RECIPES:
        return (
          <Telescope.IEAUserProfileRecipesLayout
            userStatistic={userStatistic}
            userProfile={userProfile}
          />
        )
    }
    return null
  }

  onLeftMenuHook(menuType) {
    this.setState({
      usersLeftMenu: {
        pageForm: menuType
      }
    })
  }

  render() {
    const { userProfile, userStatistic } = this.props
    const { usersLeftMenu } = this.state
    return (
      <div className="main-content-wrap main-content-wrap--full">
        <div className="top-shelf top-shelf-grey">
          <Telescope.UserProfileSingleHeader
            userStatistic={userStatistic}
            userProfile={userProfile}
          />
        </div>

        <div id="super-container" className="content-container">
          <div className="clearfix layout-block layout-n user-details_container">
            <Telescope.UserProfileLeftMenusPanel
              usersLeftMenu={usersLeftMenu}
              onLeftMenuHook={this.onLeftMenuHook.bind(this)}
              userProfile={userProfile}
            />
            {this.renderRightPanel(userProfile, userStatistic)}
          </div>
        </div>
      </div>
    )
  }

  renderxxx() {
    const { userProfile, routePageType, userStatistic } = this.props
    if (!!userStatistic) {
      const { pageForm } = this.state.usersLeftMenu
      // console.log('user single layout, pageForm, ', pageForm)
      switch (pageForm) {
        // case Types.common.LOGGED_USER_MENU_BROWSER_PHOTOS:
        // return <Telescope.IEAUserProfilePhotosLayout userProfile={userProfile} />
        case Types.common.LOGGED_USER_EDIT_FORM: {
          return <Telescope.IEAEditUserLayout userProfile={userProfile} />
        }
        default: {
          // return this.renderContentWithRightPanel(userProfile, userStatistic)
        }
      }
    }
    return <Telescope.F8LoadingView loadingClass="placeholder_1WOC3" />
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(UsersSingle)
