import * as Telescope from '@appComponents/index'
import * as React from 'react'
import { withRouter } from 'next/router'
import * as Types from '@app/types'
import { Router } from '@web/server/routes'
import { NewParseObjectGenerator } from '@appDatabase/index' // '@app/library' //  '@app/database'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { editModelActions } from '@appRedux/index' //from '@app/library' //  '@app/redux'

interface IOrganizationForNewRestaurantStateProps {
  currentUser: ParseModelUsersWithNull
  editModel: IEditModelState
  detailedModelsOverlay: any
  listContainerTasks: IListContainerTasks
}

interface IOrganizationForNewRestaurantDispatchProps {
  // Edit Model
  actions: any
}

interface IOrganizationForNewRestaurantProps
  extends IOrganizationForNewRestaurantStateProps,
  IOrganizationForNewRestaurantDispatchProps { }

interface IOrganizationForNewRestaurantWithRouterProps {
  router: IWebAppRouterProps
}

type OrganizationForNewRestaurantPropsWithRouter = IOrganizationForNewRestaurantProps &
  IOrganizationForNewRestaurantWithRouterProps

interface IOrganizationForNewRestaurantState {
  forObject: IParseModelRestaurants
  pageForm: string
  objectSchemaName: string
}

function mapDispatchToProps(dispatch) {
  return {
    // Edit Model
    actions: bindActionCreators(editModelActions, dispatch)
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
class OrganizationForNewRestaurant extends React.Component<
IOrganizationForNewRestaurantProps,
IOrganizationForNewRestaurantState
> {
  constructor(props: IOrganizationForNewRestaurantProps, context) {
    super(props)
    const forObject: IParseModelRestaurants = NewParseObjectGenerator.generateNewRestaurantParseObject(
      {
        currentUser: props.currentUser
      }
    )
    this.state = {
      // Detailed object
      forObject,
      // Common
      pageForm: Types.editModel.MODEL_FORM_TYPE_NEW,
      objectSchemaName: Types.model.PARSE_RESTAURANTS
    }
  }

  onEditCancelPress = () => {
    Router.pushRoute('/')
  }

  render() {
    const { forObject, pageForm } = this.state

    return (
      <Telescope.IEAEditRestaurantLayout
        onEditCancelPress={this.onEditCancelPress}
        forObject={forObject}
        pageForm={pageForm}
      />
    )
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(OrganizationForNewRestaurant)
