import * as Telescope from '@appComponents/index'
import * as React from 'react'
import { withRouter } from 'next/router'
import * as Types from '@app/types'
import { Router } from '@web/server/routes'
import { NewParseObjectGenerator } from '@appDatabase/index' // '@app/library' //  '@app/database'
import { loadRestaurantPage } from '@web/actions'
import { AppLinks } from '@appUtils/index'
import { FilterPosts } from '@appFilter/index'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { editModelActions } from '@appRedux/index' //from '@app/library' //  '@app/redux'

interface IOrganizationForNewEventStateProps {
  currentUser: ParseModelUsersWithNull
  editModel: IEditModelState
  detailedModelsOverlay: any
  listContainerTasks: IListContainerTasks
}

interface IOrganizationForNewEventDispatchProps {
  // Edit Model
  actions: any
  // Model
  loadRestaurantPageAction: any
}

interface IOrganizationForNewEventProps
  extends IOrganizationForNewEventStateProps,
  IOrganizationForNewEventDispatchProps { }

interface IOrganizationForNewEventWithRouterProps {
  router: IWebAppRouterProps
}

type OrganizationForNewEventPropsWithRouter = IOrganizationForNewEventProps &
  IOrganizationForNewEventWithRouterProps

interface IOrganizationForNewEventState {
  forObject: ParseModelNewEventWithNull
  forRelationObject: ParseModelRestaurantWithNull
  forRestaurantObjectId: string
}

function mapDispatchToProps(dispatch) {
  return {
    // Edit Model
    actions: bindActionCreators(editModelActions, dispatch),
    // Model
    loadRestaurantPageAction: (parseId) => dispatch(loadRestaurantPage(parseId))
  }
}

function mapStateToProps(store, ownProps) {
  return {
    editModel: store.editModel,
    detailedModelsOverlay: store.detailedModelsOverlay,
    listContainerTasks: store.listContainerTasks,
    currentUser: store.authSession.user
  }
}

@(withRouter as any)
class OrganizationForNewEvent extends React.Component<
IOrganizationForNewEventProps,
IOrganizationForNewEventState
> {
  constructor(props: IOrganizationForNewEventProps, context) {
    super(props)

    const { router } = this.props as OrganizationForNewEventPropsWithRouter

    const {
      forObjectId: forRestaurantObjectId
    } = router.query as IRouterOrganizationPageNewEventPattern

    this.state = {
      // Detailed object
      forObject: null,
      forRelationObject: null,
      // Common
      forRestaurantObjectId
    }
  }

  componentWillReceiveProps(nextProps: IOrganizationForNewEventProps) {
    if (!!this.state.forRelationObject) {
    } else {
      const nextForObject = FilterPosts.getModelByObjectId(
        nextProps,
        this.state.forRestaurantObjectId,
        this.state.forRelationObject
      )
      const forObject: IParseModelEvents = NewParseObjectGenerator.generateNewEventParseObject({
        restaurant: nextForObject,
        currentUser: nextProps.currentUser
      })
      this.setState({
        forObject,
        forRelationObject: nextForObject
      })
    }
  }

  componentDidMount() {
    this.props.loadRestaurantPageAction(this.state.forRestaurantObjectId)
  }

  onCancelPress = () => {
    const { forObject } = this.state

    if (!!forObject) {
      const nextLink = AppLinks.getRestaurantLink(forObject.restaurant)
      Router.pushRoute(nextLink)
    }
  }

  render() {
    const { forObject } = this.state
    if (!!forObject) {
      return (
        <Telescope.IEAEditEventLayout
          onCancelPress={this.onCancelPress}
          forObject={forObject}
          pageForm={Types.editModel.MODEL_FORM_TYPE_NEW}
        />
      )
    }
    return <Telescope.F8LoadingView loadingClass="placeholder_1WOC3" />
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(OrganizationForNewEvent)
