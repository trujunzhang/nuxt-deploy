import * as React from 'react'

interface IUsersRemovedAccountState {
  message: string
  wait: boolean
}

export class UsersRemovedAccount extends React.Component<{}, IUsersRemovedAccountState> {
  constructor(props, context) {
    super(props)
    this.state = {
      message: '',
      wait: false
    }
  }

  componentDidMount() {}

  checkAndRemoveUser(currentUser) {}

  componentWillReceiveProps(nextProps, nextContext) {}

  render() {
    const { message } = this.state
    const { currentUser } = this.context
    if (!currentUser) {
      // return (
      //   <Telescope.UserLoginPopup
      //     comp={{
      //       object: {showCloseIcon: false, title: 'Account Deletion', subtitle: ''}
      //     }}
      //   />
      // )
      return null
    } else if (!!message) {
      return (
        <div className="password-reset-form">
          <div className="errorMessage_2lxEG">{message}</div>
        </div>
      )
    }
    return null
  }
}
