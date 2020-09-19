import * as Telescope from '@appComponents/index'
import * as React from 'react'
import * as Types from '@app/types'
import { StatisticsHelper } from '@app/library' //  '@app/libs'

interface IUserProfileSingleHeaderProps {
  userStatistic: IUserStatisticResult
  userProfile: IParseModelUsers
}

export class UserProfileSingleHeader extends React.Component<IUserProfileSingleHeaderProps, {}> {
  renderColumnOneBottom() {
    const orderedUserStateRows = StatisticsHelper.getUserStateRowItems(
      this.props.userStatistic,
      Types.userStatisticsRows.STATUS_ROWS_HEADER
    )

    return (
      <div className="clearfix margin-top-6">
        <ul className="user-passport-stats">
          {orderedUserStateRows.map((row, index) => {
            return (
              <li key={index} className="review-count">
                <span id="icon_fill_24X24" className="icon icon--24-review icon--size-24">
                  <svg className="icon_svg">
                    <path d={row.svg} />
                  </svg>
                </span>
                <strong className="margin-left-4 margin-right-6">{row.value}</strong>
                {row.tag}
              </li>
            )
          })}
        </ul>
      </div>
    )
  }

  renderColumnOne() {
    const { userProfile } = this.props
    return (
      <div className="user-profile_info arrange_unit">
        <h1>{userProfile.username}</h1>

        {this.renderColumnOneBottom()}
      </div>
    )
  }

  renderColumnTwo() {
    return (
      <div className="user-profile_actions arrange_unit">
        <ul className="action-link-list">
          <li>
            <a className="arrange arrange--middle add-friend">
              <div className="action-link_icon arrange_unit">
                <span
                  id="icon_18X18"
                  className="icon icon--18-add-friend icon--size-18 icon--currentColor">
                  <svg className="icon_svg">
                    <g>
                      <path d="M5.827 9.647l-2.013 4.127c-.448.922-1.18.915-1.628-.007L.173 9.65C-.275 8.73.178 8 1.18 8h3.64c1.002 0 1.455.725 1.007 1.647zM3 7a2 2 0 1 1 0-4 2 2 0 0 1 0 4z" />
                      <path
                        d="M12.827 9.647l-2.013 4.127c-.448.922-1.18.915-1.628-.007L7.173 9.65C6.725 8.73 7.178 8 8.18 8h3.64c1.002 0 1.455.725 1.007 1.647zM10 7a2 2 0 1 1 0-4 2 2 0 0 1 0 4z"
                        opacity=".502"
                      />
                      <path d="M18 14h-2v-2h-2v2h-2v2h2v2h2v-2h2v-2z" />
                    </g>
                  </svg>
                </span>
              </div>
              <div className="action-link_label arrange_unit arrange_unit--fill">Add friend</div>
            </a>
          </li>

          <li>
            <a className="arrange arrange--middle send-compliment">
              <div className="action-link_icon arrange_unit">
                <span
                  id="icon_18X18"
                  className="icon icon--18-compliment icon--size-18 icon--currentColor">
                  <svg className="icon_svg">
                    <path d="M14.5 6.75a5.5 5.5 0 0 0-11 0 5.495 5.495 0 0 0 2.993 4.892L5.5 16.75l3.505-2 3.495 2-.993-5.108A5.495 5.495 0 0 0 14.5 6.75zm-5.5 4c-2.206 0-4-1.794-4-4s1.794-4 4-4 4 1.794 4 4-1.794 4-4 4z" />
                  </svg>
                </span>
              </div>
              <div className="action-link_label arrange_unit arrange_unit--fill">Compliment</div>
            </a>
          </li>

          <li>
            <a className="arrange arrange--middle send-pm">
              <div className="action-link_icon arrange_unit">
                <span
                  id="icon_18X18"
                  className="icon icon--18-speech icon--size-18 icon--currentColor">
                  <svg className="icon_svg">
                    <path d="M2 4v6a2 2 0 0 0 2 2h1v3l4-3h5a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2z" />
                  </svg>
                </span>
              </div>
              <div className="action-link_label arrange_unit arrange_unit--fill">Send message</div>
            </a>
          </li>
        </ul>
      </div>
    )
  }

  render() {
    const { userProfile } = this.props
    return (
      <div className="content-container" style={{ height: '184px' }}>
        <div className="user-profile_content-wrapper arrange arrange--bottom arrange--30">
          <div className="user-profile_avatar-dummy arrange_unit" />
          {this.renderColumnOne()}
        </div>

        <Telescope.F8UserAvatarSection key={userProfile.id} user={userProfile} />
      </div>
    )
  }
}
