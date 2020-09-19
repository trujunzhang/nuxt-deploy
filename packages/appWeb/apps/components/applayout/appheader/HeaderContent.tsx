import * as React from 'react'
import * as Telescope from '@appComponents/index'
import { Link } from '@web/server/routes'
import { connect } from 'react-redux'

interface IHeaderContentStateProps {
  currentUser: ParseModelUsersWithNull
}

interface IHeaderContentDispatchProps {}

interface IHeaderContentProps extends IHeaderContentStateProps, IHeaderContentDispatchProps {}

interface IHeaderContentState {}

function mapDispatchToProps(dispatch) {
  return {}
}
function mapStateToProps(store) {
  return {
    currentUser: store.authSession.user 
  }
}

class HeaderContent extends React.Component<IHeaderContentProps, IHeaderContentState> {
  constructor(props: IHeaderContentProps) {
    super(props)
    this.state = {}
  }

  renderLeft() {
    return (
      <div className="arrange_unit main-header--full_arrange_unit">
        <div className="main-header_logo js-analytics-click" id="logo">
          <Link route="/">{'IEATTA'}</Link>
        </div>
      </div>
    )
  }

  render() {
    const { currentUser } = this.props

    return (
      <div className="main-header main-content-wrap js-main-header webview-hidden">
        <div className="main-header_wrapper">
          <div className="content-container">
            <div className="arrange arrange--18 arrange--middle main-header_arrange">
              {this.renderLeft()}

              <Telescope.HeaderContentSearchBar />

              {!!currentUser && <Telescope.HeaderRightUserIconsPanel currentUser={currentUser} />}

              {!!currentUser ? (
                <Telescope.HeaderRightUserPanel currentUser={currentUser} />
              ) : (
                <Telescope.HeaderRightLoginPanel />
              )}
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(HeaderContent)
