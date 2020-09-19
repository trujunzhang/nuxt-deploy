import * as Telescope from '@appComponents/index'
import * as React from 'react'
import { withRouter } from 'next/router'
import * as Types from '@app/types'

interface IIEAUserProfileAboutLayoutProps {
  userStatistic: IUserStatisticResult
  userProfile: IParseModelUsers
}

@(withRouter as any)
export class IEAUserProfileAboutLayout extends React.Component<
  IIEAUserProfileAboutLayoutProps,
  {}
> {
  render() {
    const { userProfile, userStatistic } = this.props
    return (
      <div className="column column-beta ">
        <div className="user-details_bookmarks js-user-details_bookmarks">
          <div className="user-details-bookmarks_content js-user-details-bookmarks_content">
            <Telescope.ReviewsList
              key={userProfile.id}
              relatedObjectSchemaName={Types.model.PARSE_USERS}
              forObject={userProfile}
              reviewListPageType={Types.reviewListPage.REVIEW_LIST_TYPE_USER_PROFILE_ABOUT}
              reviewTitle={userProfile.username}
            />
          </div>

          <Telescope.UserProfileAboutRightPanel
            userStatistic={userStatistic}
            userProfile={userProfile}
          />
        </div>
      </div>
    )
  }
}
