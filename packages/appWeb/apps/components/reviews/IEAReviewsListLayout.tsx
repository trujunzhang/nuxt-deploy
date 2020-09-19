import * as Telescope from '@appComponents/index'
import * as React from 'react'
import { withRouter } from 'next/router'
import * as Types from '@app/types'
import { AppConstants } from '@app/types'
import { Link, Router } from '@web/server/routes'
import * as queryString from 'query-string'
import { AppLinks, PaginationTerms } from '@appUtils/index'
import { loadReviewsList } from '@web/actions'
import { FilterPosts } from '@appFilter/index'
import { connect } from 'react-redux'

interface IIEAReviewsListLayoutStateProps {
  editModel: IEditModelState
  listContainerTasks: IListContainerTasks
}

interface IIEAReviewsListLayoutDispatchProps {
  // List
  loadReviewsListAction: LoadParseObjectsListActionFunc
}

interface IIEAReviewsListLayoutProps
  extends IIEAReviewsListLayoutStateProps,
  IIEAReviewsListLayoutDispatchProps { }

interface IIEAReviewsListLayoutWithRouterProps {
  router: IWebAppRouterProps
}

type IEAReviewsListLayoutPropsWithRouter = IIEAReviewsListLayoutProps &
  IIEAReviewsListLayoutWithRouterProps

interface IIEAReviewsListLayoutState {
  listTask: IListWithPhotosDictTask | IListTask
  reviewTerms: IParseQueryReviewsTerm
  modelType: string
  forObject: IReviewForObject
  forObjectUniqueId: string
}

function mapDispatchToProps(dispatch) {
  return {
    // List
    loadReviewsListAction: (params: IWebParseObjectsListBaseParams) =>
      dispatch(loadReviewsList(params))
  }
}

function mapStateToProps(store, ownProps) {
  return {
    editModel: store.editModel,
    listContainerTasks: store.listContainerTasks
  }
}

@(withRouter as any)
class IEAReviewsListLayout extends React.Component<
IIEAReviewsListLayoutProps,
IIEAReviewsListLayoutState
> {
  constructor(props: IIEAReviewsListLayoutProps, context) {
    super(props)
    const { router } = this.props as IEAReviewsListLayoutPropsWithRouter
    const {
      modelType,
      forObjectUniqueId,
      forObjectDisplayName
    } = router.query as IRouterReviewsListPagePattern

    if (forObjectUniqueId === undefined || !forObjectUniqueId) {
      throw new Error('Not found forObjectUniqueId in the IEAReviewsListLayout!')
    }

    const forObject: IReviewForObject = {
      uniqueId: forObjectUniqueId,
      modelType,
      displayName: forObjectDisplayName
    }

    const { objectSchemaName: relatedObjectSchemaName } = AppConstants.realmObjects[modelType]
    const reviewTerms = PaginationTerms.generateTermsForReviewsList({
      relatedObjectSchemaName,
      forObject,
      router,
      reviewListPageType: Types.reviewListPage.REVIEW_LIST_TYPE_NORMAL,
      prefix: 'page'
    })

    this.state = {
      // Common
      reviewTerms,
      listTask: FilterPosts.getDefaultListTask(reviewTerms),
      modelType,
      // Detailed object
      forObject,
      forObjectUniqueId
    }
  }

  componentWillReceiveProps(nextProps: IIEAReviewsListLayoutProps) {
    const newListTask = FilterPosts.byListId(nextProps, this.state.reviewTerms, this.state.listTask)
    this.setState({
      listTask: newListTask
    })

    const newPageIndex = PaginationTerms.getCurrentQueryPageIndex(
      nextProps as IEAReviewsListLayoutPropsWithRouter
    )
    this.checkNeedUpdate(newPageIndex, newListTask)
  }

  checkNeedUpdate(newPageIndex: number, newListTask) {
    const lastReviewTerms = this.state.reviewTerms
    const newReviewsTerms = PaginationTerms.updateTermsForReviewsList(
      this.state.reviewTerms,
      newPageIndex
    )

    if (
      lastReviewTerms.pageIndex !== newReviewsTerms.pageIndex // Change page index.
    ) {
      const newReviewTask = FilterPosts.getDefaultListTask(newReviewsTerms, newListTask)
      this.setState({
        // Reviews
        reviewTerms: newReviewsTerms,
        listTask: newReviewTask
      })
      this.props.loadReviewsListAction({ listTask: newReviewTask, terms: newReviewsTerms })
    }
  }

  componentDidMount() {
    this.props.loadReviewsListAction({
      listTask: this.state.listTask,
      terms: this.state.reviewTerms
    })

    Router.onBeforeHistoryChange = (url: string) => {
      const newRouterUrl: any = queryString.parseUrl(url)
      if (newRouterUrl.url.indexOf('/reviews') !== -1) {
        this.checkNeedUpdate(newRouterUrl.query.page, this.state.listTask)
      }
    }
  }

  componentWillUnmount() {
    Router.onBeforeHistoryChange = null
  }

  renderReviewListHeader() {
    const { listTask, forObject } = this.state
    return (
      <h3>{`${AppLinks.calculateTotalCount(listTask)} reviews for ${forObject.displayName}`}</h3>
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
          {results.map((review, index) => {
            return (
              <Telescope.ReviewsItem
                key={review.id}
                listPhotosDict={(listTask as IListWithPhotosDictTask).listPhotosDict}
                review={review}
              />
            )
          })}
        </ul>
      )
    } else {
      return <Telescope.F8EmptySection title={`No reviews`} text="" />
    }
  }

  renderReviewsList() {
    const { listTask, forObject } = this.state
    return (
      <div className="clearfix layout-block layout-full ysection">
        <div className="column column-alpha main-section">
          <div className="ysection not-recommended-reviews review-list-wide">
            {this.renderReviewListHeader()}

            <div className="review-list" id="position-relative">
              {this.renderRows()}
            </div>

            <Telescope.F8PaginationButtonNavigationBar
              listTask={listTask}
              barType={Types.paginationNavBar.PAGINATION_NAVIGATION_BAR_FOR_REVIEWS}
              reviewForObject={forObject}
            />
          </div>
        </div>
      </div>
    )
  }

  render() {
    const { forObject } = this.state
    const { modelType } = forObject
    const { objectSchemaName } = AppConstants.realmObjects[modelType]
    const backUrl = AppLinks.geDetailedModelLinkByObjectSchemaName(objectSchemaName, forObject)

    return (
      <div className="main-content-wrap main-content-wrap--full">
        <div id="super-container" className="content-container">
          <div className="container filtered-reviews-content not-recommended-reviews-page">
            <div className="clearfix layout-block layout-full">
              <div className="column column-alpha ">
                <div className="top-return-links">
                  <Link prefetch route={backUrl}>
                    {`« Back to ${forObject.displayName}`}
                  </Link>
                </div>

                {this.renderReviewsList()}
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
)(IEAReviewsListLayout)
