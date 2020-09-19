import * as Telescope from '@appComponents/index'
import * as React from 'react'

interface IF8SinglePageTopHeaderProps {
  objectSchemaName: string
  forObject: IParseBaseModel
  reviewStatistic: IReviewStatisticResult
}

export class F8SinglePageTopHeader extends React.Component<IF8SinglePageTopHeaderProps, {}> {
  render() {
    const { objectSchemaName, forObject, reviewStatistic } = this.props
    return (
      <div className="biz-page-header clearfix">
        <Telescope.F8SinglePageHeaderTopLeftPanel
          objectSchemaName={objectSchemaName}
          forObject={forObject}
          reviewStatistic={reviewStatistic}
        />

        <div className="biz-page-header-right u-relative">
          <Telescope.F8SinglePageHeaderButtonsSection
            objectSchemaName={objectSchemaName}
            forObject={forObject}
            showEdit={false}
          />
        </div>
      </div>
    )
  }
}
