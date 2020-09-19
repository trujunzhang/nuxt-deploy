import * as React from 'react'

interface IOrderedUsersLeftPanelProps {
  peopleInEvent: IParseModelPeopleInEvent
}

export class OrderedUsersLeftPanel extends React.Component<IOrderedUsersLeftPanelProps, {}> {
  renderOrderedDetail() {
    const { peopleInEvent } = this.props
    const { restaurant, event, user } = peopleInEvent
    return (
      <div className="ysection">
        <div className="ordered-user-left-header">
          <h3>Ordered Details</h3>
        </div>

        <ul className="ylist">
          <li>
            <h4>Location</h4>
            <p>{restaurant.address}</p>
          </li>

          <li>
            <h4>Event</h4>
            <p>{event.displayName}</p>
          </li>

          <li>
            <h4>User</h4>
            <p>{user.displayName}</p>
          </li>
        </ul>
      </div>
    )
  }

  render() {
    return (
      <div className="column column-alpha user-details_sidebar">{this.renderOrderedDetail()}</div>
    )
  }
}
