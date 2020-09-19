import * as React from 'react'
import { withRouter } from 'next/router'
import { delayEvent } from '@app/library' //  '@app/libs'

interface IReviewsHeaderSearchBarProps {}

interface IReviewsHeaderSearchBarWithRouterProps {
  router: IWebAppRouterProps
}

type ReviewsHeaderSearchBarPropsWithRouter = IReviewsHeaderSearchBarProps &
  IReviewsHeaderSearchBarWithRouterProps

interface IReviewsHeaderSearchBarState {
  search: string
}

@(withRouter as any)
export class ReviewsHeaderSearchBar extends React.Component<
  IReviewsHeaderSearchBarProps,
  IReviewsHeaderSearchBarState
> {
  constructor(props: IReviewsHeaderSearchBarProps) {
    super(props)

    const { router } = this.props as ReviewsHeaderSearchBarPropsWithRouter

    let query = (router.query as IRouterReviewSearchPattern).query
    if (!!(router.query as IRouterReviewSearchPattern).topicId) {
      query = ''
    }
    this.state = {
      search: query || ''
    }
  }

  componentWillReceiveProps(nextProps: IReviewsHeaderSearchBarProps, nextContext) {
    const { router } = nextProps as ReviewsHeaderSearchBarPropsWithRouter

    if (
      !!(router.query as IRouterReviewSearchPattern).topicId ||
      !(router.query as IRouterReviewSearchPattern).query
    ) {
      this.setState({ search: '' })
    }
  }

  renderButton() {
    return (
      <button type="submit" value="submit" className="ybtn ybtn--primary ybtn--small">
        <span>
          <span
            id="icon_18X18"
            className="icon icon--18-search-small icon--size-18 icon--inverse icon--fallback-inverted">
            <svg className="icon_svg">
              <path d="M15.913 14.224a1.324 1.324 0 0 0-.3-.466h.01l-3.378-3.376a5.49 5.49 0 0 0 .802-2.857 5.523 5.523 0 1 0-5.522 5.52 5.49 5.49 0 0 0 2.856-.8l3.37 3.368.006.003a1.364 1.364 0 0 0 .93.384C15.41 16 16 15.41 16 14.684c0-.163-.032-.317-.086-.46zM7.525 10.94a3.422 3.422 0 0 1-3.418-3.416 3.422 3.422 0 0 1 3.418-3.417 3.422 3.422 0 0 1 3.416 3.417 3.42 3.42 0 0 1-3.413 3.416z" />
            </svg>
          </span>
        </span>
      </button>
    )
  }

  search(e) {
    const input = e.target.value
    this.setState({ search: input })
    this.searchQuery(input)
  }

  searchQuery(input) {
    // const router = this.props.router
    const query = input === '' ? {} : { query: input }
    // const {dispatch} = this.props
    delayEvent(() => {
      // dispatch(queryNearRestaurant({search: input}))
    }, 700)
  }

  renderForm() {
    return (
      <div className="yform yform--continuous arrange">
        <label className="offscreen">Search within the reviews</label>

        <div className="arrange_unit arrange_unit--fill">
          <input
            type="text"
            name="q"
            value={this.state.search}
            onChange={this.search.bind(this)}
            placeholder="Search within the reviews"
          />
        </div>
        <div className="arrange_unit">{this.renderButton()}</div>
      </div>
    )
  }

  render() {
    return (
      <div className="arrange_unit arrange_unit--fill feed_search">
        <div className="section-header_search u-space-r5">{this.renderForm()}</div>
      </div>
    )
  }
}
