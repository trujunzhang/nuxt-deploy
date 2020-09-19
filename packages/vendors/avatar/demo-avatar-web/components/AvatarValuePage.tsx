import * as React from 'react'

import { AppAvatar } from './shared'

// tslint:disable-next-line:no-empty-interface
interface IAvatarValuePageProps {}

interface IAvatarValuePageState {
  name: string
  skypeId: string | null
  toggle: boolean
}

export class AvatarValuePage extends React.Component<IAvatarValuePageProps, IAvatarValuePageState> {
  constructor(props: IAvatarValuePageProps) {
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
          <h2>Value</h2>
          <AppAvatar value="86%" size={40} />
          <AppAvatar value="86%" size={100} round={true} />
          <AppAvatar value="86%" size={150} round="20px" />
          <AppAvatar value="86%" size={200} />
        </section>
      </div>
    )
  }
}
