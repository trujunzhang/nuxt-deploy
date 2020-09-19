import * as Telescope from '@appComponents/index'
import * as React from 'react'
import { withRouter } from 'next/router'
import * as Types from '@app/types'
import { Link, Router } from '@web/server/routes'
import * as queryString from 'query-string'
import { AppLinks, PaginationTerms } from '@appUtils/index'
import { loadRecipesListForRestaurant } from '@web/actions'
import { FilterPosts } from '@appFilter/index'
import { connect } from 'react-redux'

interface IIEARecipesListForRestaurantLayoutStateProps {
  editModel: IEditModelState
  listContainerTasks: IListContainerTasks
}

interface IIEARecipesListForRestaurantLayoutDispatchProps {
  loadRecipesListForRestaurantAction: LoadParseObjectsListActionFunc
}

interface IIEARecipesListForRestaurantLayoutProps
  extends IIEARecipesListForRestaurantLayoutStateProps,
  IIEARecipesListForRestaurantLayoutDispatchProps {
  forObject: IParseModelRestaurants
}

interface IIEARecipesListForRestaurantLayoutWithRouterProps {
  router: IWebAppRouterProps
}

type IEARecipesListForRestaurantLayoutPropsWithRouter = IIEARecipesListForRestaurantLayoutProps &
  IIEARecipesListForRestaurantLayoutWithRouterProps

interface IIEARecipesListForRestaurantLayoutState {
  listTask: IListWithPhotosDictTask
  currentPageIndex: number
  terms?: any
  recipesListTerms: any
}

function mapDispatchToProps(dispatch) {
  return {
    loadRecipesListForRestaurantAction: (params: IWebParseObjectsListBaseParams) =>
      dispatch(loadRecipesListForRestaurant(params))
  }
}

function mapStateToProps(store, ownProps) {
  return {
    editModel: store.editModel,
    listContainerTasks: store.listContainerTasks
  }
}

@(withRouter as any)
class IEARecipesListForRestaurantLayout extends React.Component<
IIEARecipesListForRestaurantLayoutProps,
IIEARecipesListForRestaurantLayoutState
> {
  constructor(props: IIEARecipesListForRestaurantLayoutProps, context) {
    super(props)
    const currentPageIndex = PaginationTerms.getCurrentQueryPageIndex(
      props as IEARecipesListForRestaurantLayoutPropsWithRouter
    )
    const recipesListTerms = PaginationTerms.generateTermsForRecipesListOnRestaurant(
      props.forObject,
      currentPageIndex
    )
    this.state = {
      currentPageIndex,
      // Common
      recipesListTerms,
      listTask: FilterPosts.getDefaultListTask(recipesListTerms) as IListWithPhotosDictTask
    }
  }

  componentWillReceiveProps(nextProps: IIEARecipesListForRestaurantLayoutProps) {
    const newListTask = FilterPosts.byListId(
      nextProps,
      this.state.recipesListTerms,
      this.state.listTask
    ) as IListWithPhotosDictTask
    this.setState({
      listTask: newListTask
    })

    const newCurrentPageIndex = PaginationTerms.getCurrentQueryPageIndex(
      nextProps as IEARecipesListForRestaurantLayoutPropsWithRouter
    )
    this.checkNeedUpdate(newCurrentPageIndex)
  }

  checkNeedUpdate(newCurrentPageIndex) {
    // console.log('Recipes List, newCurrentPageIndex, ', newCurrentPageIndex)

    if (this.state.currentPageIndex !== newCurrentPageIndex) {
      const recipesListTerms = PaginationTerms.generateTermsForRecipesListOnRestaurant(
        this.props.forObject,
        newCurrentPageIndex
      )
      const listTask = FilterPosts.getDefaultListTask(
        recipesListTerms,
        this.state.listTask
      ) as IListWithPhotosDictTask
      this.setState({
        currentPageIndex: newCurrentPageIndex,
        // Query
        terms: recipesListTerms,
        listTask
      })
      this.props.loadRecipesListForRestaurantAction({ listTask, terms: recipesListTerms })
    }
  }

  componentDidMount() {
    const { listTask, recipesListTerms } = this.state
    this.props.loadRecipesListForRestaurantAction({ listTask, terms: recipesListTerms })

    Router.onBeforeHistoryChange = (url: string) => {
      const newRouterUrl = queryString.parseUrl(url)
      if (!!newRouterUrl.query.page) {
        this.checkNeedUpdate(newRouterUrl.query.page)
      }
    }
  }

  componentWillUnmount() {
    Router.onBeforeHistoryChange = null
  }

  renderRecipeListHeader() {
    const { listTask } = this.state
    const { forObject } = this.props
    return (
      <h3>{`${AppLinks.calculateTotalCount(listTask)} recipes for ${forObject.displayName}`}</h3>
    )
  }

  renderRows() {
    const { listTask } = this.state
    const { results, ready } = listTask
    if (!ready) {
      return <Telescope.F8LoadingView />
    } else if (!!results && results.length) {
      return (
        <ul className="ylist ylist-bordered reviews">
          {results.map((recipe, index) => {
            return (
              <Telescope.RecipesItem
                key={recipe.id}
                listPhotosDict={listTask.listPhotosDict}
                recipe={recipe}
                index={index}
                showRightTime={true}
              />
            )
          })}
        </ul>
      )
    } else {
      return <Telescope.F8EmptySection title={`No Recipes`} text="" />
    }
  }

  renderRecipesList() {
    const { listTask } = this.state
    return (
      <div className="clearfix layout-block layout-full ysection">
        <div className="column column-alpha main-section">
          <div className="ysection not-recommended-reviews review-list-wide">
            {this.renderRecipeListHeader()}

            <div className="review-list" id="position-relative">
              {this.renderRows()}
            </div>

            <Telescope.F8PaginationButtonNavigationBar
              listTask={listTask}
              barType={Types.paginationNavBar.PAGINATION_NAVIGATION_BAR_FOR_RECIPES_IN_RESTAURANT}
            />
          </div>
        </div>
      </div>
    )
  }

  render() {
    const { forObject } = this.props
    return (
      <div className="main-content-wrap main-content-wrap--full">
        <div id="super-container" className="content-container">
          <div className="container filtered-reviews-content not-recommended-reviews-page">
            <div className="clearfix layout-block layout-full">
              <div className="column column-alpha ">
                <div className="top-return-links">
                  <Link prefetch route={AppLinks.getRestaurantLink(forObject)}>
                    {`« Back to ${forObject.displayName}`}
                  </Link>
                </div>

                {this.renderRecipesList()}
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(IEARecipesListForRestaurantLayout)
