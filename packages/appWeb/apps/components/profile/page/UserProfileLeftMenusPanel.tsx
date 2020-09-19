import * as React from 'react'
import { Users } from '@app/library' //  '@app/libs'
import { AppLinks } from '@appUtils/index'
import { Router } from '@web/server/routes'
import * as Types from '@app/types'

const classNames = require('classnames')

const userProfileMenus = [
  Types.common.LOGGED_USER_MENU_ABOUT,
  Types.common.LOGGED_USER_MENU_REVIEWS,
  Types.common.LOGGED_USER_MENU_BROWSER_PHOTOS,
  Types.common.LOGGED_USER_MENU_EVENTS,
  Types.common.LOGGED_USER_MENU_RECIPES
]

interface IUserProfileLeftMenusPanelProps {
  usersLeftMenu: IUsersLeftMenu
  userProfile: IParseModelUsers
  onLeftMenuHook: (menuType) => any
}

interface IUserProfileLeftMenusPanelState {}

export class UserProfileLeftMenusPanel extends React.Component<
  IUserProfileLeftMenusPanelProps,
  IUserProfileLeftMenusPanelState
> {
  constructor(props: IUserProfileLeftMenusPanelProps) {
    super(props)
  }

  onLeftMenuPress(menu, menuType) {
    const { userProfile, onLeftMenuHook } = this.props
    const nextPage = AppLinks.getLoggedUserMenuLink(userProfile, menuType)

    if (menuType !== Types.common.LOGGED_USER_MENU_BROWSER_PHOTOS) {
      onLeftMenuHook(menuType)
    }

    Router.pushRoute(nextPage).then(() => {})
  }

  render() {
    const { usersLeftMenu } = this.props
    return (
      <div className="column column-alpha user-details_sidebar">
        <div className="ysection">
          <div className="titled-nav js-titled-nav">
            <div className="titled-nav_menus">
              <div className="titled-nav_menu">
                {this.renderLeftMenuTitle()}

                <ul className="titled-nav_items">
                  {userProfileMenus.map((menuType: string, index: number) => {
                    const menu = Users.profileLeftMenus[menuType]
                    const rowClass = classNames('titled-nav_link', {
                      ' is-active': menuType === usersLeftMenu.pageForm
                    })
                    return (
                      <li key={index} className="titled-nav_item">
                        <a
                          onClick={() => {
                            this.onLeftMenuPress(menu, menuType)
                          }}
                          className={rowClass}>
                          <div className="titled-nav_link-content arrange arrange--middle arrange--6">
                            <div className="arrange_unit">
                              <span
                                id="icon_24X24"
                                className={`icon icon--24-${
                                  menu.tag
                                } icon--size-24 titled-nav_icon`}>
                                <svg className="icon_svg">
                                  <path d={menu.svg} />
                                </svg>
                              </span>
                            </div>

                            <div className="arrange_unit arrange_unit--fill">
                              <span className="titled-nav_link-label">{menu.title}</span>
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
      </div>
    )
  }

  renderLeftMenuTitle() {
    return (
      <div className="titled-nav-header">
        <div className="arrange arrange--top">
          <div className="arrange_unit arrange_unit--fill">
            <div className="titled-nav-header_content">
              <h3>{`${this.props.userProfile.username}'s Profile`}</h3>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
