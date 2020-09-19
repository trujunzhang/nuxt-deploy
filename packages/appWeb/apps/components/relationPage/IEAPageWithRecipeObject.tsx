import * as Telescope from '@appComponents/index'
import * as React from 'react'
import { withRouter } from 'next/router'
import * as Types from '@app/types'
import { AppLinks, PageFormHelper } from '@appUtils/index'
import { Router } from '@web/server/routes'
import { routePage } from '@web/server/routesModels/utils'
import { loadOrderedRecipePage } from '@web/actions'
import { FilterPosts } from '@appFilter/index'
import { connect } from 'react-redux'

interface IIEAPageWithRecipeObjectStateProps {
  currentUser: ParseModelUsersWithNull
  detailedModelsOverlay: any
  listContainerTasks: IListContainerTasks
}

interface IIEAPageWithRecipeObjectDispatchProps {
  loadOrderedRecipePageAction: any
}

interface IIEAPageWithRecipeObjectProps
  extends IIEAPageWithRecipeObjectStateProps,
  IIEAPageWithRecipeObjectDispatchProps { }

interface IIEAPageWithRecipeObjectWithRouterProps {
  router: IWebAppRouterProps
}

type IEAPageWithRecipeObjectPropsWithRouter = IIEAPageWithRecipeObjectProps &
  IIEAPageWithRecipeObjectWithRouterProps

interface IIEAPageWithRecipeObjectState {
  routePageType: string
  forObjectUniqueId: string
  forUniqueObject: ParseModelRecipeWithNull
}

function mapStateToProps(store, ownProps) {
  return {
    detailedModelsOverlay: store.detailedModelsOverlay,
    listContainerTasks: store.listContainerTasks,
    currentUser: store.authSession.user
  }
}

function mapDispatchToProps(dispatch) {
  return {
    // Model
    loadOrderedRecipePageAction: (parseId) => dispatch(loadOrderedRecipePage(parseId))
  }
}

@(withRouter as any)
class IEAPageWithRecipeObject extends React.Component<
IIEAPageWithRecipeObjectProps,
IIEAPageWithRecipeObjectState
> {
  private getForObjectUniqueId(props: IIEAPageWithRecipeObjectProps) {
    const { router } = props as IEAPageWithRecipeObjectPropsWithRouter
    const { query } = router

    const { forObjectUniqueId } = query as IRouterOrganizationPageEditRecipePattern
    return forObjectUniqueId
  }

  constructor(props: IIEAPageWithRecipeObjectProps, context) {
    super(props)

    this.state = {
      forObjectUniqueId: this.getForObjectUniqueId(props),
      routePageType: PageFormHelper.getCurrentRoutePageType(
        props as IEAPageWithRecipeObjectPropsWithRouter
      ),
      forUniqueObject: null
    }
  }

  componentWillReceiveProps(nextProps: IIEAPageWithRecipeObjectProps) {
    const nextRoutePageType = PageFormHelper.getCurrentRoutePageType(
      nextProps as IEAPageWithRecipeObjectPropsWithRouter
    )
    this.setState({
      routePageType: nextRoutePageType
    })
    const { forObjectUniqueId } = this.state

    const nextForObject = FilterPosts.getModelByObjectId(
      nextProps,
      forObjectUniqueId,
      this.state.forUniqueObject
    )

    if (!this.state.forUniqueObject) {
      this.setState({
        forUniqueObject: nextForObject
      })
    }
  }

  componentDidMount() {
    const { forObjectUniqueId: parseId } = this.state
    this.props.loadOrderedRecipePageAction(parseId)
  }

  onCancelPress = () => {
    const { forUniqueObject } = this.state
    if (!!forUniqueObject) {
      const nextLink = AppLinks.getEventLink(forUniqueObject)
      Router.pushRoute(nextLink)
    }
  }

  render() {
    const { forUniqueObject, forObjectUniqueId, routePageType } = this.state

    // console.log(
    //   'forUniqueObject : ',
    //   forUniqueObject,
    //   ' , forObjectUniqueId : ',
    //   forObjectUniqueId,
    //   ' , routePageType: ',
    //   routePageType
    // )

    if (!!forUniqueObject) {
      switch (routePageType) {
        case routePage.RECIPE_SINGLE_PAGE:
        case routePage.RECIPE_ONE_PHOTO_PAGE: {
          return (
            // Pages with photos and reviewStatistic.
            <Telescope.IEAPageWithStatistic
              objectSchemaName={Types.model.PARSE_RECIPES}
              forObject={forUniqueObject}
              pageStatisticType={Types.pageStatisticType.PAGE_WITH_STATISTIC_NORMAL}
            />
          )
        }
        default: {
          throw new Error(`Not found routePageType to render! ${routePageType}`)
        }
      }
    }
    return <Telescope.F8LoadingView loadingClass="placeholder_1WOC3" />
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(IEAPageWithRecipeObject)
