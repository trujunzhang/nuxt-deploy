import * as Telescope from '@appComponents/index'
import * as React from 'react'
import { PaginationTerms } from '@appUtils/index'
import { loadPeopleInEventList } from '@web/actions'
import { FilterPosts } from '@appFilter/index'
import { connect } from 'react-redux'

interface IOrderedUserListStateProps {
  listContainerTasks: IListContainerTasks
}

interface IOrderedUserListDispatchProps {
  loadPeopleInEventListAction: LoadParseObjectsListActionFunc
}

interface IOrderedUserListProps extends IOrderedUserListStateProps, IOrderedUserListDispatchProps {
  forObject: IParseModelEvents
}

interface IOrderedUserListState {
  peopleInEventTerms: any
  peopleInEventListTask: any
}

function mapDispatchToProps(dispatch) {
  return {
    // List Tasks
    loadPeopleInEventListAction: (params: IWebParseObjectsListBaseParams) =>
      dispatch(loadPeopleInEventList(params))
  }
}

function mapStateToProps(store) {
  return {
    listContainerTasks: store.listContainerTasks
  }
}

/**
 * Users List for event page.
 */
class OrderedUserList extends React.Component<IOrderedUserListProps, IOrderedUserListState> {
  constructor(props: IOrderedUserListProps) {
    super(props)
    const peopleInEventTerms = PaginationTerms.generateTermsForOrderedUsersList(props.forObject)
    this.state = {
      peopleInEventTerms,
      peopleInEventListTask: FilterPosts.getDefaultListTask(peopleInEventTerms)
    }
  }

  componentWillReceiveProps(nextProps: IOrderedUserListProps) {
    this.setState({
      peopleInEventListTask: FilterPosts.byListId(
        nextProps,
        this.state.peopleInEventTerms,
        this.state.peopleInEventListTask
      )
    })
  }

  componentDidMount() {
    this.props.loadPeopleInEventListAction({
      listTask: this.state.peopleInEventListTask,
      terms: this.state.peopleInEventTerms
    })
  }

  renderRows() {
    const { peopleInEventListTask } = this.state
    const { results, ready } = peopleInEventListTask
    if (!ready) {
      return <Telescope.F8LoadingView />
    }
    return (
      <ul className="ylist">
        {results.map((peopleInEvent: IParseModelPeopleInEvent) => (
          <Telescope.OrderedUserItem
            key={peopleInEvent.id}
            peopleInEvent={peopleInEvent}
            listTask={peopleInEventListTask}
          />
        ))}
      </ul>
    )
  }

  renderEmptySection() {
    const { results, ready } = this.state.peopleInEventListTask
    if (ready && results.length === 0) {
      return (
        <Telescope.F8EmptySection
          title={`No Users ordered`}
          text={"You can add new users clicking the ' Add user' button."}
        />
      )
    }
    return null
  }

  render() {
    return (
      <div className="ysection">
        <Telescope.F8SectionHeaderTitle title={"Who's in?"} />

        {this.renderRows()}

        <div className="u-space-t2 u-space-b2">{this.renderEmptySection()}</div>
      </div>
    )
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(OrderedUserList)
