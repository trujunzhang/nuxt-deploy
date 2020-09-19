import * as Telescope from '@appComponents/index'
import * as React from 'react'
import { withRouter } from 'next/router'
import * as Types from '@app/types'

interface IIEAUserProfileReviewsLayoutProps {
  userStatistic: IUserStatisticResult
  userProfile: IParseModelUsers
}

@(withRouter as any)
export class IEAUserProfileReviewsLayout extends React.Component<
  IIEAUserProfileReviewsLayoutProps,
  {}
> {
  render() {
    const { userProfile } = this.props
    return (
      <div className="column column-beta">
        <Telescope.ReviewsList
          key={userProfile.id}
          relatedObjectSchemaName={Types.model.PARSE_USERS}
          forObject={userProfile}
          reviewListPageType={Types.reviewListPage.REVIEW_LIST_TYPE_USER_PROFILE_ABOUT}
          reviewTitle={userProfile.username}
        />
      </div>
    )
  }
}
