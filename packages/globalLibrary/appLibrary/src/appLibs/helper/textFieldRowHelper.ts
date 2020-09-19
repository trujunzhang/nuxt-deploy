export class TextFieldRowHelper {
  static EDIT_MODEL_DATA_ROWS: IListDict<ITextFieldRow> = {
    INPUT_DISPLAY_NAME: {
      id: 'display_name',
      labelId: 'Name',
      type: 'text',
      name: 'displayName',
      placeHoldId: '',
      errorId: '',
      field: 'displayName'
    },
    INPUT_EVENT_WHAT: {
      id: 'event_what',
      labelId: 'What & Why',
      type: 'text',
      name: 'eventWhat',
      placeHoldId: '',
      errorId: '',
      field: 'eventWhat'
    },
    INPUT_RECIPE_PRICE: {
      id: 'recipe_price',
      labelId: 'Price',
      type: 'text',
      name: 'price',
      placeHoldId: '',
      errorId: '',
      field: 'price'
    },
    INPUT_REVIEW_BODY: {
      id: 'review_body',
      labelId:
        "Your review helps others learn about great local businesses. \n\n Please don't review this business if you received a freebie for writing this review, or if you're connected in any way to the owner or employees.",
      type: 'text',
      name: 'reviewBody',
      placeHoldId: '',
      errorId: '',
      field: 'reviewBody'
    }
  }
  static DATA_ROWS: IListDict<ITextFieldRow> = {
    INPUT_USERNAME_OR_EMAIL: {
      id: 'signin_username_or_email_input',
      labelId: 'Username or Email',
      type: 'text',
      name: 'usernameOrEmail',
      placeHoldId: '',
      errorId: '',
      field: 'usernameOrEmail'
    },
    INPUT_USERNAME: {
      id: 'username',
      labelId: 'Username',
      type: 'text',
      name: 'username',
      placeHoldId: '',
      errorId: '',
      field: 'username'
    },
    INPUT_EMAIL: {
      id: 'email',
      labelId: 'Email',
      type: 'email',
      name: 'email',
      placeHoldId: '',
      errorId: '',
      field: 'email'
    },
    INPUT_PASSWORD: {
      id: 'password',
      labelId: 'Password',
      type: 'password',
      name: 'password',
      placeHoldId: '',
      errorId: '',
      field: 'password'
    },
    INPUT_NEW_PASSWORD: {
      id: 'password',
      labelId: 'New Password',
      type: 'password',
      name: 'password',
      placeHoldId: '',
      errorId: '',
      field: 'password'
    }
  }
}
