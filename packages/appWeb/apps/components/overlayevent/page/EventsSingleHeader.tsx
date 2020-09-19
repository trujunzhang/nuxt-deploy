import * as Telescope from '@appComponents/index'
import * as React from 'react'
import * as Types from '@app/types'

interface IEventsSingleHeaderProps {
  reviewStatistic: IReviewStatisticResult
  forObject: IParseModelEvents
}

export class EventsSingleHeader extends React.Component<IEventsSingleHeaderProps, {}> {
  renderSubHeader() {
    const { forObject, reviewStatistic } = this.props

    return (
      <div className="clearfix layout-block layout-a event-details_cards-container top-shelf_overlap column--responsive">
        <div className="column column-alpha column--responsive">
          <Telescope.EventsSingleHeaderLeftPanel
            reviewStatistic={reviewStatistic}
            forObject={forObject}
          />
        </div>

        <div className="column column-beta column--responsive">
          <Telescope.EventsSingleHeaderRightMap forObject={forObject} />
        </div>
      </div>
    )
  }

  render() {
    const { forObject, reviewStatistic } = this.props
    return (
      <div className="content-container">
        <Telescope.F8SinglePageTopHeader
          objectSchemaName={Types.model.PARSE_EVENTS}
          reviewStatistic={reviewStatistic}
          forObject={forObject}
        />
        {this.renderSubHeader()}
      </div>
    )
  }
}
