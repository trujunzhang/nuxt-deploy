import * as Telescope from '@appComponents/index'
import * as React from 'react'
import { withRouter } from 'next/router'
import * as Types from '@app/types'
import { PageFormHelper } from '@appUtils/index'
import { routePage } from '@web/server/routesModels/utils'
import { loadRestaurantPage } from '@web/actions'
import { FilterPosts } from '@appFilter/index'
import { connect } from 'react-redux'

interface IIEAPageWithRelationObjectStateProps {
  currentUser: ParseModelUsersWithNull
  detailedModelsOverlay: any
  listContainerTasks: IListContainerTasks
}

interface IIEAPageWithRelationObjectDispatchProps {
  loadRestaurantPageAction: any
}

interface IIEAPageWithRelationObjectProps
  extends IIEAPageWithRelationObjectStateProps,
  IIEAPageWithRelationObjectDispatchProps { }

interface IIEAPageWithRelationObjectWithRouterProps {
  router: IWebAppRouterProps
}

type IEAPageWithRelationObjectPropsWithRouter = IIEAPageWithRelationObjectProps &
  IIEAPageWithRelationObjectWithRouterProps

interface IIEAPageWithRelationObjectState {
  routePageType: string
  forObjectUniqueId: string
  forUniqueObject: ParseModelRestaurantWithNull
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
    loadRestaurantPageAction: (parseId) => dispatch(loadRestaurantPage(parseId))
  }
}

@(withRouter as any)
class IEAPageWithRelationObject extends React.Component<
IIEAPageWithRelationObjectProps,
IIEAPageWithRelationObjectState
> {
  private getForObjectUniqueId(props: IIEAPageWithRelationObjectProps) {
    const { router } = props as IEAPageWithRelationObjectPropsWithRouter
    const { query } = router

    const { forObjectUniqueId } = query as IRouterOrganizationPageEditRecipePattern
    return forObjectUniqueId
  }

  constructor(props: IIEAPageWithRelationObjectProps, context) {
    super(props)

    this.state = {
      forObjectUniqueId: this.getForObjectUniqueId(props),
      routePageType: PageFormHelper.getCurrentRoutePageType(
        props as IEAPageWithRelationObjectPropsWithRouter
      ),
      forUniqueObject: null
    }

  }

  componentWillReceiveProps(nextProps: IIEAPageWithRelationObjectProps) {
    const nextRoutePageType = PageFormHelper.getCurrentRoutePageType(
      nextProps as IEAPageWithRelationObjectPropsWithRouter
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
    this.props.loadRestaurantPageAction(parseId)
  }

  render() {
    const { forUniqueObject, routePageType } = this.state

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
        case routePage.ORGANIZATION_NEW_RECIPE:
        case routePage.ORGANIZATION_EDIT_RECIPE: {
          return <Telescope.IEAEditRecipeLayout forRelationObject={forUniqueObject} />
        }
        case routePage.RESTAURANT_SINGLE_PAGE:
        case routePage.RESTAURANT_ONE_PHOTO_PAGE: {
          return (
            // Pages with photos and reviewStatistic.
            <Telescope.IEAPageWithStatistic
              objectSchemaName={Types.model.PARSE_RESTAURANTS}
              forObject={forUniqueObject}
              pageStatisticType={Types.pageStatisticType.PAGE_WITH_STATISTIC_NORMAL}
            />
          )
        }
        case routePage.RESTAURANT_RECIPES_LIST_PAGE: {
          return <Telescope.IEARecipesListForRestaurantLayout forObject={forUniqueObject} />
        }
        case routePage.RESTAURANT_EDIT_PAGE: {
          return (
            <Telescope.IEAEditRestaurantLayout
              forObject={forUniqueObject}
              pageForm={Types.editModel.MODEL_FORM_TYPE_EDIT}
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
)(IEAPageWithRelationObject)
