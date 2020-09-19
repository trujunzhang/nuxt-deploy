import * as React from 'react'

interface IAppStylesProps {}

export class AppStyles extends React.Component<IAppStylesProps, {}> {
  constructor(props: IAppStylesProps, context) {
    super(props)
  }

  componentWillReceiveProps(nextProps: IAppStylesProps) {}

  render() {
    // return <style dangerouslySetInnerHTML={{ __html: require('../../../../styles/index.scss') }} />
    return null
  }
}
