import * as Telescope from '@appComponents/index'
import * as React from 'react'

interface IIEAOrderedUsersLayoutProps {
  peopleInEvent: IParseModelPeopleInEvent
}

export class IEAOrderedUsersLayout extends React.Component<IIEAOrderedUsersLayoutProps, {}> {
  render() {
    const { peopleInEvent } = this.props
    return (
      <div className="main-content-wrap main-content-wrap--full">
        <div className="top-shelf top-shelf-grey">
          <Telescope.OrderedUsersSingleHeader peopleInEvent={peopleInEvent} />
        </div>

        <div id="super-container" className="content-container">
          <Telescope.OrderedUsersDetail peopleInEvent={peopleInEvent} />
        </div>
      </div>
    )
  }
}
