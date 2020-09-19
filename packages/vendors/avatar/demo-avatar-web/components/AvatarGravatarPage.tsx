import * as React from 'react'

import { AppAvatar } from './shared'

// tslint:disable-next-line:no-empty-interface
interface IAvatarGravatarPageProps {}

interface IAvatarGravatarPageState {
  name: string
  skypeId: string | null
  toggle: boolean
}

export class AvatarGravatarPage extends React.Component<
  IAvatarGravatarPageProps,
  IAvatarGravatarPageState
> {
  constructor(props: IAvatarGravatarPageProps) {
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
          <h2>Gravatar</h2>
          <AppAvatar
            className="myCustomClass"
            md5Email="8c5d4c4b9ef6c68c4ff91c319d4c56be"
            size={40}
          />
          <AppAvatar md5Email="8c5d4c4b9ef6c68c4ff91c319d4c56be" size={100} round={true} />
          <AppAvatar md5Email="8c5d4c4b9ef6c68c4ff91c319d4c56be" size={150} round="20px" />
          <AppAvatar md5Email="8c5d4c4b9ef6c68c4ff91c319d4c56be" size={200} />
        </section>
      </div>
    )
  }
}
