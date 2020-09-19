import * as React from 'react'
import { withRouter } from 'next/router'
import * as Types from '@app/types'
import { Router } from '@web/server/routes'
import { AppLinks, PaginationTerms } from '@appUtils/index'

interface IF8PaginationButtonNavigationBarProps {
  listTask: any
  barType: string
  reviewForObject?: IReviewForObject
}

interface IF8PaginationButtonNavigationBarWithRouterProps {
  router: IWebAppRouterProps
}

type F8PaginationButtonNavigationBarPropsWithRouter = IF8PaginationButtonNavigationBarProps &
  IF8PaginationButtonNavigationBarWithRouterProps

interface IF8PaginationButtonNavigationBarState {
  totalCount: number
  currentPageIndex: number
}

@(withRouter as any)
export class F8PaginationButtonNavigationBar extends React.Component<
  IF8PaginationButtonNavigationBarProps,
  IF8PaginationButtonNavigationBarState
> {
  constructor(props: IF8PaginationButtonNavigationBarProps, context) {
    super(props)
    const { listTask } = props
    const { totalCount } = listTask

    this.state = {
      totalCount,
      currentPageIndex: PaginationTerms.getCurrentQueryPageIndex(
        props as F8PaginationButtonNavigationBarPropsWithRouter
      )
    }
  }

  componentWillReceiveProps(nextProps: IF8PaginationButtonNavigationBarProps) {
    const { listTask } = nextProps
    const { totalCount } = listTask
    this.setState({
      totalCount,
      currentPageIndex: PaginationTerms.getCurrentQueryPageIndex(
        nextProps as F8PaginationButtonNavigationBarPropsWithRouter
      )
    })
  }

  onPaginationButtonPress(page) {
    const { barType, reviewForObject } = this.props

    const { router } = this.props as F8PaginationButtonNavigationBarPropsWithRouter

    const { pathname, asPath, query } = router
    switch (barType) {
      case Types.paginationNavBar.PAGINATION_NAVIGATION_BAR_FOR_RECIPES_IN_RESTAURANT: {
        // http://localhost:4000/biz_recipes/72rHCfkSGs/Forno-Vecchio

        const nextPath = AppLinks.getRecipesListForRestaurantNavBarLink(query, page)
        Router.pushRoute(nextPath).then(() => window.scrollTo(0, 0))

        break
      }
      case Types.paginationNavBar.PAGINATION_NAVIGATION_BAR_FOR_REVIEWS: {
        if (!!reviewForObject) {
          const nextPath = AppLinks.getReviewsListNavBarLink(reviewForObject, page)
          Router.pushRoute(nextPath).then(() => window.scrollTo(0, 0))
        }
        break
      }
    }
  }

  render() {
    const { totalCount } = this.state
    if (totalCount !== -1) {
      return this.renderContent()
    }
    return null
  }

  renderContent() {
    const { currentPageIndex, totalCount } = this.state
    const totalPage = AppLinks.getTotalPageForPagination(this.props, totalCount)
    return (
      <div className="pagination-block">
        <div className="arrange arrange--stack arrange--baseline arrange--6">
          <div className="page-of-pages arrange_unit arrange_unit--fill">
            {`Page ${currentPageIndex} of ${totalPage}`}
          </div>

          {totalPage > 1 && this.renderRightPanel()}
        </div>
      </div>
    )
  }

  renderRightPanel() {
    const { currentPageIndex, totalCount } = this.state
    const totalPage = AppLinks.getTotalPageForPagination(this.props, totalCount)
    const arrangeUnits: any = []
    for (let x = 0; x < totalPage; x++) {
      let row = (
        <div key={x} className="arrange_unit page-option">
          <a
            className="available-number pagination-links_anchor"
            onClick={(e: any) => this.onPaginationButtonPress(x + 1)}>
            {x + 1}
          </a>
        </div>
      )
      if (x + 1 === currentPageIndex) {
        row = (
          <div key={x} className="arrange_unit page-option current">
            <span className="pagination-links_anchor">{x + 1}</span>
          </div>
        )
      }
      arrangeUnits.push(row)
    }

    return (
      <div className="pagination-links arrange_unit">
        <div className="arrange arrange--baseline">
          {currentPageIndex !== 1 && totalCount > 0 && this.renderPreviousIcon()}

          {arrangeUnits}

          {currentPageIndex !== totalPage && totalCount > 0 && this.renderNextIcon()}
        </div>
      </div>
    )
  }

  onPreviousIconPress = () => {
    const { currentPageIndex } = this.state
    const currentIndex = Number(currentPageIndex)
    if (currentIndex > 1) {
      this.onPaginationButtonPress(currentIndex - 1)
    }
  }

  onNextIconPress = () => {
    const { currentPageIndex, totalCount } = this.state
    const totalPage = AppLinks.getTotalPageForPagination(this.props, totalCount)
    const currentIndex = Number(currentPageIndex)
    if (currentIndex < totalPage) {
      this.onPaginationButtonPress(currentIndex + 1)
    }
  }

  renderPreviousIcon() {
    return (
      <div className="arrange_unit">
        <a
          onClick={this.onPreviousIconPress}
          className="u-decoration-none block prev pagination-links_anchor">
          <span
            id="icon_24X24"
            className="icon icon--24-chevron-left icon--size-24 icon--currentColor">
            <svg className="icon_svg">
              <path d="M14.475 18.364l1.414-1.414L10.94 12l4.95-4.95-1.415-1.414L8.11 12l6.365 6.364z" />
            </svg>
          </span>
          <span className="pagination-label responsive-hidden-small">{'Previous'}</span>
        </a>
      </div>
    )
  }

  renderNextIcon() {
    return (
      <div className="arrange_unit">
        <a
          onClick={this.onNextIconPress}
          className="u-decoration-none next pagination-links_anchor">
          <span className="pagination-label responsive-hidden-small pagination-links_anchor">
            {'Next'}
          </span>
          <span
            id="icon_24X24"
            className="icon icon--24-chevron-right icon--size-24 icon--currentColor">
            <svg className="icon_svg">
              <path d="M9.525 5.636L8.11 7.05 13.06 12l-4.95 4.95 1.415 1.414L15.89 12 9.524 5.636z" />
            </svg>
          </span>
        </a>
      </div>
    )
  }
}
