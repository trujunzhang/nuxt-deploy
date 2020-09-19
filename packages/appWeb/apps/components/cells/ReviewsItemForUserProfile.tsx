import * as Telescope from '@appComponents/index'
import * as React from 'react'
import { Reviews } from '@app/library' //  '@app/libs'
import { AppLinks, ReviewsLinker } from '@appUtils/index'
import * as Types from '@app/types'
import { Link } from '@web/server/routes'
import { connect } from 'react-redux'

interface IReviewsItemForUserProfileStateProps {
  currentUser: ParseModelUsersWithNull
}

interface IReviewsItemForUserProfileDispatchProps {}

interface IReviewsItemForUserProfileProps
  extends IReviewsItemForUserProfileStateProps,
    IReviewsItemForUserProfileDispatchProps {
  listPhotosDict: IListPhotosDict<string>
  review: IParseModelReviews
}

function mapDispatchToProps(dispatch) {
  return {}
}

function mapStateToProps(store) {
  return {
    currentUser: store.authSession.user
  }
}

class ReviewsItemForUserProfile extends React.Component<IReviewsItemForUserProfileProps, {}> {
  renderTop() {
    const { review } = this.props
    const { reviewType } = review
    const reviewObject: IReviewObjectByType = ReviewsLinker.getReviewObjectByType(review)
    return (
      <div className="review-topbar">
        <div className="media-block media-block--12 biz-listing-medium">
          <Telescope.F8ImagesSlideShowView
            altValue={reviewObject.displayName}
            forObject={reviewObject}
            objectSchemaName={reviewObject.objectSchemaName}
            listPhotosDict={this.props.listPhotosDict}
            slideShowType={Types.imageSideShow.SLIDE_SHOW_VIEW_TYPE_LEFT_LIST_USER_AVATOR}
          />

          <div className="media-story">
            <ul className="user-passport-info">
              <li className="user-name">
                <Link prefetch route={reviewObject.detailUrl}>
                  <a className="user-display-name title-font-weight-bold" id="dropdown_user-name">
                    {reviewObject.displayName}
                  </a>
                </Link>
              </li>

              <li className="price-category">
                <span className="bullet-after">
                  <span className="business-attribute price-range">$$</span>
                </span>
                <span className="category-str-list">
                  <a>{reviewType}</a>
                </span>
              </li>

              <li className="user-location responsive-hidden-small">
                <span>{reviewObject.thirdRow}</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    )
  }

  renderStory() {
    const { review } = this.props
    const { rate } = review
    const htmlBody = Reviews.getHtmlBody(review)
    const canEditReview = Reviews.checkCanEditReview(this.props)
    return (
      <div className="review-content">
        <div className="review-content">
          <div className="biz-rating biz-rating-large clearfix">
            <div>
              <Telescope.F8StarIcon rate={rate} iconType="regular" />
            </div>
            <span className="rating-qualifier">{Reviews.toDateString(review.updatedAt)}</span>
          </div>

          <div className="post_page_body" dangerouslySetInnerHTML={htmlBody} />
        </div>
      </div>
    )
  }

  renderRightEditButton() {
    const { review } = this.props
    return (
      <Link prefetch route={AppLinks.getEditReviewLink(review)}>
        <a className="link-more icon-wrapper mapbox-edit">
          <span
            id="icon_14X14"
            className="icon icon--14-pencil icon--size-14 icon--linked u-space-r-half">
            <svg className="icon_svg">
              <path d="M12.95 3.05c0-.512-.195-1.023-.586-1.414a1.996 1.996 0 0 0-2.83 0L8.122 3.05 2.465 8.707 1.05 12.95l4.243-1.414L10.95 5.88l1.414-1.416c.39-.39.586-.902.586-1.414zm-8.197 7.61l-2.122.71.71-2.123 5.49-5.49 1.415 1.415-5.49 5.49z" />
            </svg>
          </span>
          <span>{'Edit'}</span>
        </a>
      </Link>
    )
  }

  render() {
    return (
      <li>
        <div className="review">
          {this.renderTop()}
          {this.renderStory()}
        </div>
      </li>
    )
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ReviewsItemForUserProfile)
