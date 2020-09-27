
export interface IAuthUser {
  uid: string
  email: string
  displayName: string
  photoURL: string
}

export class AuthUserModel {
  static mockedUser (): IAuthUser {
    const model : IAuthUser = {
      uid: 'mockedUID',
      email: 'mock@gmail.com',
      displayName: 'mockedDisplayName',
      photoURL: 'mockedPhotoUrl'
    }
    return model
  }
}
