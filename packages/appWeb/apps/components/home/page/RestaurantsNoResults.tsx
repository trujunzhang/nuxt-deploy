import * as React from 'react'
import { withRouter } from 'next/router'

interface IRestaurantsNoResultsProps {
  relatedList: any
}

interface IRestaurantsNoResultsWithRouterProps {
  router: IWebAppRouterProps
}

type RestaurantsNoResultsPropsWithRouter = IRestaurantsNoResultsProps &
  IRestaurantsNoResultsWithRouterProps

@(withRouter as any)
export class RestaurantsNoResults extends React.Component<IRestaurantsNoResultsProps, {}> {
  onSubmitOneClick() {
    // const {currentUser} = this.context
    //
    // if (!currentUser) {
    //     this.context.messages.showLoginUI()
    //
    // } else {
    //     this.context.messages.pushRouter(this.props.router, {pathname: '/', query: {action: 'new'}})
    // }
  }

  render() {
    let noMessageHint = 'No articles yet. '
    const { relatedList } = this.props

    const { router } = this.props as RestaurantsNoResultsPropsWithRouter

    if (!relatedList && !!(router.query as IRouterSearchPattern).search) {
      noMessageHint = 'We didn’t find anything with that search term.'
    }
    return (
      <div className="posts-no-results">
        <div className="posts-no-results-left">{noMessageHint + ' Why not'}</div>
        <a onClick={this.onSubmitOneClick.bind(this)}>submit one</a>
        <div>?</div>
      </div>
    )
  }
}
