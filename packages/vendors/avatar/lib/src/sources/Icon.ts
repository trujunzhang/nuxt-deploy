import { getRandomColor } from '../utils'

export interface IIconSource {
  color?: string
  colors?: string[]
}

export class IconSource {
  private props: IIconSource
  private icon = '✷'

  constructor(props: IIconSource) {
    this.props = props
  }

  isCompatible = () => true

  get = (setState: any) => {
    const { color, colors } = this.props
    setState({
      sourceName: 'icon',
      value: this.icon,
      color: color || getRandomColor(this.icon, colors)
    })
  }
}
