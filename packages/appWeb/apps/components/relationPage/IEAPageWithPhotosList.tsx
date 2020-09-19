import * as Telescope from '@appComponents/index'
import * as React from 'react'
import { withRouter } from 'next/router'
import * as Types from '@app/types'
import { routePage } from '@web/server/routesModels/utils'
import { PageFormHelper, PaginationTerms } from '@appUtils/index'
import { loadPhotosBrowser } from '@web/actions'
import { FilterPosts, FilterRoutes } from '@appFilter/index'
import { connect } from 'react-redux'

interface IIEAPageWithPhotosListStateProps {
  editModel: IEditModelState
  detailedModelsOverlay: any
  listContainerTasks: IListContainerTasks
}

interface IIEAPageWithPhotosListDispatchProps {
  // List
  loadPhotosBrowserAction: LoadPhotosBrowserActionFun
}

interface IIEAPageWithPhotosListProps
  extends IIEAPageWithPhotosListStateProps,
  IIEAPageWithPhotosListDispatchProps {
  forObject: IParseModelRestaurants | IParseModelRecipes
  objectSchemaName: string
  reviewStatistic: IReviewStatisticResult
}

interface IIEAPageWithPhotosListWithRouterProps {
  router: IWebAppRouterProps
}

type IEAPageWithPhotosListPropsWithRouter = IIEAPageWithPhotosListProps &
  IIEAPageWithPhotosListWithRouterProps

interface IIEAPageWithPhotosListState {
  hasPhotoSelected: boolean
  photosTerms: IParseQueryPhotoTerm
  photosListTask: IListWithPhotosDictTask
  routePageType: string
  forObjectUniqueId: string
}

function mapDispatchToProps(dispatch) {
  return {
    // List
    loadPhotosBrowserAction: (terms: IParseQueryPhotoTerm) => dispatch(loadPhotosBrowser(terms))
  }
}

function mapStateToProps(store, ownProps) {
  return {
    editModel: store.editModel,
    detailedModelsOverlay: store.detailedModelsOverlay,
    listContainerTasks: store.listContainerTasks
  }
}

@(withRouter as any)
class IEAPageWithPhotosList extends React.Component<
IIEAPageWithPhotosListProps,
IIEAPageWithPhotosListState
> {
  constructor(props: IIEAPageWithPhotosListProps, context) {
    super(props)

    const { router } = props as IEAPageWithPhotosListPropsWithRouter

    const { forObjectUniqueId } = router.query as IRouterRestaurantHomePattern

    const routePageType = PageFormHelper.getCurrentRoutePageType(
      props as IEAPageWithPhotosListPropsWithRouter
    )
    const { objectSchemaName } = props
    const photosTerms: IParseQueryPhotoTerm = PaginationTerms.generatePhotoTerm({
      objectSchemaName,
      forObjectUniqueId,
      pageForm: routePageType,
      router
    })

    /**
     * Only check it in the 'constructor'.
     */
    const hasPhotoSelected = PageFormHelper.checkPhotoSelected(
      props as IEAPageWithPhotosListPropsWithRouter
    )

    // console.log('Detailed restaurant!', routePageType)

    this.state = {
      forObjectUniqueId,
      // photos
      photosTerms,
      photosListTask: FilterPosts.getDefaultPhotosListTask(photosTerms),
      // Common
      hasPhotoSelected,
      routePageType
    }
  }

  componentWillReceiveProps(nextProps: IIEAPageWithPhotosListProps) {
    const { objectSchemaName } = nextProps
    const newRoutePageType = PageFormHelper.getCurrentRoutePageType(
      nextProps as IEAPageWithPhotosListPropsWithRouter
    )
    // const newPhotosTerms = PaginationTerms.generatePhotoTerm({
    //   objectSchemaName,
    //   forObjectUniqueId: forObjectUniqueId,
    //   pageForm: newPageForm,
    //   router
    // })
    const photosListTask = FilterPosts.photosListByListId(
      nextProps,
      this.state.photosTerms,
      this.state.photosListTask
    )

    // console.log('Detailed restaurant in render!, newPageForm: ', newPageForm)

    this.setState({
      // photos
      // photosTerms: newPhotosTerms,
      photosListTask,
      // Common
      routePageType: newRoutePageType
    })
    // this.checkNeedUpdate(lastPageForm, lastPhotosTerms, newPageForm, newPhotosTerms, photosListTask)
  }

  checkNeedUpdate(lastPageForm, lastPhotosTerms, newPageForm, newPhotosTerms, photosListTask) {
    if (
      FilterRoutes.checkNeedUpdatePhotosTask(lastPageForm, newPageForm) ||
      lastPhotosTerms.pageIndex !== newPhotosTerms.pageIndex // Change page index.
    ) {
      this.setState({
        // photos
        photosTerms: newPhotosTerms,
        photosListTask: FilterPosts.getDefaultPhotosListTask(newPhotosTerms, photosListTask)
      })
      this.props.loadPhotosBrowserAction(newPhotosTerms)
    }
  }

  componentDidMount() {
    this.props.loadPhotosBrowserAction(this.state.photosTerms)
  }

  render() {
    const { hasPhotoSelected, photosListTask, routePageType } = this.state
    const { objectSchemaName, reviewStatistic, forObject } = this.props

    // console.log('Detailed restaurant in render!', routePageType)

    if (photosListTask.ready) {
      switch (routePageType) {
        // =======================
        // Restaurants
        // =======================
        case routePage.RESTAURANT_SINGLE_PAGE: {
          return (
            <Telescope.IEARestaurantsLayout
              reviewStatistic={reviewStatistic}
              photosListTask={photosListTask}
              forObject={forObject as IParseModelRestaurants}
            />
          )
        }
        // =======================
        // Recipes
        // =======================
        case routePage.RECIPE_SINGLE_PAGE: {
          return (
            <Telescope.IEAOrderedRecipesLayout
              reviewStatistic={reviewStatistic}
              photosListTask={photosListTask}
              forObject={forObject as IParseModelRecipes}
            />
          )
        }
        // =======================
        // For Photos
        // =======================
        case routePage.RESTAURANT_ONE_PHOTO_PAGE:
        case routePage.RECIPE_ONE_PHOTO_PAGE: {
          if (hasPhotoSelected) {
            // If it is single photo page.
            return (
              <Telescope.IEAPhotosSingleLayout
                objectSchemaName={objectSchemaName}
                forObject={forObject}
                photosListTask={photosListTask}
              />
            )
          }
          return (
            // This page for all photos browser.
            <Telescope.IEAPhotosBrowserLayout
              objectSchemaName={objectSchemaName}
              forObject={forObject}
              photosListTask={photosListTask}
              reviewStatistic={reviewStatistic}
              photoTitleType={Types.photoBrowserTitle.PHOTO_BROWSER_NORMAL_TITLE}
              barType={Types.paginationNavBar.PAGINATION_NAVIGATION_BAR_FOR_NORMAL}
            />
          )
        }
      }
    }

    return <Telescope.F8LoadingView loadingClass="placeholder_1WOC3" />
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(IEAPageWithPhotosList)
