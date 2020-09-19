import * as Telescope from '@appComponents/index'
import * as React from 'react'

import {
  loadPeopleInEventList,
  loadRecipesListForRestaurant,
  loadUsersWithoutAnonymousList
} from '@web/actions'

import { PeopleInEvent } from '@app/library' //  '@app/libs'
import { PaginationTerms, UsersLinker } from '@appUtils/index'
import { FilterPosts } from '@appFilter/index'
import { connect } from 'react-redux'
import { withRouter } from 'next/router'

interface IIEAOrderedUsersInEventsLayoutStateProps {
  listContainerTasks: IListContainerTasks
}

interface IIEAOrderedUsersInEventsLayoutDispatchProps {
  // List Tasks
  loadPeopleInEventListAction: LoadParseObjectsListActionFunc
  loadRecipesListForRestaurantAction: LoadParseObjectsListActionFunc
  loadUsersWithoutAnonymousListAction: LoadParseObjectsListActionFunc
}

interface IIEAOrderedUsersInEventsLayoutProps
  extends IIEAOrderedUsersInEventsLayoutStateProps,
  IIEAOrderedUsersInEventsLayoutDispatchProps {
  forObject: IParseModelEvents
  eventUniqueId: string
}

interface IIEAOrderedUsersInEventsLayoutState {
  leftUsersListTask: any
  peopleInEventListTask: any
  peopleInEventListDict: IPeopleInEventListDict
  selectedUserId: string
  recipesInRestaurantTask: any
  leftUsersListTerms: any
  peopleInEventTerms: any
  recipesInRestaurantTerms: any
}

function mapDispatchToProps(dispatch) {
  return {
    // List Tasks
    loadPeopleInEventListAction: (params: IWebParseObjectsListBaseParams) =>
      dispatch(loadPeopleInEventList(params)),
    loadRecipesListForRestaurantAction: (params: IWebParseObjectsListBaseParams) =>
      dispatch(loadRecipesListForRestaurant(params)),
    loadUsersWithoutAnonymousListAction: (params: IWebParseObjectsListBaseParams) =>
      dispatch(loadUsersWithoutAnonymousList(params))
  }
}

function mapStateToProps(store, ownProps) {
  return {
    listContainerTasks: store.listContainerTasks
  }
}

interface IIEAOrderedUsersInEventsLayoutWithRouterProps {
  router: IWebAppRouterProps
}

type IEAOrderedUsersInEventsLayoutPropsWithRouter = IIEAOrderedUsersInEventsLayoutProps &
  IIEAOrderedUsersInEventsLayoutWithRouterProps

@(withRouter as any)
class IEAOrderedUsersInEventsLayout extends React.Component<
IIEAOrderedUsersInEventsLayoutProps,
IIEAOrderedUsersInEventsLayoutState
> {
  constructor(props: IIEAOrderedUsersInEventsLayoutProps) {
    super(props)
    const { forObject: event } = props
    const leftUsersListTerms = PaginationTerms.generateTermsForUsersInEventList(props)
    const peopleInEventTerms = PaginationTerms.generateTermsForPeopleInEventList(event)
    const recipesInRestaurantTerms = PaginationTerms.generateTermsForRecipesList({
      restaurantId: event.restaurant.id
    })
    this.state = {
      selectedUserId: UsersLinker.getSelectedUserIdFromRouter(
        props as IEAOrderedUsersInEventsLayoutPropsWithRouter
      ),
      leftUsersListTerms,
      peopleInEventTerms,
      recipesInRestaurantTerms,
      leftUsersListTask: FilterPosts.getDefaultListTask(leftUsersListTerms),
      peopleInEventListTask: FilterPosts.getDefaultListTask(peopleInEventTerms),
      peopleInEventListDict: {},
      recipesInRestaurantTask: FilterPosts.getDefaultListTask(recipesInRestaurantTerms)
    }
  }

  componentWillReceiveProps(nextProps: IIEAOrderedUsersInEventsLayoutProps) {
    const leftUsersListTask = FilterPosts.byListId(
      nextProps,
      this.state.leftUsersListTerms,
      this.state.leftUsersListTask
    )
    const peopleInEventListTask = FilterPosts.byListId(
      nextProps,
      this.state.peopleInEventTerms,
      this.state.peopleInEventListTask
    )
    this.setState({
      leftUsersListTask,
      selectedUserId: UsersLinker.fixSelectedUserId(this.state.selectedUserId, leftUsersListTask),
      peopleInEventListTask,
      peopleInEventListDict: PeopleInEvent.getOrderedRecipeDict(peopleInEventListTask),
      recipesInRestaurantTask: FilterPosts.byListId(
        nextProps,
        this.state.recipesInRestaurantTerms,
        this.state.recipesInRestaurantTask
      )
    })
  }

  componentDidMount() {
    const {
      leftUsersListTerms,
      leftUsersListTask,
      peopleInEventTerms,
      peopleInEventListTask,
      recipesInRestaurantTerms,
      recipesInRestaurantTask
    } = this.state
    this.props.loadUsersWithoutAnonymousListAction({
      listTask: leftUsersListTask,
      terms: leftUsersListTerms
    })
    this.props.loadPeopleInEventListAction({
      listTask: peopleInEventListTask,
      terms: peopleInEventTerms
    })
    this.props.loadRecipesListForRestaurantAction({
      listTask: recipesInRestaurantTask,
      terms: recipesInRestaurantTerms
    })
  }

  renderRightPanel() {
    const {
      peopleInEventTerms,
      leftUsersListTask,
      recipesInRestaurantTask,
      peopleInEventListDict,
      selectedUserId
    } = this.state
    const { forObject } = this.props

    return (
      <div className="column column-beta ">
        <Telescope.F8AppAlertSection alwaysBeShown />

        <div className="user-details_bookmarks js-user-details_bookmarks">
          <Telescope.OrderedUserRightRecipesListView
            peopleInEventTerms={peopleInEventTerms}
            leftUsersListTask={leftUsersListTask}
            recipesInRestaurantTask={recipesInRestaurantTask}
            peopleInEventListDict={peopleInEventListDict}
            selectedUserId={selectedUserId}
            forObject={forObject}
          />
        </div>
      </div>
    )
  }

  render() {
    const {
      leftUsersListTask,
      recipesInRestaurantTask,
      peopleInEventListTask,
      peopleInEventListDict,
      selectedUserId
    } = this.state
    const { eventUniqueId, forObject } = this.props

    if (leftUsersListTask.ready && recipesInRestaurantTask.ready && peopleInEventListTask.ready) {
      return (
        <div className="main-content-wrap main-content-wrap--full">
          <div className="top-shelf top-shelf-grey">
            <Telescope.OrderedUserInEventHeaderView forObject={forObject} />
          </div>

          <div id="super-container" className="content-container">
            <div className="clearfix layout-block layout-n user-details_container">
              <div className="column column-alpha user-details_sidebar">
                <Telescope.OrderedUserLeftMenusPanel
                  eventUniqueId={eventUniqueId}
                  selectedUserId={selectedUserId}
                  leftUsersListTask={leftUsersListTask}
                  peopleInEventListDict={peopleInEventListDict}
                  onLeftUserMenuItemPressHook={(user: IParseModelUsers) => {
                    this.setState({
                      selectedUserId: user.id
                    })
                  }}
                />
              </div>

              {this.renderRightPanel()}
            </div>
          </div>
        </div>
      )
    }
    return <Telescope.F8LoadingView loadingClass="placeholder_1WOC3" />
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(IEAOrderedUsersInEventsLayout)
