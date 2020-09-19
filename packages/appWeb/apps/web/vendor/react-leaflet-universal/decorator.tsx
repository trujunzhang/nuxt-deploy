import * as React from 'react'

interface IdecoratorProps {
  children: any
  leafletRef: any
}

interface IDecoratedState {
  loaded: boolean
}

export function decorate(componentName: string) {
  const displayName = `LeafletUniv${componentName}`

  class Decorated extends React.Component<IdecoratorProps, IDecoratedState> {
    private ClientComponent: any

    constructor(props) {
      super(props)
      this.state = { loaded: false }
      // this.constructor.displayName = displayName
    }

    componentDidMount() {
      this.setState(() => ({ loaded: true }))
      this.ClientComponent = require('react-leaflet')[componentName]
    }

    render() {
      if (!this.state.loaded) {
        return null
      }
      const { ClientComponent } = this

      const { children, leafletRef, ...rest } = this.props
      const childComponents = typeof children === 'function' ? children() : children
      return (
        <ClientComponent {...rest} ref={leafletRef}>
          {childComponents}
        </ClientComponent>
      )
    }
  }

  return Decorated
}
