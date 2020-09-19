import { Users } from '../users'

export class CreatorHelper {
  static fixCreatorForParseModel(parseModel: IParseCreatorModel) {
    let user: IParseModelUsers = Users.anonymousUser
    if (!!parseModel && !!parseModel.creator) {
      return parseModel.creator
    }
    return user
  }
}
