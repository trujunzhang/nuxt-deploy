import * as React from 'react'
import { Reviews } from '@app/library' //  '@app/libs'
import { Router } from '@web/server/routes'
import { withRouter } from 'next/router'
import * as Types from '@app/types'
import { StatusConstants } from '@app/types'
import OnClickOut from 'react-onclickoutside'
import { PaginationTerms, ParseHrefFromRouterHelper } from '@appUtils/index'

const classNames = require('classnames')

interface IReviewsHeaderRightSortViewProps {
  reviewListPageType?: string
}

interface IReviewsHeaderRightSortViewWithRouterProps {
  router: IWebAppRouterProps
}

type ReviewsHeaderRightSortViewPropsWithRouter = IReviewsHeaderRightSortViewProps &
  IReviewsHeaderRightSortViewWithRouterProps

interface IReviewsHeaderRightSortViewDefaultProps {
  reviewListPageType: string
}

type ReviewsHeaderRightSortViewPropsWithDefaults = IReviewsHeaderRightSortViewProps &
  IReviewsHeaderRightSortViewDefaultProps

interface IReviewsHeaderRightSortViewState {
  selectedDropDownMenuIndex: number
  isOpening: boolean
  currentDropDownMenus: IReviewSortItem[]
}

@(withRouter as any)
@(OnClickOut as any)
export class ReviewsHeaderRightSortView extends React.Component<
  IReviewsHeaderRightSortViewProps,
  IReviewsHeaderRightSortViewState
> {
  public static defaultProps: Partial<ReviewsHeaderRightSortViewPropsWithDefaults> = {
    reviewListPageType: Types.reviewListPage.REVIEW_LIST_TYPE_NORMAL
  }

  constructor(props: IReviewsHeaderRightSortViewProps) {
    super(props)
    const { reviewListPageType } = props as ReviewsHeaderRightSortViewPropsWithDefaults
    const currentDropDownMenus = Reviews.getCurrentSortArray(reviewListPageType)
    this.state = {
      isOpening: false,
      currentDropDownMenus,
      selectedDropDownMenuIndex: PaginationTerms.getCurrentSelectedDropMenuIndex(
        props as ReviewsHeaderRightSortViewPropsWithRouter
      )
    }
  }

  componentWillReceiveProps(nextProps: IReviewsHeaderRightSortViewProps) {
    this.setState({
      selectedDropDownMenuIndex: PaginationTerms.getCurrentSelectedDropMenuIndex(
        nextProps as ReviewsHeaderRightSortViewPropsWithRouter
      )
    })
  }

  onReviewSortItemPress(menu: IReviewSortItem, index: number) {
    const { router } = this.props as ReviewsHeaderRightSortViewPropsWithRouter

    const pathname = new ParseHrefFromRouterHelper(router).getHref().end(false)
    const sortBy = StatusConstants.SORT_TAGS[menu.queryTag]
    const nextLink = `${pathname}?sort_by=${sortBy}`
    Router.pushRoute(nextLink)
    this.setState({
      isOpening: false,
      selectedDropDownMenuIndex: index
    })
  }

  renderDropList() {
    const { isOpening, currentDropDownMenus, selectedDropDownMenuIndex } = this.state

    const dropMenuClass = classNames('dropdown_menu js-dropdown-menu ', {
      'is-visible': isOpening
    })
    return (
      <div className={dropMenuClass}>
        <div className="dropdown_menu-inner">
          <ul className="dropdown_menu-group">
            {currentDropDownMenus.map((menu: IReviewSortItem, index) => {
              const menuClass = classNames(
                'tab-link js-dropdown-link tab-link--dropdown js-tab-link--dropdown',
                {
                  'is-selected': selectedDropDownMenuIndex === index
                }
              )
              return (
                <li key={index} className="dropdown_item">
                  <a
                    className={menuClass}
                    onClick={() => {
                      this.onReviewSortItemPress(menu, index)
                    }}
                    id="review-sort-menu-item">
                    <span className="tab-link_label" title={menu.title}>
                      {menu.title}
                    </span>
                  </a>
                </li>
              )
            })}
          </ul>
        </div>
      </div>
    )
  }

  onSortPress(e) {
    this.setState({
      isOpening: !this.state.isOpening
    })
  }

  handleClickOutside(e) {
    this.setState({
      isOpening: false
    })
  }

  renderSortButton() {
    /* DropDown prefix is so IMPORTANT */
    return (
      <a
        onClick={this.onSortPress.bind(this)}
        id="review-header-sort-button"
        className="dropdown_toggle-action">
        <span id="review-sort-toggle-text" className="dropdown_toggle-text js-dropdown-toggle-text">
          {this.state.currentDropDownMenus[this.state.selectedDropDownMenuIndex].title}
        </span>
        <span
          id="icon_14X14"
          className="icon icon--14-triangle-down icon--size-14 icon--currentColor u-triangle-direction-down dropdown_arrow">
          <svg className="icon_svg">
            <path d="M7 9L3.5 5h7L7 9z" />
          </svg>
        </span>
      </a>
    )
  }

  render() {
    const { isOpening } = this.state
    const dropClass =
      'dropdown js-dropdown dropdown--tab dropdown--arrow dropdown--hover dropdown--restricted ' +
      (isOpening ? 'is-active' : '')
    const dropToggleClass = 'dropdown_toggle js-dropdown-toggle ' + (isOpening ? 'is-active' : '')
    return (
      <div className="arrange_unit u-nowrap" id="sort-right-section">
        <div className="feed_sort js-review-feed-sort">
          <div className={dropClass}>
            <div className={dropToggleClass}>{this.renderSortButton()}</div>

            <div className="dropdown_menu-container">{this.renderDropList()}</div>
          </div>
        </div>
      </div>
    )
  }
}
