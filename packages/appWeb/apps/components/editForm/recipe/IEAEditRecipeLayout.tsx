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

interface IIEAEditRecipeLayoutStateProps {
  currentUser: ParseModelUsersWithNull
  detailedModelsOverlay: any
  listContainerTasks: IListContainerTasks
}

interface IIEAEditRecipeLayoutDispatchProps {
  loadPhotosBrowserAction: any
  loadOrderedRecipePageAction: any
  loadRestaurantPageAction: any
}

interface IIEAEditRecipeLayoutProps
  extends IIEAEditRecipeLayoutStateProps,
  IIEAEditRecipeLayoutDispatchProps {
  forRelationObject: IParseModelRestaurants
}

interface IIEAEditRecipeLayoutWithRouterProps {
  router: IWebAppRouterProps
}

type IEAEditRecipeLayoutPropsWithRouter = IIEAEditRecipeLayoutProps &
  IIEAEditRecipeLayoutWithRouterProps

interface IIEAEditRecipeLayoutState {
  forObject: ParseModelRecipeWithNull
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
class IEAEditRecipeLayout extends React.Component<
IIEAEditRecipeLayoutProps,
IIEAEditRecipeLayoutState
> {
  constructor(props: IIEAEditRecipeLayoutProps, context) {
    super(props)

    const { forRelationObject } = props
    const { router } = props as IEAEditRecipeLayoutPropsWithRouter

    const {
      modelType,
      forObjectUniqueId,
      recipeUniqueId
    } = router.query as IRouterOrganizationPageEditRecipePattern
    const { objectSchemaName } = AppConstants.realmObjects[modelType]

    const pageForm = PageFormHelper.getPageFormForEditForm(
      props as IEAEditRecipeLayoutPropsWithRouter
    )

    const photosTerms: IParseQueryPhotoTerm = PaginationTerms.generatePhotoTermForRecipe({
      objectSchemaName,
      forObjectUniqueId,
      pageForm,
      router
    })

    let forObject: ParseModelRecipeWithNull = null
    if (pageForm === Types.editModel.MODEL_FORM_TYPE_NEW) {
      forObject = NewParseObjectGenerator.generateNewRecipeParseObject({
        currentUser: props.currentUser,
        restaurant: forRelationObject
      })
    }

    this.state = {
      // Detailed object
      recipeUniqueId,
      forObject,
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

  componentWillReceiveProps(nextProps: IIEAEditRecipeLayoutProps) {
    const { router } = nextProps as IEAEditRecipeLayoutPropsWithRouter
    const { objectSchemaName, forObjectUniqueId, recipeUniqueId } = this.state
    const { pageForm: lastPageForm, photosTerms: lastPhotosTerms } = this.state

    const newPhotosTerms = PaginationTerms.generatePhotoTermForRecipe({
      objectSchemaName,
      forObjectUniqueId,
      pageForm: lastPageForm,
      router
    })
    const photosListTask = FilterPosts.photosListByListId(
      nextProps,
      this.state.photosTerms,
      this.state.photosListTask
    )

    this.setState({
      forObject: FilterPosts.getModelByObjectId(nextProps, recipeUniqueId, this.state.forObject),
      // photos
      photosTerms: newPhotosTerms,
      photosListTask,
      selectPhotoIndex: FilterRoutes.getSelectPhoto(
        nextProps as IEAEditRecipeLayoutPropsWithRouter,
        photosListTask,
        this.state.selectPhotoIndex
      )
    })

    const newPageForm = PageFormHelper.getPageFormForEditForm(
      nextProps as IEAEditRecipeLayoutPropsWithRouter
    )
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
    const { forRelationObject } = this.props
    const { forObject, pageForm } = this.state

    // console.log(
    //   'forRelationObject : ',
    //   forRelationObject,
    //   ' , forObject : ',
    //   forObject,
    //   ' ,pageForm: ',
    //   pageForm
    // )

    if (!!forObject) {
      return (
        <Telescope.IEAEditRecipeWithPhotosLayout
          recipe={forObject}
          forRelationObject={forRelationObject}
          pageForm={pageForm}
          photosListTask={this.state.photosListTask}
          photosTerms={this.state.photosTerms}
        />
      )
    }
    return <Telescope.F8LoadingView loadingClass="placeholder_1WOC3" />
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(IEAEditRecipeLayout)
