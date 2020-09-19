import * as Telescope from '@appComponents/index'
import * as React from 'react'
import { PaginationTerms } from '@appUtils/index'
import { loadOtherUsersAlsoOrderedRecipeList } from '@web/actions'
import { FilterPosts } from '@appFilter/index'
import { connect } from 'react-redux'

interface IOrderedRecipeUsersListStateProps {
  listContainerTasks: IListContainerTasks
}

interface IOrderedRecipeUsersListDispatchProps {
  loadOtherUsersAlsoOrderedRecipeListAction: LoadParseObjectsListActionFunc
}

interface IOrderedRecipeUsersListProps
  extends IOrderedRecipeUsersListStateProps,
  IOrderedRecipeUsersListDispatchProps {
  forObject: IParseModelRecipes
}

interface IOrderedRecipeUsersListState {
  listTask: any
  terms: any
}

function mapDispatchToProps(dispatch) {
  return {
    loadOtherUsersAlsoOrderedRecipeListAction: (params: IWebParseObjectsListBaseParams) =>
      dispatch(loadOtherUsersAlsoOrderedRecipeList(params))
  }
}

function mapStateToProps(store) {
  return {
    listContainerTasks: store.listContainerTasks
  }
}

class OrderedRecipeUsersList extends React.Component<
  IOrderedRecipeUsersListProps,
  IOrderedRecipeUsersListState
  > {
  // TODO: ORDEREDUSERS.
  constructor(props: IOrderedRecipeUsersListProps) {
    super(props)
    const terms = PaginationTerms.generateTermsForOrderedRecipeUsersList(props.forObject)
    this.state = {
      terms,
      listTask: FilterPosts.getDefaultListTask(terms)
    }
  }

  componentWillReceiveProps(nextProps: IOrderedRecipeUsersListProps) {
    this.setState({
      listTask: FilterPosts.byListId(nextProps, this.state.terms, this.state.listTask)
    })
  }

  componentDidMount() {
    const { terms, listTask } = this.state
    this.props.loadOtherUsersAlsoOrderedRecipeListAction({ listTask, terms })
  }

  renderRows() {
    const { listTask } = this.state
    const { orderedUsers, ready } = listTask
    if (!ready) {
      return <Telescope.F8LoadingView />
    }
    if (!!orderedUsers && orderedUsers.length > 0) {
      return (
        <ul className="ylist">
          {orderedUsers.map((user: IParseModelUsers) => (
            <Telescope.OrderedRecipeUserItem key={user.id} listTask={listTask} user={user} />
          ))}
        </ul>
      )
    }

    return (
      <div className="u-space-t2 u-space-b2">
        <Telescope.F8EmptySection title={`No Users ordered`} text={''} />
      </div>
    )
  }

  render() {
    return <div className="ysection">{this.renderRows()}</div>
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(OrderedRecipeUsersList)
