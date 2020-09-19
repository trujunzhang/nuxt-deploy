import * as Telescope from '@appComponents/index'
import * as React from 'react'
import { withRouter } from 'next/router'
import * as Types from '@app/types'
import * as queryString from 'query-string'
import { Router } from '@web/server/routes'
import { PaginationTerms } from '@appUtils/index'
import { loadReviewsList } from '@web/actions'
import { FilterPosts } from '@appFilter/index'
import { connect } from 'react-redux'

interface IReviewsListStateProps {
  listContainerTasks: IListContainerTasks
}

interface IReviewsListDispatchProps {
  loadReviewsListAction: LoadParseObjectsListActionFunc
}

interface IReviewsListProps extends IReviewsListStateProps, IReviewsListDispatchProps {
  reviewTitle: string
  forObject: any
  showHeaderTitle?: boolean
  reviewListPageType?: string // Types.reviewListPage.REVIEW_LIST_TYPE_USER_PROFILE_ABOUT | Types.reviewListPage.REVIEW_LIST_TYPE_NORMAL
  relatedObjectSchemaName: string
}

interface IReviewsListWithRouterProps {
  router: IWebAppRouterProps
}

type ReviewsListPropsWithRouter = IReviewsListProps & IReviewsListWithRouterProps

interface IReviewsListDefaultProps {
  showHeaderTitle: boolean
  reviewListPageType: string
}

type ReviewsListPropsWithDefaults = IReviewsListProps & IReviewsListDefaultProps

interface IReviewsListState {
  terms: IParseQueryReviewsTerm
  listTask: IListWithPhotosDictTask
}

function mapDispatchToProps(dispatch) {
  return {
    // List
    loadReviewsListAction: (params: IWebParseObjectsListBaseParams) =>
      dispatch(loadReviewsList(params))
  }
}

function mapStateToProps(store) {
  return {
    listContainerTasks: store.listContainerTasks
  }
}

@(withRouter as any)
class ReviewsList extends React.Component<IReviewsListProps, IReviewsListState> {
  public static defaultProps: IReviewsListDefaultProps = {
    showHeaderTitle: true,
    reviewListPageType: Types.reviewListPage.REVIEW_LIST_TYPE_NORMAL
  }

  constructor(props: IReviewsListProps) {
    super(props)

    const { router } = this.props as ReviewsListPropsWithRouter
    const { forObject, relatedObjectSchemaName } = props
    const { reviewListPageType } = props as ReviewsListPropsWithDefaults
    const terms = PaginationTerms.generateTermsForReviewsList({
      router,
      forObject,
      relatedObjectSchemaName,
      reviewListPageType,
      prefix: 'list'
    })
    this.state = {
      terms,
      listTask: FilterPosts.getDefaultListTask(terms) as IListWithPhotosDictTask
    }
  }

  componentWillReceiveProps(nextProps: IReviewsListProps) {
    const newListTask = FilterPosts.byListId(
      nextProps,
      this.state.terms,
      this.state.listTask
    ) as IListWithPhotosDictTask
    this.setState({
      listTask: newListTask
    })
  }

  checkUpdateReviewsList(newTerms: IParseQueryReviewsTerm) {
    /**
     *  Because different sort parameter changed here.
     *  So need to reset all query parameters container 'pageIndex'.
     */
    const resetListTask = FilterPosts.getDefaultListTask(newTerms) as IListWithPhotosDictTask
    this.setState({
      terms: newTerms,
      listTask: resetListTask
    })
    this.props.loadReviewsListAction({ listTask: resetListTask, terms: newTerms })
  }

  componentDidMount() {
    this.props.loadReviewsListAction({ listTask: this.state.listTask, terms: this.state.terms })

    Router.onBeforeHistoryChange = (url: string) => {
      const newRouterUrl = queryString.parseUrl(url)
      const { query } = newRouterUrl
      if (!!query.sort_by) {
        const nextTerms = Object.assign(this.state.terms, {
          sort_by: query.sort_by
        })
        this.checkUpdateReviewsList(nextTerms)
      }
    }
  }

  componentWillUnmount() {
    Router.onBeforeHistoryChange = null
  }

  renderRowItem(review, index) {
    const { listTask } = this.state
    const { reviewListPageType } = this.props as ReviewsListPropsWithDefaults
    switch (reviewListPageType) {
      case Types.reviewListPage.REVIEW_LIST_TYPE_NORMAL:
        return (
          <Telescope.ReviewsItem
            key={review.id}
            listPhotosDict={listTask.listPhotosDict}
            review={review}
          />
        )
      case Types.reviewListPage.REVIEW_LIST_TYPE_USER_PROFILE_ABOUT:
        return (
          <Telescope.ReviewsItemForUserProfile
            key={review.id}
            listPhotosDict={listTask.listPhotosDict}
            review={review}
          />
        )
    }
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
            return this.renderRowItem(review, index)
          })}
        </ul>
      )
    } else {
      return (
        <Telescope.F8EmptySection
          title={`No reviews`}
          text={"You can add new reviews clicking the ' Add review' button."}
        />
      )
    }
  }

  render() {
    const { reviewListPageType, showHeaderTitle } = this.props as ReviewsListPropsWithDefaults
    return (
      <div className="feed">
        {showHeaderTitle && (
          <Telescope.ReviewsHeaderView
            reviewTitle={this.props.reviewTitle}
            reviewListPageType={reviewListPageType}
          />
        )}

        <div className="review-list" id="position-relative">
          {this.renderRows()}
        </div>
      </div>
    )
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ReviewsList)
