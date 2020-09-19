import * as React from 'react'
import { Link } from '@web/server/routes'

export class LoginHeaderContent extends React.Component<{}, {}> {
  render() {
    return (
      <div className="page-header">
        <div className="main-header main-content-wrap js-main-header webview-hidden main-header--simple">
          <div className="main-header_wrapper">
            <div className="content-container">
              <div className="arrange arrange--18 arrange--middle main-header_arrange">
                <div className="arrange_unit arrange_unit--fill align-middle main-header--full_arrange_unit main-header_search-container">
                  <div className="main-header_logo js-analytics-click" id="logo">
                    <Link prefetch href="/">
                      {'IEATTA'}
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
