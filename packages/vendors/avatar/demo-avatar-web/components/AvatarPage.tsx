import * as React from 'react'

import { AppAvatar } from './shared'

import { getRandomColor } from '@app/avatar'

const customColors: string[] = [
  '#5E005E',
  '#AB2F52',
  '#E55D4A',
  '#E88554',
  '#4194A6',
  '#82CCD9',
  '#FFCC6B',
  '#F2855C',
  '#7D323B'
]

// tslint:disable-next-line:no-empty-interface
interface IAppAvatarPageProps {}

interface IAppAvatarPageState {
  name: string
  skypeId: string | null
  toggle: boolean
  color: string
}

export class AppAvatarPage extends React.Component<IAppAvatarPageProps, IAppAvatarPageState> {
  constructor(props: IAppAvatarPageProps) {
    super(props)

    this.state = {
      name: 'Wim Mostmans',
      skypeId: null,
      toggle: true,
      // tslint:disable-next-line:object-literal-sort-keys
      color: customColors[0]
    }
  }

  public onChangeName = () => {
    this.setState({
      name: 'Foo Bar',
      skypeId: null
    })
  }

  public onSetSkype = () => {
    this.setState({ skypeId: 'sitebase' })
  }

  public onClick = () => {
    alert('Clicked!')
  }

  public onToggle = () => {
    this.setState({
      toggle: !this.state.toggle
    })
  }

  public onToggleColor = () => {
    const current = customColors.indexOf(this.state.color)
    const next = (current + 1) % customColors.length

    this.setState({ color: customColors[next] })
  }

