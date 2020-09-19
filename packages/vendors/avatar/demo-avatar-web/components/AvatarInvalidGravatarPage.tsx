import * as React from 'react'

import { AppAvatar } from './shared'

// tslint:disable-next-line:no-empty-interface
interface IAvatarInvalidGravatarPageProps {}

interface IAvatarInvalidGravatarPageState {
  name: string
  skypeId: string | null
  toggle: boolean
}

export class AvatarInvalidGravatarPage extends React.Component<
  IAvatarInvalidGravatarPageProps,
  IAvatarInvalidGravatarPageState
> {
  constructor(props: IAvatarInvalidGravatarPageProps) {
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
          <h2>Invalid gravatar</h2>
          <AppAvatar email="bla" name="Jim Jones" size={80} />
          <AppAvatar email="foo" name="Jamie Jones" size={80} />
          <AppAvatar name="Jessica Jones" size={80} />
          <AppAvatar name="Jeronimo Jones" size={80} />
        </section>
      </div>
    )
  }
}
