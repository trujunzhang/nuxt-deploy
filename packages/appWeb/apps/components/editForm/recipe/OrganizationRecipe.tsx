import * as Telescope from '@appComponents/index'
import * as React from 'react'
import { withRouter } from 'next/router'
import * as Types from '@app/types'
import { AppConstants } from '@app/types'
import { PageFormHelper, PaginationTerms } from '@appUtils/index'
import { NewParseObjectGenerator } from '@appDatabase/index' // '@app/library' //  '@app/database'
import { loadOrderedRecipePage, loadPhotosBrowser, loadRestaurantPage } from '@web/actions'
import { FilterPosts, FilterRoutes } from '@appFilter/index'
import { connect } from 'react-redux'

interface IOrganizationRecipeStateProps {
  currentUser: ParseModelUsersWithNull
  detailedModelsOverlay: any
  listContainerTasks: IListContainerTasks
}

interface IOrganizationRecipeDispatchProps {
  loadPhotosBrowserAction: any
  loadOrderedRecipePageAction: any
  loadRestaurantPageAction: any
}

interface IOrganizationRecipeProps
  extends IOrganizationRecipeStateProps,
  IOrganizationRecipeDispatchProps { }

interface IOrganizationRecipeWithRouterProps {
  router: IWebAppRouterProps
}

type OrganizationRecipePropsWithRouter = IOrganizationRecipeProps &
  IOrganizationRecipeWithRouterProps

interface IOrganizationRecipeState {
  forObject: ParseModelRecipeWithNull
  forRelationObject: ParseModelRestaurantWithNull
  photosTerms: IParseQueryPhotoTerm
  photosListTask: IListWithPhotosDictTask
  selectPhotoIndex: number
  recipeUniqueId: string
  pageForm: string
  forObjectUniqueId: string
  modelType: string
  objectSchemaName: string
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
    // List
    loadPhotosBrowserAction: (terms) => dispatch(loadPhotosBrowser(terms)),
    loadOrderedRecipePageAction: (parseId) => dispatch(loadOrderedRecipePage(parseId)),
    // Model
    loadRestaurantPageAction: (parseId) => dispatch(loadRestaurantPage(parseId))
  }
}

@(withRouter as any)
class OrganizationRecipe extends React.Component<
IOrganizationRecipeProps,
IOrganizationRecipeState
> {
  constructor(props: IOrganizationRecipeProps, context) {
    super(props)
    const { router } = this.props as OrganizationRecipePropsWithRouter

    const {
      modelType,
      forObjectUniqueId,
      recipeUniqueId
    } = router.query as IRouterOrganizationPageEditRecipePattern
    const { objectSchemaName } = AppConstants.realmObjects[modelType]
    const pageForm = PageFormHelper.getPageFormType(
      objectSchemaName,
      props as OrganizationRecipePropsWithRouter
    )
    const photosTerms: IParseQueryPhotoTerm = PaginationTerms.generatePhotoTermForRecipe({
      objectSchemaName,
      forObjectUniqueId,
      pageForm,
      router
    })

    this.state = {
      // Detailed object
      recipeUniqueId,
      forObject: null,
      forRelationObject: null,
      // photos
      photosTerms,
      photosListTask: FilterPosts.getDefaultPhotosListTask(photosTerms),
      selectPhotoIndex: -1,
      // Common
      pageForm,
      forObjectUniqueId,
      modelType,
      objectSchemaName
    }
  }

  componentWillReceiveProps(nextProps: IOrganizationRecipeProps) {
    const { router } = nextProps as OrganizationRecipePropsWithRouter
    const { objectSchemaName, forObjectUniqueId, recipeUniqueId } = this.state
    const { pageForm: lastPageForm, photosTerms: lastPhotosTerms } = this.state

    const newPageForm = PageFormHelper.getPageFormType(
      objectSchemaName,
      nextProps as OrganizationRecipePropsWithRouter,
      this.state.pageForm
    )
    const newPhotosTerms = PaginationTerms.generatePhotoTermForRecipe({
      objectSchemaName,
      forObjectUniqueId,
      pageForm: newPageForm,
      router
    })
    const photosListTask = FilterPosts.photosListByListId(
      nextProps,
      this.state.photosTerms,
      this.state.photosListTask
    )
    const nextForObject = FilterPosts.getModelByObjectId(
      nextProps,
      forObjectUniqueId,
      this.state.forRelationObject
    )
    if (this.state.pageForm === Types.editModel.MODEL_FORM_TYPE_NEW) {
      if (nextForObject && !this.state.forObject) {
        const forObject = NewParseObjectGenerator.generateNewRecipeParseObject({
          currentUser: nextProps.currentUser,
          restaurant: nextForObject
        })
        this.setState({
          forObject
        })
      }
    } else {
      if (!this.state.forObject) {
        this.setState({
          forObject: FilterPosts.getModelByObjectId(nextProps, recipeUniqueId, this.state.forObject)
        })
      }
    }

    this.setState({
      // Detailed object
      forRelationObject: nextForObject,
      // photos
      photosTerms: newPhotosTerms,
      photosListTask,
      selectPhotoIndex: FilterRoutes.getSelectPhoto(
        nextProps as OrganizationRecipePropsWithRouter,
        photosListTask,
        this.state.selectPhotoIndex
      ),
      // Common
      pageForm: newPageForm
    })
    this.checkNeedUpdate(lastPageForm, lastPhotosTerms, newPageForm, newPhotosTerms, photosListTask)
  }

  checkNeedUpdate(lastPageForm, lastPhotosTerms, newPageForm, newPhotosTerms, photosListTask) {
    if (
      FilterRoutes.checkNeedUpdatePhotosTask(lastPageForm, newPageForm) ||
      lastPhotosTerms.pageIndex !== newPhotosTerms.pageIndex // Change page index.
    ) {
      this.setState({
        // photos
        photosTerms: newPhotosTerms,
        photosListTask: FilterPosts.getDefaultPhotosListTask(newPhotosTerms, photosListTask),
        selectPhotoIndex: -1
      })
      this.props.loadPhotosBrowserAction(newPhotosTerms)
    }
  }

  componentDidMount() {
    const { pageForm, recipeUniqueId } = this.state
    const { forObjectUniqueId: parseId } = this.state
    this.props.loadRestaurantPageAction(parseId)
    this.props.loadPhotosBrowserAction(this.state.photosTerms)
    if (pageForm === Types.editModel.MODEL_FORM_TYPE_EDIT) {
      this.props.loadOrderedRecipePageAction(recipeUniqueId)
    }
  }

  render() {
    const { forObject, forRelationObject, pageForm } = this.state

    console.log(
      'forRelationObject : ',
      forRelationObject,
      ' , forObject : ',
      forObject,
      ' ,pageForm: ',
      pageForm
    )

    if (!!forRelationObject && forObject) {
      switch (pageForm) {
        case Types.editModel.MODEL_FORM_TYPE_EDIT:
        case Types.editModel.MODEL_FORM_TYPE_NEW:
          return (
            <Telescope.IEAEditRecipeWithPhotosLayout
              forObject={forObject}
              forRelationObject={forRelationObject}
              pageForm={pageForm}
              photosListTask={this.state.photosListTask}
              photosTerms={this.state.photosTerms}
            />
          )
      }
    }
    return <Telescope.F8LoadingView loadingClass="placeholder_1WOC3" />
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(OrganizationRecipe)
