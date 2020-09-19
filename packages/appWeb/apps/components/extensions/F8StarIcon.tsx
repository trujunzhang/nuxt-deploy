import * as React from 'react'

interface IF8StarIconProps {
  rate?: number
  iconType?: string
  iconExtension?: string
  width?: number
  height?: number
}

interface IF8StarIconDefaultProps {
  rate: number
  iconType: string
  iconExtension: string
  width: number
  height: number
}

type F8StarIconPropsWithDefaults = IF8StarIconProps & IF8StarIconDefaultProps

interface IF8StarIconState {}

export class F8StarIcon extends React.Component<IF8StarIconProps, IF8StarIconState> {
  public static defaultProps: Partial<F8StarIconPropsWithDefaults> = {
    rate: 0,
    iconType: 'large',
    iconExtension: 'rating-large',
    width: 84,
    height: 303
  }

  constructor(props: IF8StarIconProps, context) {
    super(props)
    this.state = {}
  }

  /**
   * https://github.com/facebook/react-native/issues/2481
   * @returns {XML}
   */
  render() {
    const { rate, iconType, iconExtension, width, height } = this
      .props as F8StarIconPropsWithDefaults

    const rateClass =
      // 'i-stars i-stars--' + iconType + '-' + rate + ' rating-large'
      `i-stars i-stars--${iconType}-${rate} ${iconExtension}`
    const rateTitle = rate + '.0 star rating'
    return (
      <div className={rateClass} title={rateTitle}>
        <img
          className="offscreen"
          width={84}
          height={303}
          src="/static/images/stars.png"
          alt={rateTitle}
        />
      </div>
    )
  }
}
