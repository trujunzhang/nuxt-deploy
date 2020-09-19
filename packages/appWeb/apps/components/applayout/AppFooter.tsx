import * as React from 'react'
import { MomentUtils } from '@app/tools'

export class AppFooter extends React.Component<{}, {}> {
  renderFooterIcon() {
    return <div className="main-footer_city-landscape-img" />
  }

  render() {
    const thisYear = MomentUtils.getThisYearString()
    return (
      <div className="main-content-wrap main-content-wrap--separated">
        <div className="content-container">
          <div className="main-footer webview-hidden">
            {this.renderFooterIcon()}

            <div className="main-footer_copyright">
              {`Copyright © ${thisYear} VirtualBreak, LLC. IEATTA,`}
              {' and related marks are registered trademarks of VirtualBreak, LLC.'}
            </div>
          </div>
        </div>
      </div>
    )
  }
}
