import * as React from 'react'
import * as Telescope from '@appComponents/index'
import { withRouter } from 'next/router'
import { Link, Router } from '@web/server/routes'
import { Restaurants } from '@app/library' //  '@app/libs'
import { LeafletHelper, PaginationTerms, WebSearchHelper } from '@appUtils/index'
import Button from '@material-ui/core/Button'
import { loadRestaurantsList } from '@web/actions'
import { FilterPosts } from '@appFilter/index'
import { connect } from 'react-redux'

interface IIEARestaurantsListStateProps {
  currentUser: ParseModelUsersWithNull
  listContainerTasks: IListContainerTasks
}

interface IIEARestaurantsListDispatchProps {
  loadRestaurantsListAction: LoadParseObjectsListActionFunc
}

interface IIEARestaurantsListProps
  extends IIEARestaurantsListStateProps,
  IIEARestaurantsListDispatchProps {
  onRestaurantItemHover: any
}

interface IIEARestaurantsListWithRouterProps {
  router: IWebAppRouterProps
}

type IEARestaurantsListPropsWithRouter = IIEARestaurantsListProps &
  IIEARestaurantsListWithRouterProps

interface IIEARestaurantsListState {
  terms: any
  listTask: IListWithPhotosDictTask
  markers: IRestaurantMarker[]
  defaultMarker: RestaurantMarkerWithNull
  currentSearch: string | null
}

function mapDispatchToProps(dispatch) {
  return {
    loadRestaurantsListAction: (params: IWebParseObjectsListBaseParams) =>
      dispatch(loadRestaurantsList(params))
  }
}

function mapStateToProps(store) {
  return {
    listContainerTasks: store.listContainerTasks,
    currentUser: store.authSession.user
  }
}

/**
 * Make day wise groups on category pages, remove calendar widget from tag and source pages
 * So calendar will only show on “Homepage” and “Category” page
 * Homepage and category pages will have day wise groups
 */

@(withRouter as any)
class IEARestaurantsList extends React.Component<
IIEARestaurantsListProps,
IIEARestaurantsListState
> {
  constructor(props: IIEARestaurantsListProps) {
    super(props)
    const terms = PaginationTerms.generateTermsForRestaurantList(props)
    this.state = {
      terms,
      listTask: FilterPosts.getDefaultListTask(terms) as IListWithPhotosDictTask,
      markers: [],
      defaultMarker: null,
      currentSearch: null
    }
  }

  componentWillReceiveProps(nextProps: IIEARestaurantsListProps) {
    const { router } = nextProps as IEARestaurantsListPropsWithRouter
    const { markers, defaultMarker } = LeafletHelper.generateMarkers({
      listContainerTasks: nextProps.listContainerTasks,
      listId: this.state.terms.listId
    })
    this.setState({
      listTask: FilterPosts.byListId(
        nextProps,
        this.state.terms,
        this.state.listTask
      ) as IListWithPhotosDictTask,
      markers,
      defaultMarker
    })
    // Next search.
    const nextSearchResult = WebSearchHelper.getNextSearch(router, this.state.currentSearch)
    if (nextSearchResult.haveNextString) {
      const searchTerms = PaginationTerms.generateTermsForRestaurantList(nextProps)
      const searchListTask = FilterPosts.getDefaultListTask(searchTerms) as IListWithPhotosDictTask
      this.setState({
        terms: searchTerms,
        listTask: searchListTask,
        markers: [],
        defaultMarker: null,
        currentSearch: nextSearchResult.nextSearch
      })
      this.loadMore(searchListTask, searchTerms)
    }
  }

  componentDidMount() {
    this.loadMore(this.state.listTask, this.state.terms)
  }

  loadMore(listTask, terms) {
    this.props.loadRestaurantsListAction({ listTask, terms })
  }

  onSubmitNewArticlePress = () => {
    const { currentUser } = this.props
    if (!!currentUser) {
      const nextPage = '/new/biz'
      Router.pushRoute(nextPage)
    } else { // Login
      const nextPage = '/login'
      Router.pushRoute(nextPage)
    }
  }

  render() {
    const { listTask } = this.state
    const { results, ready, totalCount, limit, firstPagination } = listTask
    const hasMore = !ready && totalCount !== results.length
    const showReady = Restaurants.showReady(
      results,
      hasMore,
      ready,
      totalCount,
      limit,
      firstPagination
    )
    if (showReady) {
      return (
        <section className="restaurants-list-loading-panel">
          <Telescope.F8LoadingView />
        </section>
      )
    } else if (!!results && !!results.length) {
      return (
        <ul className="ylist ylist-bordered search-results">
          {results.map((item: IParseModelRestaurants, index: number) => (
            <Telescope.RestaurantsItem
              key={item.id}
              index={index}
              restaurant={item}
              listPhotosDict={listTask.listPhotosDict}
              onRestaurantItemHover={this.props.onRestaurantItemHover}
            />
          ))}
        </ul>
      )
    } else {
      return (
        <section className="results_37tfm">
          <Telescope.F8EmptySection
            title={`No restaurants yet`}
            text="why not"
            renderCustom={() => {
              return (
                <Button
                  variant="contained"
                  size="small"
                  color="secondary"
                  style={{
                    marginLeft: 8
                  }}
                  onClick={this.onSubmitNewArticlePress}
                >
                  {'submit one'}
                </Button>
              )
            }}
          />
        </section>
      )
    }
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(IEARestaurantsList)
