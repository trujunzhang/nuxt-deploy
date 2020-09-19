import * as React from 'react'

interface IF8SectionHeaderTitleProps {
  title: string
  subTitle?: string
}

interface IF8SectionHeaderTitleDefaultProps {
  subTitle: string
}

type F8SectionHeaderTitlePropsWithDefaults = IF8SectionHeaderTitleProps &
  IF8SectionHeaderTitleDefaultProps

export class F8SectionHeaderTitle extends React.Component<IF8SectionHeaderTitleProps, {}> {
  public static defaultProps: Partial<F8SectionHeaderTitlePropsWithDefaults> = {
    subTitle: ''
  }

  render() {
    const { subTitle } = this.props as F8SectionHeaderTitlePropsWithDefaults

    const { title } = this.props

    return (
      <div className="arrange arrange--12 arrange--baseline">
        <div className="arrange_unit nowrap">
          <h3 className="subscribe-list_title">{title}</h3>
        </div>

        <div className="arrange_unit arrange_unit--fill">
          <span>{subTitle}</span>
        </div>
      </div>
    )
  }
}
