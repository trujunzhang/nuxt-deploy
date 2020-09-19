import * as Telescope from '@appComponents/index'
import * as React from 'react'
import { Photos } from '@app/library' //  '@app/libs'

const classNames = require('classnames')

interface IHeaderRightUserPanelProps {
  currentUser: IParseModelUsers
}

interface IHeaderRightUserPanelState {
  isOpen: boolean
}

export class HeaderRightUserPanel extends React.Component<
  IHeaderRightUserPanelProps,
  IHeaderRightUserPanelState
> {
  constructor(props: IHeaderRightUserPanelProps) {
    super(props)
    this.state = {
      isOpen: false
    }
  }

  onHandleClickOutsidePress = () => {
    this.setState({
      isOpen: false
    })
  }

  onUserBlockPress = (e) => {
    e.preventDefault()
    const lastState = this.state.isOpen
    if (lastState) {
      this.setState({
        isOpen: false
      })
    } else {
      this.setState({
        isOpen: true
      })
    }
    e.stopPropagation()
  }

  renderRightNormalUserSection() {
    const { currentUser } = this.props
    const { isOpen } = this.state

    const currentClass = classNames(
      'ybtn',
      'ybtn--primary',
      'drop-menu-link',
      'user-account_button',
      {
        'drop-menu-highlighted': isOpen
      }
    )

    return (
      <a className={currentClass} id="topbar-account-link" onClick={this.onUserBlockPress}>
        <span className="user-account_avatar responsive-visible-large-block">
          <Telescope.F8PlaceHolderImage
            alt={currentUser.username}
            className="photo-box-img"
            height={90}
            width={90}
            placeholderSource={Photos.config.placeHolderSmallImage.PARSE_USERS}
            source={currentUser.defaultAvatarUrl}
          />
        </span>
        <span
          id="icon_14X14"
          className="icon icon--14-triangle-down icon--size-14 icon--inverse icon--fallback-inverted u-triangle-direction-down user-account_button-arrow responsive-visible-large-inline-block">
          <svg className="icon_svg">
            <path d="M7 9L3.5 5h7L7 9z" />
          </svg>
        </span>
        <span
          id="icon_24X24"
          className="icon icon--24-hamburger icon--size-24 icon--inverse icon--fallback-inverted drop-menu-link_open">
          <svg className="icon_svg">
            <path d="M3 18v-2h18v2H3zm0-7h18v2H3v-2zm0-5h18v2H3V6z" />
          </svg>
        </span>
        <span
          id="icon_24X24"
          className="icon icon--24-close icon--size-24 icon--inverse icon--fallback-inverted drop-menu-link_close">
          <svg className="icon_svg">
            <path d="M17.657 19.07L12 13.415 6.343 19.07 4.93 17.658 10.585 12 4.93 6.343 6.342 4.93 12 10.585l5.657-5.657L19.07 6.34 13.416 12l5.657 5.657-1.413 1.414z" />
          </svg>
        </span>
      </a>
    )
  }

  render() {
    return (
      <div className="arrange_unit main-header--full_arrange_unit">
        <div className="arrange arrange--6">
          <div className="arrange_unit u-nowrap hidden-non-responsive-table-cell responsive-visible-medium-only-table-cell">
            <a className="ybtn ybtn--primary main-header_button" href="/writeareview">
              Write a Review
            </a>
          </div>
          <div className="arrange_unit u-nowrap">
            <div className="main-header_account webview-hidden">
              <div id="topbar-account-item" className="user-account clearfix drop-menu-origin">
                {this.renderRightNormalUserSection()}

                <Telescope.HeaderRightUserPopOverlay
                  isOpen={this.state.isOpen}
                  currentUser={this.props.currentUser}
                  onHandleClickOutsidePress={this.onHandleClickOutsidePress}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
