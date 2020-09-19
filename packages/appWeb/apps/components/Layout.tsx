import * as React from 'react'
import * as Telescope from '@appComponents/index'
import { Router } from '@web/server/routes'
import { checkedLoggedStatus, dismissAlertMessage } from '@appActions/index' // from '@web/actions'
import { UsersSession } from '@appActionUtils/index' // from '@appActionUtils/index' // '@app/library' //  '@app/actions-utils'
import { connect } from 'react-redux'
import { AppStyles } from './appStyles'

interface ILayoutStateProps {
  // Overlay
  postsOverlay: any
  detailedModelsOverlay: any
  // Alert
  appAlert: any
  // User
  isCheckedLoggedUser: any
  currentUser: IParseModelUsers
}

interface ILayoutDispatchProps {
  checkedLoggedStatusAction: any
  dismissAlertMessageAction: any
}

interface ILayoutProps extends ILayoutStateProps, ILayoutDispatchProps {
  showHeaderPanel?: boolean
}

interface ILayoutDefaultProps {
  showHeaderPanel: boolean
}

type LayoutPropsWithDefaults = ILayoutProps & ILayoutDefaultProps

function mapDispatchToProps(dispatch) {
  return {
    checkedLoggedStatusAction: (object) => dispatch(checkedLoggedStatus(object)),
    dismissAlertMessageAction: () => dispatch(dismissAlertMessage())
  }
}

function mapStateToProps(store) {
  return {
    // Overlay
    postsOverlay: store.postsOverlay,
    detailedModelsOverlay: store.detailedModelsOverlay,
    // Alert
    appAlert: store.appAlert,
    // User
    isCheckedLoggedUser: !!store.authSession.loaded,
    currentUser: store.authSession.user
  }
}

class Layout extends React.Component<ILayoutProps, {}> {
  public static defaultProps: Partial<LayoutPropsWithDefaults> = {
    showHeaderPanel: true
  }

  constructor(props: ILayoutProps, context) {
    super(props)

    this.props.checkedLoggedStatusAction(UsersSession.getCurrentParseUserModel())
    this.props.dismissAlertMessageAction()
  }

  componentWillReceiveProps(nextProps: ILayoutProps) {
    if (this.props.currentUser && !nextProps.currentUser) {
      Router.replace('/').then(() => window.scrollTo(0, 0))
    }
  }

  componentDidMount() {
    Router.onRouteChangeStart = (url: string) => {
      this.props.dismissAlertMessageAction()
      // console.log('route change: ', url)
    }
  }

  componentWillUnmount() {
    // Router.onRouteChangeStart = null
  }

  renderHeaderPanel() {
    return (
      <div className="page-header">
        <Telescope.HeaderContent />
      </div>
    )
  }

  render() {
    const { isCheckedLoggedUser } = this.props
    if (isCheckedLoggedUser === false) {
      return (
        <div className="placeholder_1WOC3">
          <div className="loader_54XfI animationRotate loader_OEQVm" />
        </div>
      )
    }
    const { children } = this.props

    const { showHeaderPanel } = this.props as LayoutPropsWithDefaults

    return (
      <div id="wrap" className="lang-en">
        <AppStyles />

        {showHeaderPanel && this.renderHeaderPanel()}

        {children}

        <Telescope.PopoverPhotos />

        <Telescope.AppPopup />

        <Telescope.AppFooter />
      </div>
    )
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Layout)
