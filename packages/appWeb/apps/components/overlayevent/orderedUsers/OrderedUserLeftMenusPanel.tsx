import * as Telescope from '@appComponents/index'
import * as React from 'react'
import { AppLinks } from '@appUtils/index'
import { PeopleInEvent, Photos } from '@app/library' //  '@app/libs'
import { Router } from '@web/server/routes'
import { withRouter } from 'next/router'

const classNames = require('classnames')

interface IOrderedUserLeftMenusPanelProps {
  eventUniqueId: string
  selectedUserId: string

  leftUsersListTask: any
  peopleInEventListDict: IPeopleInEventListDict
  onLeftUserMenuItemPressHook: any
}

interface IOrderedUserLeftMenusPanelState {}

interface IOrderedUserLeftMenusPanelWithRouterProps {
  router: IWebAppRouterProps
}

type OrderedUserLeftMenusPanelPropsWithRouter = IOrderedUserLeftMenusPanelProps &
  IOrderedUserLeftMenusPanelWithRouterProps

@(withRouter as any)
export class OrderedUserLeftMenusPanel extends React.Component<
  IOrderedUserLeftMenusPanelProps,
  IOrderedUserLeftMenusPanelState
> {
  renderLeftMenuTitle() {
    return (
      <div className="titled-nav-header">
        <div className="arrange arrange--top">
          <div className="arrange_unit arrange_unit--fill">
            <div className="titled-nav-header_content">
              <h3>{`Users List`}</h3>
            </div>
          </div>
        </div>
      </div>
    )
  }

  onLeftUserMenuItemPress(user: IParseModelUsers) {
    const { eventUniqueId } = this.props
    const params: IRouterOrganizationPageEventsForUserSelectedUserPattern = {
      forObjectUniqueId: eventUniqueId,
      userId: user.id
    }
    const newUrl = AppLinks.getEventsForUserSelectedUserLink(params)
    Router.pushRoute(newUrl)

    this.props.onLeftUserMenuItemPressHook(user)
  }

  renderRows() {
    const { leftUsersListTask, peopleInEventListDict, selectedUserId } = this.props
    // const { leftUsersListTask, peopleInEventListDict, selectedUserId } = this.state

    const { results } = leftUsersListTask

    console.log('Ordered User Left Menu,selectedUserId: ', selectedUserId)

    return (
      <div className="ysection">
        <div className="titled-nav js-titled-nav">
          <div className="titled-nav_menus">
            <div className="titled-nav_menu">
              {this.renderLeftMenuTitle()}

              <ul className="titled-nav_items">
                {results.map((user: IParseModelUsers, index: number) => {
                  const rowClass = classNames('titled-nav_link', {
                    'is-active': selectedUserId === user.id
                  })
                  const orderedRecipesCount = PeopleInEvent.getOrderedRecipeCount(
                    user,
                    peopleInEventListDict
                  )
                  return (
                    <li key={index} className="titled-nav_item">
                      <a
                        onClick={() => {
                          this.onLeftUserMenuItemPress(user)
                        }}
                        className={rowClass}>
                        <div className="titled-nav_link-content arrange arrange--middle arrange--6">
                          <div className="arrange_unit">
                            <Telescope.F8PlaceHolderImage
                              alt={user.username}
                              width={30}
                              height={30}
                              placeholderSource={Photos.config.placeHolderSmallImage.PARSE_USERS}
                              source={Photos.getImageUrlInListPhotosDict({
                                model: user,
                                listTask: leftUsersListTask
                              })}
                            />
                          </div>

                          <div className="arrange_unit arrange_unit--fill">
                            <span className="titled-nav_link-label">{user.username}</span>
                            {orderedRecipesCount > 0 && (
                              <span className="left-ordered-user-recipes-count">{` (${orderedRecipesCount})`}</span>
                            )}
                          </div>
                        </div>
                      </a>
                    </li>
                  )
                })}
              </ul>
            </div>
          </div>
        </div>
      </div>
    )
  }

  renderEmptySection() {
    const { leftUsersListTask } = this.props
    const { results, ready, totalCount } = leftUsersListTask
    if (ready && results.length === 0) {
      return <Telescope.F8EmptySection title={`No Users Found`} text="" />
    }
    return null
  }

  render() {
    return (
      <div className="ysection">
        {this.renderRows()}

        <div className="u-space-t2 u-space-b2">{this.renderEmptySection()}</div>
      </div>
    )
  }
}
