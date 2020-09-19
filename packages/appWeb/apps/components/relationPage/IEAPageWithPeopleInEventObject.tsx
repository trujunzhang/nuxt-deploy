import * as Telescope from '@appComponents/index'
import * as React from 'react'
import { withRouter } from 'next/router'
import { loadPeopleInEventPage } from '@web/actions'
import { FilterPosts } from '@appFilter/index'
import { connect } from 'react-redux'

interface IIEAPageWithPeopleInEventObjectStateProps {
  detailedModelsOverlay: any
}

interface IIEAPageWithPeopleInEventObjectDispatchProps {
  loadPeopleInEventPageAction: any
}

interface IIEAPageWithPeopleInEventObjectProps
  extends IIEAPageWithPeopleInEventObjectStateProps,
  IIEAPageWithPeopleInEventObjectDispatchProps { }

interface IIEAPageWithPeopleInEventObjectWithRouterProps {
  router: IWebAppRouterProps
}

type IEAPageWithPeopleInEventObjectPropsWithRouter = IIEAPageWithPeopleInEventObjectProps &
  IIEAPageWithPeopleInEventObjectWithRouterProps

interface IIEAPageWithPeopleInEventObjectState {
  peopleInEvent: IParseModelPeopleInEvent | null
  peopleInEventId: string
}

function mapDispatchToProps(dispatch) {
  return {
    // List
    loadPeopleInEventPageAction: (parseId) => dispatch(loadPeopleInEventPage(parseId))
  }
}

function mapStateToProps(store) {
  return {
    detailedModelsOverlay: store.detailedModelsOverlay
  }
}

@(withRouter as any)
class IEAPageWithPeopleInEventObject extends React.Component<
IIEAPageWithPeopleInEventObjectProps,
IIEAPageWithPeopleInEventObjectState
> {
  constructor(props: IIEAPageWithPeopleInEventObjectProps, context) {
    super(props)

    const { router } = this.props as IEAPageWithPeopleInEventObjectPropsWithRouter

    const { peopleInEventId } = router.query as IRouterOrderedUserPagePattern

    this.state = {
      peopleInEventId,
      // Detailed object
      peopleInEvent: null
    }
  }

  componentWillReceiveProps(nextProps: IIEAPageWithPeopleInEventObjectProps) {
    const peopleInEvent = FilterPosts.getModelByObjectId(
      nextProps,
      this.state.peopleInEventId,
      this.state.peopleInEvent
    )
    if (!!peopleInEvent) {
      this.setState({
        peopleInEvent
      })
    }
  }

  componentDidMount() {
    this.props.loadPeopleInEventPageAction(this.state.peopleInEventId)
  }

  render() {
    const { peopleInEvent } = this.state

    if (!!peopleInEvent) {
      return <Telescope.IEAOrderedUsersLayout peopleInEvent={peopleInEvent} />
    }
    return <Telescope.F8LoadingView loadingClass="placeholder_1WOC3" />
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(IEAPageWithPeopleInEventObject)
