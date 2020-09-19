import * as React from 'react'

interface IF8LoadingViewProps {
  loadingClass?: string
}

interface IF8LoadingViewDefaultProps {
  loadingClass: string
}

type F8LoadingViewPropsWithDefaults = IF8LoadingViewProps & IF8LoadingViewDefaultProps

export class F8LoadingView extends React.Component<IF8LoadingViewProps, {}> {
  public static defaultProps: Partial<F8LoadingViewPropsWithDefaults> = {
    loadingClass: 'results_37tfm'
  }

  /**
   * https://github.com/facebook/react-native/issues/2481
   * @returns {XML}
   */
  render() {
    const { loadingClass } = this.props as F8LoadingViewPropsWithDefaults
    return (
      <div className={loadingClass}>
        <div className="js-review-examples-throbber" id="ieatta-loading-section">
          <div className="throbber-container" />
        </div>
      </div>
    )
  }
}
