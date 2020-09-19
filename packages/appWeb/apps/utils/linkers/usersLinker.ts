export class UsersLinker {
  static getSelectedUserIdFromRouter({ router }) {
    const { query } = router
    if (!!query.userId) {
      return query.userId
    }
    return ''
  }

  static fixSelectedUserId(lastSelectedUserId, leftUsersListTask) {
    if (lastSelectedUserId !== '') {
      return lastSelectedUserId
    }
    const usersResults = leftUsersListTask.results
    if (usersResults.length > 0) {
      return usersResults[0].id
    }
    return ''
  }
}
