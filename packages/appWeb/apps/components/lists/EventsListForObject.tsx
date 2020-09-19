import * as Telescope from '@appComponents/index'
import * as React from 'react'
import { PaginationTerms } from '@appUtils/index'
import { loadEventsList, loadPeopleInEventList } from '@web/actions'
import { FilterPosts } from '@appFilter/index'
import * as Types from '@app/types'
import { connect } from 'react-redux'

interface IEventsListForObjectStateProps {
  listContainerTasks: IListContainerTasks
}

interface IEventsListForObjectDispatchProps {
  // List Tasks
  loadPeopleInEventListAction: LoadParseObjectsListActionFunc
  loadEventsListForObjectAction: LoadParseObjectsListActionFunc
}

interface IEventsListForObjectProps
  extends IEventsListForObjectStateProps,
  IEventsListForObjectDispatchProps {
  eventType: string
  forObject: IParseModelUsers | IParseModelRestaurants
}

interface IEventsListForObjectState {
  listTask: IListWithPhotosDictTask
  terms: any
}

function mapDispatchToProps(dispatch) {
  return {
    // List Tasks
    loadPeopleInEventListAction: (params: IWebParseObjectsListBaseParams) =>
      dispatch(loadPeopleInEventList(params)),
    loadEventsListForObjectAction: (params: IWebParseObjectsListBaseParams) =>
      dispatch(loadEventsList(params))
  }
}

function mapStateToProps(store) {
  return {
    listContainerTasks: store.listContainerTasks
  }
}

/**
 * Events list for restaurant and user's event page.
 */
class EventsListForObject extends React.Component<
  IEventsListForObjectProps,
  IEventsListForObjectState
  > {
  constructor(props: IEventsListForObjectProps) {
    super(props)
    const { eventType, forObject } = props
    const terms = PaginationTerms.generateTermsForEventsList({
      eventType,
      forObject
    })
    this.state = {
      terms,
      listTask: FilterPosts.getDefaultListTask(terms) as IListWithPhotosDictTask
    }
  }

  componentWillReceiveProps(nextProps: IEventsListForObjectProps) {
    const newListTask = FilterPosts.byListId(
      nextProps,
      this.state.terms,
      this.state.listTask
    ) as IListWithPhotosDictTask
    this.setState({
      listTask: newListTask
    })
  }

  componentDidMount() {
    const { eventType } = this.props
    const { listTask, terms } = this.state
    if (eventType === Types.common.EVENTS_LIST_FOR_USER) {
      this.props.loadPeopleInEventListAction({ listTask, terms })
    } else {
      this.props.loadEventsListForObjectAction({ listTask, terms })
    }
  }

  renderRows() {
    const { eventType } = this.props
    const { listTask } = this.state
    const { results, ready, totalCount } = listTask
    if (!ready) {
      return <Telescope.F8LoadingView />
    } else if (!!results && results.length) {
      return (
        <ul className="ylist ylist-bordered">
          {results.map((item, index) => {
            const event = eventType === Types.common.EVENTS_LIST_FOR_USER ? item.event : item
            return (
              <Telescope.EventsItem
                key={event.id}
                listPhotosDict={listTask.listPhotosDict}
                event={event}
                eventType={eventType}
                index={index}
              />
            )
          })}
        </ul>
      )
    } else {
      return (
        <Telescope.F8EmptySection
          title={`No Events`}
          text={"You can add new events clicking the ' Add Event' button."}
        />
      )
    }
  }

  renderTitle() {
    return (
      <div className="arrange">
        <div className="arrange_unit arrange_unit--fill">
          <h2>Events</h2>
        </div>
      </div>
    )
  }

  render() {
    return (
      <div className="ysection events">
        {this.renderTitle()}
        {this.renderRows()}
      </div>
    )
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(EventsListForObject)
