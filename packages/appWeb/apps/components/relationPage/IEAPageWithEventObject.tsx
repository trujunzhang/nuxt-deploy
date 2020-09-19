import * as Telescope from '@appComponents/index'
import * as React from 'react'
import { withRouter } from 'next/router'
import * as Types from '@app/types'
import { AppLinks, PageFormHelper } from '@appUtils/index'
import { Router } from '@web/server/routes'
import { routePage } from '@web/server/routesModels/utils'
import { loadEventPage } from '@web/actions'
import { FilterPosts } from '@appFilter/index'
import { connect } from 'react-redux'

interface IIEAPageWithEventObjectStateProps {
  currentUser: ParseModelUsersWithNull
  detailedModelsOverlay: any
  listContainerTasks: IListContainerTasks
}

interface IIEAPageWithEventObjectDispatchProps {
  loadEventPageAction: any
}

interface IIEAPageWithEventObjectProps
  extends IIEAPageWithEventObjectStateProps,
  IIEAPageWithEventObjectDispatchProps { }

interface IIEAPageWithEventObjectWithRouterProps {
  router: IWebAppRouterProps
}

type IEAPageWithEventObjectPropsWithRouter = IIEAPageWithEventObjectProps &
  IIEAPageWithEventObjectWithRouterProps

interface IIEAPageWithEventObjectState {
  routePageType: string
  forObjectUniqueId: string
  forUniqueObject: ParseModelEventWithNull
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
    loadEventPageAction: (parseId) => dispatch(loadEventPage(parseId))
  }
}

@(withRouter as any)
class IEAPageWithEventObject extends React.Component<
IIEAPageWithEventObjectProps,
IIEAPageWithEventObjectState
> {
  private getForObjectUniqueId(props: IIEAPageWithEventObjectProps) {
    const { router } = props as IEAPageWithEventObjectPropsWithRouter
    const { query } = router

    const { forObjectUniqueId } = query as IRouterOrganizationPageEditRecipePattern
    return forObjectUniqueId
  }

  constructor(props: IIEAPageWithEventObjectProps, context) {
    super(props)

    this.state = {
      forObjectUniqueId: this.getForObjectUniqueId(props),
      routePageType: PageFormHelper.getCurrentRoutePageType(
        props as IEAPageWithEventObjectPropsWithRouter
      ),
      forUniqueObject: null
    }
  }

  componentWillReceiveProps(nextProps: IIEAPageWithEventObjectProps) {
    const nextRoutePageType = PageFormHelper.getCurrentRoutePageType(
      nextProps as IEAPageWithEventObjectPropsWithRouter
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
    this.props.loadEventPageAction(parseId)
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
        case routePage.EVENT_SINGLE_PAGE: {
          return (
            // Pages with photos and reviewStatistic.
            <Telescope.IEAPageWithStatistic
              objectSchemaName={Types.model.PARSE_EVENTS}
              forObject={forUniqueObject}
              pageStatisticType={Types.pageStatisticType.PAGE_WITH_STATISTIC_NORMAL}
            />
          )
        }
        case routePage.EVENT_ORGANIZATION_FOR_USER_PAGE: {
          return (
            <Telescope.IEAOrderedUsersInEventsLayout
              eventUniqueId={forObjectUniqueId}
              forObject={forUniqueObject}
            />
          )
        }
        case routePage.EVENT_EDIT_PAGE: {
          return (
            <Telescope.IEAEditEventLayout
              onCancelPress={this.onCancelPress}
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
)(IEAPageWithEventObject)