  public render() {
    return (
      <div>
        {/* <section>
          <h2>Instagram using AppAvatar Redirect</h2>
          <AppAvatar    instagramId="sitebase" size={40} />
          <AppAvatar    instagramId="sitebase" size={100} round={true} />
          <AppAvatar    instagramId="sitebase" size={150} round="20px" />
          <AppAvatar    instagramId="sitebase" size={200} />
        </section> */}

        <section>
          <h2>Vkontakte</h2>
          <AppAvatar vkontakteId="1" size={40} />
          <AppAvatar vkontakteId="1" size={100} round={true} />
          <AppAvatar vkontakteId="1" size={150} round="20px" />
          <AppAvatar vkontakteId="1" size={200} />
        </section>

        <section>
          <h2>Skype</h2>
          <AppAvatar skypeId="sitebase" size={40} />
          <AppAvatar skypeId="sitebase" size={100} round={true} />
          <AppAvatar skypeId="sitebase" size={150} round="20px" />
          <AppAvatar skypeId="sitebase" size={200} />
        </section>

        <section>
          <h2>Initials</h2>
          <div>
            <button onClick={this.onChangeName}>Change name</button>
            <button onClick={this.onSetSkype}>Set skype ID</button>
          </div>
          <AppAvatar name={this.state.name} skypeId={this.state.skypeId} size={40} />
          <AppAvatar name={this.state.name} size={100} round={true} />
          <AppAvatar name={this.state.name} size={150} round="20px" />
          <AppAvatar name={this.state.name} size={200} />
        </section>

        <section>
          <h2>onClick</h2>
          <AppAvatar name={this.state.name} onClick={this.onClick} size={200} />
        </section>

        <section>
          <h2>Initials with different font sizes</h2>
          <div>
            <AppAvatar
              name={this.state.name}
              skypeId={this.state.skypeId}
              size={40}
              textSizeRatio={2}
            />
            <AppAvatar name={this.state.name} size={100} round={true} textSizeRatio={2} />
            <AppAvatar name={this.state.name} size={150} round="20px" textSizeRatio={2} />
            <AppAvatar name={this.state.name} size={200} textSizeRatio={2} />
          </div>
          <div>
            <AppAvatar
              name={this.state.name}
              skypeId={this.state.skypeId}
              size={40}
              textSizeRatio={4}
            />
            <AppAvatar name={this.state.name} size={100} round={true} textSizeRatio={4} />
            <AppAvatar name={this.state.name} size={150} round="20px" textSizeRatio={4} />
            <AppAvatar name={this.state.name} size={200} textSizeRatio={4} />
          </div>
        </section>

        <section>
          <h2>Size in different units</h2>
          <div>
            <AppAvatar value="30pt" skypeId={this.state.skypeId} size="30pt" textSizeRatio={4} />
            <AppAvatar value="90pt" size="90pt" round={true} textSizeRatio={4} />
            <AppAvatar value="130pt" size="130pt" round="20px" textSizeRatio={4} />
            <AppAvatar value="170pt" size="170pt" textSizeRatio={4} />
          </div>
          <div>
            <AppAvatar value="4vw" skypeId={this.state.skypeId} size="4vw" textSizeRatio={4} />
            <AppAvatar value="6vw" size="6vw" round={true} textSizeRatio={4} />
            <AppAvatar value="10vw" size="10vw" round="20px" textSizeRatio={4} />
            <AppAvatar value="15vw" size="15vw" textSizeRatio={4} />
          </div>
          <div
            style={{
              overflow: 'hidden',
              // tslint:disable-next-line:object-literal-sort-keys
              margin: '0 auto',
              width: '800px',
              textAlign: 'center'
            }}>
            <div style={{ width: '200px', height: '200px', float: 'left' }}>
              <AppAvatar value="30%" skypeId={this.state.skypeId} size="30%" />
            </div>
            <div style={{ width: '200px', height: '200px', float: 'left' }}>
              <AppAvatar value="45%" size="45%" round={true} />
            </div>
            <div style={{ width: '200px', height: '200px', float: 'left' }}>
              <AppAvatar value="60%" size="60%" round="20px" />
            </div>
            <div style={{ width: '200px', height: '200px', float: 'left' }}>
              <AppAvatar value="100%" size="100%" />
            </div>
          </div>
        </section>

        <section>
          <h2>Custom colors</h2>
          <div>
            <AppAvatar
              name={this.state.name}
              color={getRandomColor('Jim Jones', customColors)}
              size={40}
            />
            <AppAvatar
              name={this.state.name}
              color={getRandomColor('Jamie Jones', customColors)}
              size={100}
              round={true}
            />
            <AppAvatar
              name={this.state.name}
              color={getRandomColor('JJ', customColors)}
              size={150}
              round="20px"
            />
            <AppAvatar
              name={this.state.name}
              color={getRandomColor(this.state.name, customColors)}
              size={200}
            />
          </div>
        </section>

        <section>
          <h2>Initials with maximum number of characters</h2>
          <div>
            <AppAvatar
              name={this.state.name}
              maxInitials={2}
              skypeId={this.state.skypeId}
              size={40}
              textSizeRatio={2}
            />
            <AppAvatar
              name={this.state.name}
              maxInitials={1}
              size={100}
              round={true}
              textSizeRatio={2}
            />
            <AppAvatar name={this.state.name} size={150} round="20px" textSizeRatio={2} />
            <AppAvatar name={this.state.name} size={200} textSizeRatio={2} />
          </div>
        </section>

        <section>
          <h2>Double fallback: Facebook to Google to initials</h2>
          <AppAvatar
            facebookId="invalidfacebookusername"
            googleId="invalidgoogleid"
            name="Sitebase"
            size={200}
            round={true}
          />
        </section>

        <section>
          <h2>Custom style</h2>
          <AppAvatar
            name="Wim Mostmans"
            style={{ borderRadius: 10, border: 'solid 10px rgba(0,0,0,0.5)' }}
            size={100}
          />
        </section>

        <section>
          <h2>Unstyled</h2>
          <AppAvatar name="Wim Mostmans" unstyled={true} />
        </section>
        <section>
          <h2>Vertical Alignment</h2>
          <AppAvatar name="Wim Mostmans" size={50} />
          Wim Mostmans
          <AppAvatar name="Wim Mostmans" size={50} round={true} />
          Wim Mostmans
          <AppAvatar md5Email="8c5d4c4b9ef6c68c4ff91c319d4c56be" size={50} round={true} />
          Wim Mostmans
          <AppAvatar md5Email="8c5d4c4b9ef6c68c4ff91c319d4c56be" size={150} />
          Wim Mostmans
        </section>
        <section>
          <h2>Toggle with cached AppAvatars</h2>
          <div>
            <button onClick={this.onToggle}>Click to toggle</button>
          </div>
          {this.state.toggle && (
            <div>
              <AppAvatar name="Wim Mostmans" size={50} />
              <AppAvatar name="Wim Mostmans" size={50} round={true} />
              <AppAvatar md5Email="8c5d4c4b9ef6c68c4ff91c319d4c56be" size={50} round={true} />
              <AppAvatar md5Email="8c5d4c4b9ef6c68c4ff91c319d4c56be" size={150} />
            </div>
          )}
        </section>
        <section>
          <h2>Toggle color</h2>
          <div>
            <button onClick={this.onToggleColor}>Click to toggle</button>
          </div>
          <div>{this.state.color}</div>
          <div>
            <AppAvatar name="Wim Mostmans" size={50} color={this.state.color} />
            <AppAvatar name="Wim Mostmans" size={50} round={true} color={this.state.color} />
            <AppAvatar
              md5Email="8c5d4c4b9ef6c68c4ff91c319d4c56be"
              size={50}
              round={true}
              color={this.state.color}
            />
            <AppAvatar
              md5Email="8c5d4c4b9ef6c68c4ff91c319d4c56be"
              size={150}
              color={this.state.color}
            />
          </div>
        </section>

        <section>
          <h2>Configuration Context</h2>
          <div>
            <AppAvatar name="Jim Jones" size={40} />
            <AppAvatar name="Jamie Jones" size={100} round={true} />
            <AppAvatar name="JJ" size={150} round="20px" />
            <AppAvatar name={this.state.name} size={200} />
          </div>
        </section>

        <section>
          <h2>Custom Initials Function</h2>
          <div>
            <AppAvatar name="Jim Jones" size={40} />
            <AppAvatar name="Jamie Jones" size={100} round={true} />
            <AppAvatar name="JJ" size={150} round="20px" />
            <AppAvatar name={this.state.name} size={200} />
          </div>
        </section>
      </div>
    )
  }
}
