import * as React from 'react'

interface IUsersVerifyEmailState {
  message: string
  wait: boolean
}

export class UsersVerifyEmail extends React.Component<{}, IUsersVerifyEmailState> {
  constructor(props, context) {
    super(props)
    this.state = {
      message: '',
      wait: false
    }
  }

  componentDidMount() {}

  render() {
    const { message } = this.state
    if (!!message) {
      return (
        <div className="password-reset-form">
          <div className="errorMessage_2lxEG">{message}</div>
        </div>
      )
    }
    return null
  }
}
