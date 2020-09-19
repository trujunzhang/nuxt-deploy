import * as React from 'react'

import { AppAvatar } from './shared'

// tslint:disable-next-line:no-empty-interface
interface IAvatarFacebookPageProps {}

interface IAvatarFacebookPageState {
  name: string
  skypeId: string | null
  toggle: boolean
}

export class AvatarFacebookPage extends React.Component<
  IAvatarFacebookPageProps,
  IAvatarFacebookPageState
> {
  constructor(props: IAvatarFacebookPageProps) {
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
          <h2>Facebook</h2>
          <AppAvatar facebookId="100008343750912" size={40} />
          <AppAvatar facebookId="100008343750912" size={100} round={true} />
          <AppAvatar facebookId="100008343750912" size={150} round="20px" />
          <AppAvatar facebookId="100008343750912" size={200} />
        </section>
      </div>
    )
  }
}
