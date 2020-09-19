import * as Telescope from '@appComponents/index'
import * as React from 'react'
import { withRouter } from 'next/router'
import * as Types from '@app/types'

interface IIEAUserProfileEventsLayoutProps {
  userStatistic: IUserStatisticResult
  userProfile: IParseModelUsers
}

@(withRouter as any)
export class IEAUserProfileEventsLayout extends React.Component<
  IIEAUserProfileEventsLayoutProps,
  {}
> {
  render() {
    return (
      <div className="user-details-bookmarks_content js-user-details-bookmarks_content">
        <Telescope.EventsListForObject
          eventType={Types.common.EVENTS_LIST_FOR_USER}
          forObject={this.props.userProfile}
        />
      </div>
    )
  }
}
