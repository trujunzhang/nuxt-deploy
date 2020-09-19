import * as React from 'react'

import { AppAvatar } from './shared'

// tslint:disable-next-line:no-empty-interface
interface IAvatarTwitterPageProps {}

interface IAvatarTwitterPageState {
  name: string
  skypeId: string | null
  toggle: boolean
}

export class AvatarTwitterPage extends React.Component<
  IAvatarTwitterPageProps,
  IAvatarTwitterPageState
> {
  constructor(props: IAvatarTwitterPageProps) {
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
          <h2>Twitter using Avatar Redirect</h2>
          <AppAvatar twitterHandle="sitebase" size={40} />
          <AppAvatar twitterHandle="sitebase" size={100} round={true} />
          <AppAvatar twitterHandle="sitebase" size={150} round="20px" />
          <AppAvatar twitterHandle="sitebase" size={200} />
        </section>
      </div>
    )
  }
}
