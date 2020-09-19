import * as React from 'react'
import * as Telescope from '@appComponents/index'
import * as Types from '@app/types'

interface IReviewsHeaderViewProps {
  reviewTitle: string
  reviewListPageType: string
}

export class ReviewsHeaderView extends React.Component<IReviewsHeaderViewProps, {}> {
  renderTitle() {
    const reviewListPageType =
      this.props.reviewListPageType || Types.reviewListPage.REVIEW_LIST_TYPE_NORMAL
    switch (reviewListPageType) {
      case Types.reviewListPage.REVIEW_LIST_TYPE_NORMAL:
        return (
          <h2>
            Recommended Reviews <b>{'for ' + this.props.reviewTitle}</b>
          </h2>
        )
      default:
        return <h2>Reviews</h2>
    }
  }

  renderContent() {
    const reviewListPageType =
      this.props.reviewListPageType || Types.reviewListPage.REVIEW_LIST_TYPE_NORMAL
    switch (reviewListPageType) {
      case Types.reviewListPage.REVIEW_LIST_TYPE_NORMAL:
        return (
          <div className="arrange arrange--middle u-space-b1">
            <Telescope.ReviewsHeaderSearchBar />
            <Telescope.ReviewsHeaderRightSortView />
          </div>
        )
      case Types.reviewListPage.REVIEW_LIST_TYPE_USER_PROFILE_ABOUT:
        return <Telescope.ReviewsHeaderRightSortView />
    }
  }

  render() {
    return (
      <div className="feed_header">
        <div className="section-header section-header--no-spacing">
          {this.renderTitle()}

          <div className="feed_filters">
            <div className="section-header_block u-space-0">{this.renderContent()}</div>
          </div>
        </div>
      </div>
    )
  }
}
