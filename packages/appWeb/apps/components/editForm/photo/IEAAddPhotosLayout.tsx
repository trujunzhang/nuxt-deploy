import * as Telescope from '@appComponents/index'
import * as React from 'react'

interface IIEAAddPhotosLayoutProps {
  modelType: string
  forObject: any
}

export class IEAAddPhotosLayout extends React.Component<IIEAAddPhotosLayoutProps, {}> {
  constructor(props) {
    super(props)
    this.state = {}
  }

  componentWillReceiveProps(nextProps) {
    this.setState({})
  }

  render() {
    const { modelType, forObject } = this.props
    return (
      <div className="main-content-wrap main-content-wrap--full">
        <div id="super-container" className="content-container">
          <div className="container">
            <Telescope.IEAAddPhotosTop modelType={modelType} forObject={forObject} />

            <Telescope.IEAAddPhotosForm modelType={modelType} forObject={forObject} />
          </div>
        </div>
      </div>
    )
  }
}
