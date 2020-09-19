/**
 * The components needed from React
 */
import * as React from 'react'

interface IF8EmptySectionProps {
  title: string
  text: string
  renderCustom?: () => any
}

export class F8EmptySection extends React.Component<IF8EmptySectionProps, {}> {
  render() {
    const { title, text, renderCustom } = this.props
    return (
      <div className="empty-section">
        <h4 className="no-section-title">{title}</h4>
        <p className="no-recent-activity nobtm">
          {text}
          {!!renderCustom && renderCustom()}
        </p>
      </div>
    )
  }
}
