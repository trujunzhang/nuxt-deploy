import * as Telescope from '@appComponents/index'
import * as React from 'react'
import { Link, Router } from '@web/server/routes'
import { Photos, UserMenuHelper, Users } from '@app/library' //  '@app/libs'
import { AppLinks } from '@appUtils/index'
import OnClickOut from 'react-onclickoutside'
import * as Types from '@app/types'

interface IHeaderRightUserPopOverlayProps {
  isOpen: boolean
  currentUser: IParseModelUsers
  onHandleClickOutsidePress: any
}

@(OnClickOut as any)
export class HeaderRightUserPopOverlay extends React.Component<
  IHeaderRightUserPopOverlayProps,
  {}
> {
  onMenuItemPress = (userMenuItem: ISvgButtonItem) => {
    const { currentUser } = this.props
    const { tag } = userMenuItem
    let nextPage: string | null = null
    switch (tag) {
      case Types.userMenu.POPUP_ITEM_ABOUT_ME: {
        nextPage = AppLinks.getLoggedUserMenuLink(currentUser)
        Router.pushRoute(nextPage)
        break
      }
      case Types.userMenu.POPUP_ITEM_INVITE_FRIENDS: {
        nextPage = '/invite'
        Router.pushRoute(nextPage)
        break
      }
      case Types.userMenu.POPUP_ITEM_ACCOUNT_SETTINGS: {
        nextPage = AppLinks.getLoggedUserMenuLink(currentUser, Types.common.LOGGED_USER_EDIT_FORM)
        Router.pushRoute(nextPage)
        break
      }
      case Types.userMenu.POPUP_ITEM_NEW_RESTAURANT: {
        nextPage = '/new/biz'
        Router.pushRoute(nextPage)
        break
      }
      default:
        break
    }
    this.props.onHandleClickOutsidePress()
  }

  renderMenuLeftIcon(userMenuItem: ISvgButtonItem) {
    const { icons } = userMenuItem
    return icons.map((icon: ISvgButtonIcon, index: number) => {
      return <path key={index} d={icon.path} opacity={icon.opacity} />
    })
  }

  renderMenuItem(userMenuItem: ISvgButtonItem, index: number) {
    return (
      <li key={index} className="drop-down-menu-link">
        <a
          className="js-analytics-click arrange arrange--middle arrange--6"
          onClick={() => {
            this.onMenuItemPress(userMenuItem)
          }}>
          <strong className="arrange_unit">
            <span id="icon_24X24" className="icon icon--24-profile icon--size-24 u-space-r1">
              <svg className="icon_svg">
                <g>{this.renderMenuLeftIcon(userMenuItem)}</g>
              </svg>
            </span>
            {userMenuItem.title}
          </strong>
        </a>
      </li>
    )
  }

  renderMenus() {
    const userMenuItems = UserMenuHelper.getRightUserMenus()
    return userMenuItems.map((userMenuItem: ISvgButtonItem, index: number) => {
      return this.renderMenuItem(userMenuItem, index)
    })
  }

  renderUserPanel() {
    const { currentUser } = this.props
    return (
      <div className="drop-menu-group responsive-visible-large-block">
        <div className="ypassport ypassport-notext media-block">
          <div className="media-avatar responsive-photo-box js-analytics-click">
            <div className="photo-box pb-60s" data-hovercard-id="XA2GwN6Ov4QwEuY2Pzwx4w">
              <Link prefetch route={AppLinks.getLoggedUserMenuLink(currentUser)}>
                <a
                  onClick={(e) => {
                    this.handleClickOutside()
                  }}
                  className="js-analytics-click">
                  <Telescope.F8PlaceHolderImage
                    alt={currentUser.username}
                    className="photo-box-img"
                    width={60}
                    height={60}
                    placeholderSource={Photos.config.placeHolderSmallImage.PARSE_USERS}
                    source={currentUser.defaultAvatarUrl}
                  />
                </a>
              </Link>
            </div>
          </div>

          <div className="media-story">
            <ul className="user-passport-info">
              <li className="user-name">
                <Link prefetch route={AppLinks.getLoggedUserMenuLink(currentUser)}>
                  <a
                    className="user-display-name"
                    onClick={(e) => {
                      this.handleClickOutside()
                    }}
                    id="dropdown_user-name">
                    {currentUser.username}
                  </a>
                </Link>
              </li>
              <li className="user-location responsive-hidden-small">
                <h5>{'Account Since'}</h5>
                <p>{Users.getCreatedAtFormat(currentUser)}</p>
              </li>
            </ul>
          </div>
        </div>
      </div>
    )
  }

  renderColumnTwo() {
    return (
      <ul className="user-passport-stats">
        <li className="friend-count">
          <span id="icon_fill_18X18" className="icon icon--18-friends icon--size-18">
            <svg className="icon_svg">
              <g>
                <path d="M7.904 9.43l-2.098 4.697a.9.9 0 0 1-1.612 0L2.096 9.43a.902.902 0 0 1 .806-1.305h4.196c.67 0 1.105.705.806 1.305zM5 7.375a2 2 0 1 1 0-4 2 2 0 0 1 0 4z" />
                <path
                  d="M15.904 9.43l-2.098 4.697a.89.89 0 0 1-.806.498.89.89 0 0 1-.806-.498L10.096 9.43a.902.902 0 0 1 .806-1.305h4.195c.67 0 1.106.705.807 1.305zM13 7.375a2 2 0 1 1 0-4 2 2 0 0 1 0 4z"
                  opacity=".502"
                />
              </g>
            </svg>
          </span>
          <b>0</b>
        </li>
        <li className="review-count">
          <span id="icon_fill_18X18" className="icon icon--18-review icon--size-18">
            <svg className="icon_svg">
              <path d="M13 3H5c-1.1 0-2 .9-2 2v8c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-1.505 9.643l-2.526-1.55L6.526 12.7 7 9.934 5 7.977l2.766-.404L8.97 4.7l1.264 2.873L13 7.977l-2 1.957.495 2.71z" />
            </svg>
          </span>
          <b>0</b>
        </li>
      </ul>
    )
  }

  render() {
    return (
      <div
        id="topbar-account-wrap"
        className="drop-menu drop-menu-has-arrow"
        style={{ display: this.props.isOpen ? 'block' : 'none' }}>
        {this.renderUserPanel()}

        <ul className="drop-menu-group--nav drop-menu-group">{this.renderMenus()}</ul>

        {this.renderLogOut()}
      </div>
    )
  }

  renderLogOut() {
    return (
      <ul className="drop-menu-group">
        <li className="drop-down-menu-link drop-down-menu-link--logout">
          <div id="logout-form">
            <Link prefetch route="/logout">
              <button
                type="submit"
                className="u-pseudo-link js-analytics-click"
                id="header-log-out">
                {'Log Out'}
              </button>
            </Link>
          </div>
        </li>
      </ul>
    )
  }

  handleClickOutside = () => {
    this.props.onHandleClickOutsidePress()
  }
}
