import { getRandomColor, defaultInitials } from '../utils'

export interface IValueSource {
  color?: string
  colors?: string[]
  name?: string
  value?: string | null
  // value?: string
  email?: string
  maxInitials?: number
  initials?: string | any
}

export class ValueSource {
  private props: IValueSource

  constructor(props: IValueSource) {
    this.props = props
  }

  isCompatible = () => {
    return !!(this.props.name || this.props.value || this.props.email)
  }

  getInitials() {
    const { name, initials } = this.props

    if (typeof initials === 'string') {
      return initials
    }

    if (typeof initials === 'function') {
      return initials(name, this.props)
    }

    return defaultInitials(name || '', this.props)
  }

  getValue() {
    if (this.props.name) {
      return this.getInitials()
    }

    if (this.props.value) {
      return this.props.value
    }

    return null
  }

  getColor() {
    const { color, colors, name, email, value } = this.props
    const colorValue = name || email || value
    return color || getRandomColor(colorValue, colors)
  }

  get = (setState: any) => {
    const value = this.getValue()

    if (!value) {
      return setState(null)
    }

    setState({
      sourceName: 'text',
      value,
      color: this.getColor()
    })
  }
}
