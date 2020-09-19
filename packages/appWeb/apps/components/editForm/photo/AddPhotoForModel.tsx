import * as Telescope from '@appComponents/index'
import * as React from 'react'
import { withRouter } from 'next/router'
import * as Types from '@app/types'
import { AppConstants } from '@app/types'

import {
  loadEventPage,
  loadOrderedRecipePage,
  loadRestaurantPage,
  loadUserProfilePage
}  from '@web/actions'

import { FilterPosts } from '@appFilter/index'
import { connect } from 'react-redux'

interface IAddPhotoForModelStateProps {
  detailedModelsOverlay: any
  listContainerTasks: IListContainerTasks
}

interface IAddPhotoForModelDispatchProps {
  loadRestaurantPageAction: any
  loadEventPageAction: any
  loadOrderedRecipePageAction: any
  loadUserProfilePageAction: any
}

interface IAddPhotoForModelProps
  extends IAddPhotoForModelStateProps,
  IAddPhotoForModelDispatchProps { }

interface IAddPhotoForModelWithRouterProps {
  router: IWebAppRouterProps
}

type AddPhotoForModelPropsWithRouter = IAddPhotoForModelProps & IAddPhotoForModelWithRouterProps

interface IAddPhotoForModelState {
  forObject: any
  modelType: string
  forObjectUniqueId: string
}

function mapDispatchToProps(dispatch) {
  return {
    loadRestaurantPageAction: (parseId) => dispatch(loadRestaurantPage(parseId)),
    loadEventPageAction: (parseId) => dispatch(loadEventPage(parseId)),
    loadOrderedRecipePageAction: (parseId) => dispatch(loadOrderedRecipePage(parseId)),
    loadUserProfilePageAction: (parseId) => dispatch(loadUserProfilePage(parseId))
  }
}

function mapStateToProps(store, ownProps) {
  return {
    detailedModelsOverlay: store.detailedModelsOverlay,
    listContainerTasks: store.listContainerTasks
  }
}

@(withRouter as any)
class AddPhotoForModel extends React.Component<IAddPhotoForModelProps, IAddPhotoForModelState> {
  constructor(props: IAddPhotoForModelProps) {
    super(props)

    const { router } = this.props as AddPhotoForModelPropsWithRouter
    const { modelType, forObjectUniqueId } = router.query as IRouterAddPhotoPagePattern

    this.state = {
      modelType,
      forObjectUniqueId,
      // Detailed object
      forObject: null
    }
  }

  componentWillReceiveProps(nextProps: IAddPhotoForModelProps) {
    this.setState({
      // Page models
      forObject: FilterPosts.getModelByObjectId(
        nextProps,
        this.state.forObjectUniqueId,
        this.state.forObject
      )
    })
  }

  componentDidMount() {
    const { objectSchemaName } = AppConstants.realmObjects[this.state.modelType]
    switch (objectSchemaName) {
      case Types.model.PARSE_RESTAURANTS:
        this.props.loadRestaurantPageAction(this.state.forObjectUniqueId)
        break
      case Types.model.PARSE_EVENTS:
        this.props.loadEventPageAction(this.state.forObjectUniqueId)
        break
      case Types.model.PARSE_RECIPES:
        this.props.loadOrderedRecipePageAction(this.state.forObjectUniqueId)
        break
      case Types.model.PARSE_USERS:
        this.props.loadUserProfilePageAction(this.state.forObjectUniqueId)
        break
    }
  }

  render() {
    const { forObject, modelType } = this.state
    if (!!forObject) {
      return <Telescope.IEAAddPhotosLayout modelType={modelType} forObject={forObject} />
    }
    return <Telescope.F8LoadingView loadingClass="placeholder_1WOC3" />
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AddPhotoForModel)
