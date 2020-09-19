import * as React from 'react'

import InternalState from '../internal-state'

import { AvatarWebView } from './avatarWebView'

import { AvatarClientView } from './avatarClientView'

import {
  GravatarSource,
  FacebookSource,
  VkontakteSource,
  TwitterSource,
  GoogleSource,
  SkypeSource,
  ValueSource,
  SrcSource,
  IconSource,
  createRedirectSource as AvatarRedirectSource
} from '../sources'

const SOURCES = [
  FacebookSource,
  GoogleSource,
  TwitterSource,
  AvatarRedirectSource('twitter', 'twitterHandle'),
  // AvatarRedirectSource('instagram', 'instagramId'),
  VkontakteSource,
  SkypeSource,
  GravatarSource,
  SrcSource,
  ValueSource,
  IconSource
]

// Collect propTypes for each individual source
const sourcePropTypes = SOURCES.reduce((r: any, s: any) => Object.assign(r, s.propTypes), {})

function matchSource(Source: any, props: any, cb: any) {
  const instance = new Source(props)

  if (!instance.isCompatible(props)) {
    return cb()
  }

  instance.get((state: any) => {
    if (state) {
      cb(state)
    } else {
      cb()
    }
  })
}

import { IAvatarProps, IAvatarState, AvatarPropsWithDefaults } from './iAvatar'

export class Avatar extends React.Component<IAvatarProps, IAvatarState> {
  private static defaultProps: Partial<AvatarPropsWithDefaults> = {
    className: '',
    fgColor: '#FFF',
    round: false,
    size: 100,
    textSizeRatio: 3,
    unstyled: false
  }

  constructor(props: IAvatarProps) {
    super(props)

    this.state = {
      internal: null,
      // Src was added to state when the component loaded, this caused the
      // "next" (internal.fetch) handler to be called multiple times. Because of
      // this the initials source was skipped most times.
      src: null,
      value: null,
      color: props.color
    }
  }

  componentDidMount() {
    const { clientStaticImageSource } = this.props
    if (!clientStaticImageSource) {
      this.fetch()
    }
  }

  componentWillReceiveProps(newProps: IAvatarProps) {
    let needsUpdate = false

    // This seems redundant
    //
    // Props that need to be in `state` are
    // `value`, `src` and `color`
    for (const prop in sourcePropTypes) {
      needsUpdate = needsUpdate || (newProps as any)[prop] !== (this.props as any)[prop]
    }

    if (needsUpdate) {
      setTimeout(this.fetch, 0)
    }
  }

  componentWillUnmount() {
    if (this.state.internal) {
      this.state.internal.active = false
    }
  }

  createFetcher = (internal: any) => (errEvent: any) => {
    if (!internal.isActive(this.state)) {
      return
    }

    // Mark img source as failed for future reference
    if (errEvent && errEvent.type === 'error') {
    }

    const pointer = internal.sourcePointer
    if (SOURCES.length === pointer) {
      return
    }

    const source: any = SOURCES[pointer]

    internal.sourcePointer++

    matchSource(source, this.props, (nextState: any) => {
      if (!nextState) {
        return setTimeout(internal.fetch, 0)
      }

      if (!internal.isActive(this.state)) {
        return
      }

      // Reset other values to prevent them from sticking (#51)
      const fixedNextState = Object.assign(
        {
          src: null,
          value: null,
          color: null
        },
        nextState
      )

      this.setState((state) => {
        // Internal state has been reset => we received new props
        return internal.isActive(state) ? fixedNextState : {}
      })
    })
  }

  fetch = () => {
    const internal: any = new InternalState()
    internal.fetch = this.createFetcher(internal)

    this.setState({ internal }, internal.fetch)
  }

  render() {
    const { renderClientContainerView, renderWebContainerView } = this.props

    const viewProperties = {
      ...this.props,
      ...this.state
    }

    // console.log(' showForWeb:', showForWeb)

    if (!!renderClientContainerView) {
      return <AvatarClientView {...viewProperties} />
    }

    if (!!renderWebContainerView) {
      return <AvatarWebView {...viewProperties} />
    }

    return null
  }
}
