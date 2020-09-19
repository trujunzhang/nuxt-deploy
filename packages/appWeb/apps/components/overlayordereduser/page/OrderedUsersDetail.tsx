import * as Telescope from '@appComponents/index'
import * as React from 'react'
import { LeafletHelper } from '@appUtils/index'

interface IOrderedUsersDetailProps {
  peopleInEvent: IParseModelPeopleInEvent
}

export class OrderedUsersDetail extends React.Component<IOrderedUsersDetailProps, {}> {
  renderTitle() {
    return (
      <div className="section-header section-header--complex section-header--no-spacing">
        <div className="arrange arrange--middle arrange--12">
          <div className="arrange_unit nowrap">
            <h2 className="section-header_title">Ordered Recipes</h2>
          </div>
        </div>
      </div>
    )
  }

  renderRightSidebar() {
    const { peopleInEvent } = this.props
    const { restaurant } = peopleInEvent
    const mapInfo = LeafletHelper.getMapInfo({
      model: restaurant,
      location: restaurant.geoLocation,
      showEditButton: false,
      autoPopup: false,
      onlyMap: false
    })
    return (
      <div className="user-details-bookmarks_sidebar">
        <div
          className="bookmarks-map-wrapper js-bookmarks-map-wrapper"
          id="ordered-user-container-right-sider-map">
          <Telescope.F8RestaurantMapSection restaurant={restaurant} mapInfo={mapInfo} />
        </div>
      </div>
    )
  }

  renderRightPanel() {
    const { peopleInEvent } = this.props
    return (
      <div className="column column-beta ">
        {this.renderTitle()}

        <div className="user-details_bookmarks js-user-details_bookmarks">
          <div className="user-details-bookmarks_content js-user-details-bookmarks_content">
            <Telescope.BaseRecipesListPage
              recipes={peopleInEvent.recipes}
              listPhotosDict={peopleInEvent.listPhotosDict as any}
            />
          </div>

          {this.renderRightSidebar()}
        </div>
      </div>
    )
  }

  render() {
    const { peopleInEvent } = this.props
    return (
      <div className="clearfix layout-block layout-n user-details_container">
        <Telescope.OrderedUsersLeftPanel peopleInEvent={peopleInEvent} />

        {this.renderRightPanel()}
      </div>
    )
  }
}
