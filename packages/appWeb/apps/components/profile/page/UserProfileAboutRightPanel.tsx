import * as React from 'react'
import * as Types from '@app/types'
import { StatisticsHelper, Users } from '@app/library' //  '@app/libs'

interface IUserProfileAboutRightPanelProps {
  userStatistic: IUserStatisticResult
  userProfile: IParseModelUsers
}

export class UserProfileAboutRightPanel extends React.Component<
  IUserProfileAboutRightPanelProps,
  {}
> {
  renderRating() {
    const ratingRows = StatisticsHelper.getUserVotingStars(this.props.userStatistic)
    return (
      <div className="ysection">
        <h4>Rating Distribution</h4>
        <table className="histogram histogram--alternating">
          <tbody>
            {ratingRows.map((row, index) => {
              return (
                <tr key={index} className={`histogram_row histogram_row--${index + 1}`}>
                  <th scope="row" className="histogram_label nowrap">
                    {`${row.tag} stars`}
                  </th>
                  <td>
                    <table>
                      <tbody>
                        <tr>
                          <td style={{ width: row.width }}>
                            <div className="histogram_bar" />
                          </td>
                          <td className="histogram_count">{row.value}</td>
                        </tr>
                      </tbody>
                    </table>
                  </td>
                </tr>
              )
            })}
          </tbody>
        </table>
      </div>
    )
  }

  renderUserState() {
    const userStateRows = StatisticsHelper.getUserStateRowItems(
      this.props.userStatistic,
      Types.userStatisticsRows.STATUS_ROWS_RIGHT
    )

    return (
      <div className="ysection">
        <h4>Stats</h4>
        <ul className="ylist ylist--condensed">
          {userStateRows.map((row, index) => {
            return (
              <li key={index}>
                <span id="icon_18X18" className="icon icon--18-light-bulb icon--size-18 u-space-r1">
                  <svg className="icon_svg">
                    <path d={row.svg} />
                  </svg>
                </span>
                {row.tag}
                <strong className="margin-left-6">{row.value}</strong>
              </li>
            )
          })}
        </ul>
      </div>
    )
  }

  render() {
    const { userProfile } = this.props
    return (
      <div className="user-details-overview_sidebar">
        <h3>{`About ${userProfile.username}`}</h3>
        {this.renderRating()}

        {this.renderUserState()}

        <div className="ysection">
          <ul className="ylist">
            <li>
              <h4>Account Since</h4>
              <p>{Users.getCreatedAtFormat(userProfile)}</p>
            </li>
          </ul>
        </div>
      </div>
    )
  }
}
