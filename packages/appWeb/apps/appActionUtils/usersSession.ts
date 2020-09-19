import { ParseModels, ParseObjects } from '@appModels/index'

export class UsersSession {
  static getCurrentParseUserModel(): ParseModelUsersWithNull {
    const objectUser: IParseUserWithUndefined = ParseObjects.ParseUsers.currentUser()
    const userModel: ParseModelUsersWithNull = ParseModels.fromParseUsers(objectUser)
    return userModel
  }
}
