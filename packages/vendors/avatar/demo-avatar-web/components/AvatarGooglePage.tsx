import * as React from 'react'

import { AppAvatar } from './shared'

// tslint:disable-next-line:no-empty-interface
interface IAvatarGooglePageProps {}

interface IAvatarGooglePageState {
  name: string
  skypeId: string | null
  toggle: boolean
}

export class AvatarGooglePage extends React.Component<
  IAvatarGooglePageProps,
  IAvatarGooglePageState
> {
  constructor(props: IAvatarGooglePageProps) {
    super(props)

    this.state = {
      name: 'Wim Mostmans',
      skypeId: null,
      toggle: true
    }
  }

  public render() {
    return (
      <div>
        <section>
          <h2>Google+</h2>
          <AppAvatar googleId="116933859726289749306" size={40} />
          <AppAvatar googleId="116933859726289749306" size={100} round={true} />
          <AppAvatar googleId="116933859726289749306" size={150} round="20px" />
          <AppAvatar googleId="116933859726289749306" size={200} />
        </section>
      </div>
    )
  }
}
