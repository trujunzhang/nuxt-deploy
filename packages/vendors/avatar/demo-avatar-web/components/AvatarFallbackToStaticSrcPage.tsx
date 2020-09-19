import * as React from 'react'

import { AppAvatar } from './shared'

// tslint:disable-next-line:no-empty-interface
interface IAvatarFallbackToStaticSrcPageProps {}

interface IAvatarFallbackToStaticSrcPageState {
  name: string
  skypeId: string | null
  toggle: boolean
}

export class AvatarFallbackToStaticSrcPage extends React.Component<
  IAvatarFallbackToStaticSrcPageProps,
  IAvatarFallbackToStaticSrcPageState
> {
  constructor(props: IAvatarFallbackToStaticSrcPageProps) {
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
          <h2>Fallback to static src</h2>
          <AppAvatar
            size={150}
            facebookId="invalidfacebookusername"
            src="https://thumbs.dreamstime.com/m/cute-monster-avatar-smiling-face-yellow-color-52010608.jpg"
            name="Foo Bar"
          />
        </section>
      </div>
    )
  }
}
