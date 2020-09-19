import * as React from 'react'
import * as Telescope from '@appComponents/index'

interface IIEAEventsLayoutProps {
  reviewStatistic: IReviewStatisticResult
  forObject: IParseModelEvents
}

export class IEAEventsLayout extends React.Component<IIEAEventsLayoutProps, {}> {
  render() {
    const { forObject, reviewStatistic } = this.props
    return (
      <div className="main-content-wrap main-content-wrap--full">
        <div className="top-shelf top-shelf-grey">
          <Telescope.EventsSingleHeader reviewStatistic={reviewStatistic} forObject={forObject} />
        </div>

        <div id="super-container" className="content-container">
          <Telescope.EventsDetail forObject={forObject} />
        </div>
      </div>
    )
  }
}
